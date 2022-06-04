import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
