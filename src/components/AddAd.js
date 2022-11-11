import React from "react";
import { Formik, useFormik } from "formik";
import "../css/addAd.css";

const AddAd = () => {
    const formik = useFormik({
        initialValues: {
            name: ''
        },
        onSubmit: values => {
            saveItem(values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className="add-ad-form">
            <div>
                <p>Name of ad: </p>
                <input 
                    name="name" 
                    id="name" 
                    className="addAdNameInput" 
                    placeholder="name"
                    onChange={formik.handleChange}
                    />
            </div>
            <div>
                <p>Price: </p>
                <input 
                    name="price"
                    id="price" 
                    type="number"
                    className="addAdNameInput" 
                    placeholder="price"
                    onChange={formik.handleChange} />
            </div>
            <div>
                <p>City: </p>
                <select
                    name="location" 
                    id="location"
                    onChange={formik.handleChange}>
                    <option>Dnipro</option>
                    <option>Lviv</option>
                    <option>Odesa</option>
                    <option>Kiyv</option>
                </select>
            </div>
            <div>
                <p>Choose image: </p>
                <input id="photo" className="addAdNameInput" placeholder="potom dodelau"/>
            </div>
            <div>
                <p>Description: </p>
                <textarea id="description" className="addAdNameInput" placeholder="Description"></textarea>
            </div>

            <button>DONE</button>
        </form>
    );
}

function saveItem(item){
    console.log(JSON.stringify(item));
}

export default AddAd;