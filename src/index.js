import React from 'react';
import ReactDOM from 'react-dom/client';
// Importing Mapbox GL CSS for styling the map component
import 'mapbox-gl/dist/mapbox-gl.css';
// Importing the main CSS file
import './index.css';
// Importing the main App component
import App from './App';
// Importing the reportWebVitals function for measuring web vitals
import reportWebVitals from './reportWebVitals';

// Creating a root using the DOM element with the 'root' id
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component inside the root using React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Calling the reportWebVitals function to measure web vitals
reportWebVitals();
