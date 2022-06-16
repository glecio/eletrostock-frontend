import React  from 'react';
import { DeviceService } from "../../../services/DeviceServices";
import {useEffect, useState, setState} from 'react';
import { Link } from 'react-router-dom';


let DeviceList = () => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            let response = await DeviceService.getAllDevices();
            const devicesList = await response.data;
            setDevices(devicesList)
            
        } catch (error) {
            console.log("error", error);
        }
    };
    
    fetchData();
}, []);

let clickDelete = async(deviceId) => {
    try {
        let response = await DeviceService.deleteDevice(deviceId);
        if (response ) {
            //setState({...state, loading: true});
            let response = await DeviceService.getAllDevices();
            setState(
                {
                  
                }
            )
        }
        
    } catch (error) {
        
    }
}

return (
        <>
            <div className="container">
                <h2>Devices List</h2>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col col-3">Description</th>
                            <th scope="col">Voltage</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {devices?.map((device) => 
                            <tr>
                                <td>{device.name}</td>
                                <td className='col-3'>{device.description}</td>
                                <td>{device.voltage}</td>
                                <td>
                                    {device.brand_id}
                                </td>
                                <td>
                                    <button type="button" className="btn btn-sm btn-outline-primary mx-2">View</button>
                                    <button type="button" className="btn btn-sm btn-outline-primary mx-2">Edit</button>
                                    <button type="button mx-2" 
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => clickDelete(device.id)}
                                    >
                                                Delete
                                    </button>
                                </td>

                            </tr>
                        )}
                    </tbody>
                </table> 
            </div>   

        </>
    )
};

export default DeviceList;