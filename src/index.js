import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import Navbar from "./Styles/Navbar";
import Home from "./Components/Home";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
