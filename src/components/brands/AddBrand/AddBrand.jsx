import React from "react";
import {useEffect, useState} from 'react';
import axios from 'axios';



let AddBrand = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            // make axios post request
            const response = await axios.post(
                'http://localhost:8080/api/brands',
                {
                  name: name,
                },
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                })

                if (response.status === 201) {
                    setName("");
                    setMessage('Success');
                  } else {
                    setMessage("Errors occurred");
                  }
          } catch(error) {
            console.log(error)
          }
    }


    return (
        <div className="container p-3">
            <h2 className="text-center">Add Brand</h2>
            <form className="rg-5">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="input-group">
                        <input type="text" 
                                className="form-control" 
                                id="inputName" 
                                placeholder="brand name"
                                onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-3">
                        <button onClick={handleSubmit} type='submit' className="btn btn-primary">Save</button>
                    </div>
                </div>
            </form>
            <div className="message my-3 text-center">{message ? <p>{message}</p> : null}</div>
        </div>
    )

    
    
};




export default AddBrand;

