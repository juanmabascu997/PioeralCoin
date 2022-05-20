import NavBars from "./components/Nav/Nav"
import MainPage from "./components/Home/MainPage"
import BuyCoin from "./components/BuyCoin/BuyCoin";
import About from "./components/About/About";
import React from 'react';
import './App.css';
import Wallet from "./components/Wallet/Wallet";
import {BrowserRouter, Routes, Route } from 'react-router-dom';

const App = ()=>{
  return  <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route exact path="/wallet" element={<Wallet/>} />
            </Routes>
          </BrowserRouter>}

export default App