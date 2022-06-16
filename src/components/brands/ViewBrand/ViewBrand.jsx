import React  from 'react';
import { DeviceService } from "../../../services/DeviceServices";
import {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import { Link } from 'react-router-dom';

let BrandView = () => {
    const [brand, setBrand] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await DeviceService.viewBrand(id);
                const brandList = await response.data;
                setBrand(brandList)
            
            } catch (error) {
                console.log("error", error);
            }
        };
    fetchData();
}, []);

return (
        <>
            <div className="container">
            <h2 className='my-3'>Brand Detail</h2>
            <Link to={`/brands/add`} className='btn btn-sm btn-outline-primary mx-1'> Add Brand</Link>
            <table className="table table-striped table-hover table-responsive">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>{brand.name}</td>
                           
                            <td>
                                <button type="button" className="btn btn-outline-primary mx-2">Edit</button>
                                <button type="button" className="btn btn-outline-danger">Delete</button>
                            </td>

                        </tr>
                </tbody>
            </table>   
            </div> 

        </>
    )
};

export default BrandView;