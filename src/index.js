import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './Portfolio';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Portfolio />
    </HashRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
);

reportWebVitals();
