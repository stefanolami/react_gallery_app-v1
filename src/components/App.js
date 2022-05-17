import React from 'react';


import '../index.css';

import Nav from './Nav';
import Gallery from './Gallery';
import Search from './Search';


function App() {
  return (
    
    <div className="App">
      <Search />
      <Nav />
      <Gallery />
    </div>
   
  );
}

export default App;
