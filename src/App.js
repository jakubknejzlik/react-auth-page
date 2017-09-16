import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./example/login";
import Content from "./example/content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/content" component={Content}/>
          <Route path="/" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
