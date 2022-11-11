import React from "react";
import "../css/addAd.css";
import { Formik } from "formik";

class AddAd extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Formik>
                <form method="post" className="add-ad-form">
                    <line><p>Name of ad: </p><input className="addAdNameInput" placeholder="name"/></line>
                    <line><p>Price: </p><input className="addAdNameInput" placeholder="price"/></line>
                    <line>
                        <p>City: </p>
                        <select>
                            <option>Dnipro</option>
                            <option>Lviv</option>
                            <option>Odesa</option>
                            <option>Kiyv</option>
                        </select>
                    </line>
                    <line><p>Choose image: </p><input className="addAdNameInput" placeholder="potom dodelau"/></line>
                    <line><p>Description: </p><textarea className="addAdNameInput" placeholder="Description"></textarea></line>
        
                    <button>DONE</button>
                </form>
            </Formik>
        );
    }
}

export default AddAd;