import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import DrumContainer from './DrumContainer';
// import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
// import {Component} from 'react';




ReactDOM.render(
  <div className="DOM">
    <App />
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
