import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css'
=======
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client';

>>>>>>> ee558c266e78fc4b29e4868761bb258f2257247a
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
