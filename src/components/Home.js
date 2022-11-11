import React from "react";
import Filters from "./Filters";
import '../css/home.css';
import Item from "./Item";
import ItemsPanel from "./ItemsPanel";


function Home() {
  return (
    <div className="home-container">
      <Filters />
      <ItemsPanel />
    </div>
  );
}

export default Home;
