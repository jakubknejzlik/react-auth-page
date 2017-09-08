import React, { Component } from 'react';
import { Checkbox } from "react-icheck";
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
}

class Login extends  Component{
  constructor(props){
    super(props);
  }
  
  renderUserCredentialsEnabled(){
    if(this.props.userCredentialsEnabled){
      return (
        <form action="#" method="post">
          <div className="form-group has-feedback">
            <input type="email" className="form-control" placeholder="Email"></input>
            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div className="form-group has-feedback">
            <input type="password" className="form-control" placeholder="Password"></input>
            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
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
              <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
            </div>
          </div>
        </form>
      );
    } else {
      return (<div></div>);
    }
  }
  
  renderAuthProviders(){
    let authProviders = [];
    if(this.props.authProviders.length > 0){
      authProviders = this.props.authProviders.map(provider => {
        if(providers[provider]){
          return (
            <a href="#" className={`btn btn-block btn-social ${providers[provider].classNameButton} btn-flat`}>
              <i className={`fa ${providers[provider].classNameFA}`}></i>
              {providers[provider].title}
            </a>
          );
        } else {
          return;
        }
      })
    }
    return authProviders;
  }
  
  render(){
    let flagShowOR = !this.props.userCredentialsEnabled || this.props.authProviders.length === 0;
    
    return(
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <b>{this.props.logoTitle}</b>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">{this.props.boxMessage}</p>
            {this.renderUserCredentialsEnabled()}
            <div className="social-auth-links text-center">
              {
                !flagShowOR ? <p>- OR -</p> : ''
              }
              {this.renderAuthProviders()}
            </div>
            {
              this.props.userCredentialsEnabled ? <a href="#">I forgot my password</a> : ''
            }
            <br/>
            <a href="#" className="text-center">Register a new membership</a>
          </div>
        </div>
      </div>
    );
  }
}

Login.defaultProps = {
  logoTitle: "Login Page",
  boxMessage: "Sign in to start your session",
  userCredentialsEnabled: true,
  authProviders: ["facebook","google"]
}

export default  Login;