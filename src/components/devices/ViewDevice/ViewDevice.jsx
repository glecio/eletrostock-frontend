import React  from 'react';
import { DeviceService } from "../../../services/DeviceServices";
import {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import { Link } from 'react-router-dom';

let DeviceView = () => {
    const [device, setDevice] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await DeviceService.viewDevice(id);
                const deviceList = await response.data;
                setDevice(deviceList)
            
            } catch (error) {
                console.log("error", error);
            }
        };
    fetchData();
}, []);
console.log({device})
return (
        <>
            <div className="container">
            <h2>Device Details</h2>
            <table className="table table-striped table-hover table-responsive">
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
                        <tr>
                            <td>{device.name}</td>
                            <td>{device.description}</td>
                            <td>{device.voltage}</td>
                            <td>{device.brand}</td>
                            <td>
                                <Link to={'device/edit'}> Edit</Link>
                                <Link to={`/device/view/${device.id}`} className='btn btn-primary my-2'> Delete</Link>
                            </td>

                        </tr>
                </tbody>
            </table>   
            </div> 

        </>
    )
};

export default DeviceView;