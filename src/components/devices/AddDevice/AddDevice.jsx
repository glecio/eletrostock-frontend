import React from "react";
import {useEffect, useState} from 'react';
import axios from 'axios';

let AddDevice = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [voltage, setVoltage] = useState('');
    const [brand_id, setBrandId] = useState('');
    const [message, setMessage] = useState("");


    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            // make axios post request
            const response = await axios.post(
                'http://localhost:8080/api/devices',
                {
                    name: name,
                    description: description,
                    voltage: voltage,
                    brand_id: brand_id
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
        <>
            <div className="container">
            <h2 className="text-center py-3">Add Device</h2>
                <form className="create-form">
                    <div className="mb-3">
                        <label for="nameInput" className="form-label">Name</label>
                        <input type="text" className="form-control" id="nameInput" placeholder="Device name"/>
                    </div>
                    <div className="mb-3">
                        <label for="descriptionField" className="form-label">Description</label>
                        <textarea className="form-control" id="descriptionField" rows="3"></textarea>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label class="form-check-label" for="flexRadioDefault1">
                           110
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                        <label class="form-check-label" for="flexRadioDefault2">
                            220
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                        <label class="form-check-label" for="flexRadioDefault2">
                            auto
                        </label>
                    </div>
                    <div className="mb-3">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Brand</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>  
                    </div>
                    <div className="col-3">
                        <button onClick={handleSubmit} type='submit' className="btn btn-primary">Save</button>
                    </div>
                    
                </form>
            </div>
        </>
    )
};

export default AddDevice;