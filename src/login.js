import React, { Component } from 'react';
import { Checkbox } from "react-icheck";
import "./Login.css";

class Login extends  Component{
  render(){
    return(
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="#">
              <b>Admin</b>
              LTE
            </a>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>
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
            <div className="social-auth-links text-center"></div>
            <a href="#">I forgot my password</a>
            <br/>
            <a href="#" className="text-center">Register a new membership</a>
          </div>
        </div>
      </div>
    );
  }
}

export default  Login;