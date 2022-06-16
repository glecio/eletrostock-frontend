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
            <section className="view-device">
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
                                <td className='col-5'>{device.description}</td>
                                <td>{device.voltage}</td>
                                <td>{device.brand}</td>
                                <td>
                                    <Link to={'/devices/edit'} className='btn btn-sm btn-outline-primary my-2'> Edit</Link>
                                    <Link to={`/devices/view/${device.id}`} className='btn btn-sm btn-outline-danger my-2'> Delete</Link>
                                </td>

                            </tr>
                    </tbody>
                </table>   
                </div> 
            </section>
        </>
    )
};

export default DeviceView;