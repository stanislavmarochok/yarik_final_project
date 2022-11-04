import '../css/App.css';
import Header from "../components/header/header.js";
import Sukasuka from "../components/homePage/main/mainContainer.js";
import Dich from "../components/homePage/filters/fillters.js";
import Home from "../components/homePage/home.js";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AddAd from '../components/addAdPage/addAd.js';


function App() {
  return (
    <div className="App">
        <Header/>

        <Router>
          <Routes>
            <Route exact path="/" component={Home}>
            </Route>
            
            <Route path="/addAd" component={AddAd}>
            </Route>
            
          </Routes>
        </Router>
    </div>
  );
}

export default App;
