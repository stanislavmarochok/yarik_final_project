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
          <Route path="/" element={<Home />}></Route>
          <Route path="add-ad" element={<AddAd />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
