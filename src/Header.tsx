import React from 'react';
import logo from './logo.svg';
import './App.css';

import Typography from '@mui/material/Typography';


function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Typography variant="h3">Simple Echo</Typography>
    </header>
  );
}

export default Header;
