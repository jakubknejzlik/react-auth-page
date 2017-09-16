import React from 'react';
import "../Login.css";

class Content extends React.Component{
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
                <button className="btn btn-primary btn-block btn-flat" >
                  Sign out
                </button>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    );
  }
}

export default Content;
