import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'ionicons/dist/css/ionicons.css';
import 'admin-lte/dist/css/AdminLTE.css';
import 'icheck/skins/square/blue.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
