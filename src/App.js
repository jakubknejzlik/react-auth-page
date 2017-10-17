import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./login";
import Logout from "./logout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
