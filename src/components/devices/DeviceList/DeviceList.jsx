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
     console.log(deviceId)
}

return (
        <>
            <div className="container">
                <h2 className='my-3'>Devices List</h2>
                <Link to={`/devices/add`} className='btn btn-sm btn-outline-primary mx-1'> Add Device</Link>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
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
                                <Link to={`/devices/view/${device.id}`} className='btn btn-sm btn-outline-primary mx-1'> View</Link>
                                <Link to={`/devices/edit/${device.id}`} className='btn btn-sm btn-outline-success mx-1'> Edit</Link>
                                <Link to={``} 
                                        className='btn btn-sm btn-outline-danger mx-1' 
                                        onClick={() => clickDelete(device.id)}
                                > Delete</Link>
                                
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