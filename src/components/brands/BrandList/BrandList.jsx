import React  from 'react';
import { DeviceService } from "../../../services/DeviceServices";
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



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


const handleDelete = async(e) => {
    //e.preventDefault();
        const element = document.querySelector('#message2');
        const headers = { 
            "Content-Type": "multipart/form-data"
        };
        const response = await axios.delete('http://localhost:8080/api/brands/${e}')
        .then(() => element.innerHTML = 'Delete successful');
      
}

return (
        <>
            <div className="container">
                <h2 className='my-3'>Brands List</h2>
                <Link to={`/brands/add`} className='btn btn-sm btn-outline-primary mx-1'> Add Brand</Link>

                <table className="table table-striped table-hover">
                <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col" className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brands?.map((brand) => 
                            <tr>
                                <td className='col-6' >{brand.name}</td>
                                <td className='col-6 text-center'>
                                    <Link to={`/brands/view/${brand.id}`} className='btn btn-sm btn-outline-primary mx-1'> View</Link>
                                    <Link to={`/brands/edit/${brand.id}`} className='btn btn-sm btn-outline-success mx-1'> Edit</Link>
                                    <button onClick={()=> handleDelete(brand.id)} className='btn btn-sm btn-outline-danger mx-1'> Delete</button>
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