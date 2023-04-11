import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner';
import JobList from '../JobList';
import FeaturedJobs from '../FeaturedJobs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobList></JobList>
            <FeaturedJobs></FeaturedJobs>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;