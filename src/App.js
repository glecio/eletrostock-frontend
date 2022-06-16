import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

import AddDevice from './components/devices/AddDevice/AddDevice';
import DeviceList from './components/devices/DeviceList/DeviceList';
import EditDevice from './components/devices/EditDevice/EditDevice';
import ViewDevice from './components/devices/ViewDevice/ViewDevice';

import AddBrand from './components/brands/AddBrand/AddBrand';
import BrandList from './components/brands/BrandList/BrandList';
import EditBrand from './components/brands/EditBrand/EditBrand';
import ViewBrand from './components/brands/ViewBrand/ViewBrand';

let App = () =>  {
  return (
    <>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Navigate to={'/devices'} /> } />
          <Route path={'/brands'} element={<BrandList/>} />
          <Route path={'/brands/add'} element={<AddBrand/>} />
          <Route path={'/brands/edit'} element={<EditBrand/>} />
          <Route path={'/brands/view/:id'} element={<ViewBrand/>} />
          <Route path={'/devices'} element={<DeviceList/>} />
          <Route path={'/devices/add'} element={<AddDevice/>} />
          <Route path={'/devices/edit/:id'} element={<EditDevice/>} />
          <Route path={'/devices/view/:id'} element={<ViewDevice/>} />
        </Routes>
      </BrowserRouter>
      
    </> 
  );
}



export default App;
