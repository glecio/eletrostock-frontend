import React  from 'react';
import { DeviceService } from "../../../services/DeviceServices";
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


let BrandList = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            let response = await DeviceService.getAllBrands();
            const brandsList = await response.data;
            setBrands(brandsList)
            
        } catch (error) {
            console.log("error", error);
        }
    };
    
    fetchData();
}, []);

return (
        <>
            <div className="container">
                <h2>Brands List</h2>
                <table class="table table-striped table-hover">
                <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brands?.map((brand) => 
                            <tr>
                                <td>{brand.name}</td>
                                <td>
                                    <Link to={`/brands/view/${brand.id}`} className='btn btn-primary mx-2'> View</Link>
                                    <Link to={`/brands/edit/${brand.id}`} className='btn btn-primary mx-2'> Edit</Link>
                                    <Link to={`/brands/view/${brand.id}`} className='btn btn-primary mx-2'> Delete</Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>   
            </div> 

        </>
    )
};

export default BrandList;