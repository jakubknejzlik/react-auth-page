import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './login';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<ul>*/}
          {/*<li><Link to='/'>Home</Link></li>*/}
          {/*<li><Link to='/login'>Login</Link></li>*/}
        {/*</ul>*/}
        <Switch>
          <Route path='/login' component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
