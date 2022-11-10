import React from "react";
import Filters from "./Filters";
import '../css/home.css';


function Home() {
  return (
    <div className="home-container">
      <Filters />
      <div className="home-container-main">
        home page
        {renderItems()}
      </div>
    </div>
  );
}

function renderItems(){
  let items = getItems();
}

function getItems(){
  return 
}

export default Home;
