import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2>This is Home</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;