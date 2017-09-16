import React from 'react';
import LoginComponent from './../components/loginComponent';

class Login extends React.Component{
  render(){
    const params = {
      logoTitle: "Login Page",
      boxMessage: "Sign in to start your session",
      userCredentialsEnabled: true,
      authProviders: ["facebook", "google", "gitlab"],
      authUrl: "",
      tokenUrl: "https://novacloud.eu.auth0.com/oauth/token",
      redirectUrl: "/content",
      client_id: "mhjoWWbu6ByAfXKt73jMqNMjoFpA8vyQ",
      scope: "email"
    };
    
    return(<LoginComponent {...params}/>);
  }
}

export default Login;
