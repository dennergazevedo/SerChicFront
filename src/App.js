import React from "react";
import { ToastContainer } from 'react-toastify';
import { Router } from "react-router-dom";

import Routes from './routes';
import history from './services/history';

// CSS BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
        <Router history={history}>
          <Routes />
          <ToastContainer autoClose={3000}/>
        </Router>
  );
}

export default App;