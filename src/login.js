import React, { Component } from "react";
import { Checkbox } from "react-icheck";
import rp from "request-promise";
import Logout from "./logout";
import "./Login.css";

let providers = {
  facebook: {
    title: "Sign in using Facebook",
    classNameButton: "btn-facebook",
    classNameFA: "fa fa-facebook"
  },
  google: {
    title: "Sign in using Google+",
    classNameButton: "btn-google",
    classNameFA: "fa-google-plus"
  },
  gitlab: {
    title: "Sign in using Gitlab",
    classNameButton: "btn-gitlab",
    classNameFA: "fa-gitlab"
  }
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
      getTokenError: false,
      getTokenErrorMessage: ""
    };
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const options = {
      method: "POST",
      url: this.props.tokenUrl,
      headers: {
        "content-type": "application/json"
      },
      body: {
        grant_type: "password",
        username: this.state.username,
        password: this.state.password,
        audience: this.props.audience,
        scope: this.props.scope,
        client_id: this.props.client_id
      },
      json: true
    };

    rp(options)
      .then(response => {
        const access_token = response.access_token;
        const token_type = response.token_type;
        this.changeStatusGetTokenError(false);
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("token_type", token_type);
        if (this.props.redirectUrl) {
          window.location = `${this.props
            .redirectUrl}?access_token=${access_token}`;
        }
      })
      .catch(error => {
        console.error(error);
        this.changeStatusGetTokenError(true, error.error.error_description);
      });
  }

  renderUserCredentialsEnabled() {
    if (this.props.userCredentialsEnabled) {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="form-group has-feedback">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <span className="glyphicon glyphicon-user form-control-feedback" />
          </div>
          <div className="form-group has-feedback">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <span className="glyphicon glyphicon-lock form-control-feedback" />
          </div>
          <div className="row">
            <div className="col-xs-8">
              <div className="remember_me">
                <Checkbox
                  checkboxClass="icheckbox_square-blue"
                  increaseArea="50%"
                  label="Remember Me"
                />
              </div>
            </div>
            <div className="col-xs-4">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-flat"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      );
    } else {
      return <div />;
    }
  }

  renderAuthProviders() {
    let authProviders = [];
    if (this.props.authProviders.length > 0) {
      authProviders = this.props.authProviders.map(provider => {
        if (providers[provider]) {
          return (
            <a
              href="#"
              className={`btn btn-block btn-social ${providers[provider]
                .classNameButton} btn-flat`}
            >
              <i className={`fa ${providers[provider].classNameFA}`} />
              {providers[provider].title}
            </a>
          );
        } else {
          return "";
        }
      });
    }
    return authProviders;
  }

  renderCalloutError() {
    if (this.state.getTokenError) {
      return (
        <span>
          <br />
          <div className="callout callout-danger">
            <h4>Error</h4>
            <p>{this.state.getTokenErrorMessage}</p>
          </div>
        </span>
      );
    } else {
      return "";
    }
  }

  changeStatusGetTokenError(getTokenError, getTokenErrorMessage = "") {
    this.setState({
      getTokenError,
      getTokenErrorMessage
    });
  }

  render() {
    if (window.location.search.indexOf("?logout") !== -1) {
      return <Logout />;
    }

    let flagShowOR =
      !this.props.userCredentialsEnabled ||
      this.props.authProviders.length === 0;

    return (
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <b>{this.props.logoTitle}</b>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">{this.props.boxMessage}</p>
            {this.renderUserCredentialsEnabled()}
            {this.renderCalloutError()}
            <div className="social-auth-links text-center">
              {!flagShowOR ? <p>- OR -</p> : ""}
              {this.renderAuthProviders()}
            </div>
            {this.props.userCredentialsEnabled ? (
              <a href="#">I forgot my password</a>
            ) : (
              ""
            )}
            <br />
            <a href="#" className="text-center">
              Register a new membership
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Login.defaultProps = {
  logoTitle: window.APP_CONFIG.REACT_APP_TITLE,
  boxMessage: window.APP_CONFIG.REACT_APP_SUBTITLE,
  userCredentialsEnabled: window.APP_CONFIG.REACT_APP_USER_CREDENTIALS_ENABLED,
  authProviders: [
    /*"facebook", "google", "gitlab"*/
  ],
  authUrl: window.APP_CONFIG.REACT_APP_OAUTH_AUTH_URL,
  tokenUrl: window.APP_CONFIG.REACT_APP_OAUTH_TOKEN_URL,
  redirectUrl: window.APP_CONFIG.REACT_APP_OAUTH_REDIRECT_URL,
  client_id: window.APP_CONFIG.REACT_APP_OAUTH_CLIENT_ID,
  scope: window.APP_CONFIG.REACT_APP_OAUTH_SCOPE,
  audience: window.APP_CONFIG.REACT_APP_OAUTH_AUDIENCE
};

export default Login;
