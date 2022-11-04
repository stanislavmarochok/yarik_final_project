import "./header.css";

import React from 'react'; 
import ReactDOM from 'react-dom';

function Header(){
    return(
        
        <header>
            <nav>
                <p><img src=""></img> Bulletin board</p>
                <ul>
                    <li><a href="../addAdPage/addAd.js">Add ad</a></li>
                    <li>Contact</li>
                    <li>AboutUs</li>
                    <li>Sign up</li>
                    <li>Sign in</li>
                </ul>
            </nav>
        </header>
        
    );
}

export default Header;