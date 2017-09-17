import React, { Component } from "react";
import { Redirect }  from "react-router";

class LogoutComponent extends Component{
  constructor(props, context){
    super(props, context);
    
    localStorage.removeItem("access_token");
    localStorage.removeItem("token_type");
  }
  
  render(){
    return (<Redirect to={this.props.redirectUrl}/>);
  }
}

LogoutComponent.contextTypes = {
  router: React.PropTypes.object
}

LogoutComponent.defaultProps = {
  redirectUrl: "/"
}

export default LogoutComponent;
