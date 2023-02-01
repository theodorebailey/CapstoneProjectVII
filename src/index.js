// Entry point into our App
// Files to change features, colours, Aesthetics
// Local Host 300 won't run until our App is running 
// -- npm start
// Delete below files
// logo.svg
// reportWebVitals.js
// setupTests.js

import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom/client';
// /client
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <App />
      </Router>
  </React.StrictMode>
);
