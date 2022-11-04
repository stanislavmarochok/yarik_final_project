import NewDeals from "./main/mainContainer.js";
import Filters from "./filters/fillters.js";

import React from "react";


function Home() {
  return (
    <div>
        <div className="underHeader">
          <Filters/>
          <NewDeals/>
        </div>
    </div>
  );
}

export default Home;
