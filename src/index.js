import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //the following is JSX code which is a way to write HTML inside JS
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
