import React from 'react';
import './App.css';

import Body from './Body';
import Header from './Header';


function App() {
  window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
  });

  return (
    <>
      <div className="App">
        <Header />
      </div>

      <Body />
    </>
  );
}

export default App;
