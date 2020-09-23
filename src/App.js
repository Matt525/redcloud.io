import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Banner from './Banner';
import Breakpoint from './Breakpoint';
import Shop from './Shop';
import SecondBanner from './SecondBanner'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Breakpoint/>
      <Shop />
      <SecondBanner />
    </div>
  );
}

export default App;
