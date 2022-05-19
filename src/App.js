import NavBars from "./components/Nav/Nav"
import MainPage from "./components/Home/MainPage"
import BuyCoin from "./components/BuyCoin/BuyCoin";
import About from "./components/About/About";
import React from 'react';
import './App.css';

const App = ()=>{
  return <>
    <NavBars/>
    <div className="scroller">
      <MainPage/>
      <BuyCoin/>
      <About/>
    </div>
  </>
}

export default App