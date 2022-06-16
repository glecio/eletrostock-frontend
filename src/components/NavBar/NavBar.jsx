import React from "react";
import {Link} from 'react-router-dom';

let NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark ">
                <div className="container justify-content-center">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a href="/" className="nav-link" aria-current="page">Devices</a>
                        </li>
                        <li className="nav-item">
                            <a href="/brands" className="nav-link" aria-current="page">Brands</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default NavBar;