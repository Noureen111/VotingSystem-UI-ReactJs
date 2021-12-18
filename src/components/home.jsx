import React from "react";
import Navbar from "./navbar";
import Introduction from "./introduction";
import "../App.css";

function Home() {
    return(
       <div className="App"> 
            <Navbar h="Terms & Conditions" />
        <div className="appBackground">
          <Introduction />
        </div>
       </div>
    );
}

export default Home;