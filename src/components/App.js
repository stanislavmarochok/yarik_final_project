import logo from '../images/logo.svg';
import '../css/App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Nav';
import Home from './Home';
import AddAd from './AddAd';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Routes>
          <Route exact path="/" component={Home}></Route>
          
          <Route path="/addAd" component={AddAd}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
