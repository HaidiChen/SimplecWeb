import React from 'react';
import './App.css';

import Header from './Header';
import TextZone from './TextZone';


function App() {
  window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
  });

  return (
    <div className="App">
      <Header />

      <body>
        <TextZone />
      </body>
    </div>
  );
}

export default App;
