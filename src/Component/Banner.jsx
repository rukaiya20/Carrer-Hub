import React from 'react';
import BannerO from '../assets/All Images/BannerO.png'

const Banner = () => {
    return (
        <div className='grid md:grid-cols-2'>
            <div className='text-7xl font-semibold m-auto sm:mt-48 '>
                <p className='ms-20 mb-4'>
                  One Step
                </p >
                <p className='ms-20 mb-4'>
                  Closer To Your
                </p>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-800 ms-20 mb-4'>
                  Dream Job
                </p>
                <p className='ms-20 text-base text-slate-500 mt-6'>
                  Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button className='text-2xl font-extrabold text-white bg-gradient-to-r from-indigo-400 to-purple-400 text-purple-300 ms-20 px-5 py-4 rounded-lg mt-6 lg:mb-40'>Get Started</button>
            </div>
            <div>
                <h2 className='lg:mt-5 sm:mt-10'>
                    <img src={BannerO} alt="" />
                </h2>
            </div>

        </div>
    );
};

export default Banner;