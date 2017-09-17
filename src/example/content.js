import React from 'react';
import { Link } from 'react-router-dom';
import "../Login.css";

class Content extends React.Component{
  constructor(props, context){
    super(props, context);
  }
  
  render(){
    const access_token = localStorage.getItem('access_token');
    return(
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <b>
              Content page
            </b>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">
              This is page for authorized users only, your token is: {access_token}
            </p>
            <div className="row">
              <div className="col-xs-8">
              
              </div>
              <div className="col-xs-4">
                <Link className="btn btn-primary btn-block btn-flat" to="/logout">Logout</Link>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    );
  }
}

Content.contextTypes = {
  router: React.PropTypes.object
}

export default Content;
