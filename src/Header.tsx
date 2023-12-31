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

      <Typography variant="h3" color="aqua">
        Simplec
        <Typography variant="h4">
          (<mark>Simpl</mark>e <mark>Ec</mark>ho)
        </Typography>
      </Typography>
    </header>
  );
}

export default Header;
