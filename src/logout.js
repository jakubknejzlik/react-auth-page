import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    localStorage.removeItem("access_token");
    localStorage.removeItem("token_type");
  }

  render() {
    return <Redirect to="?" />;
  }
}

export default Logout;
