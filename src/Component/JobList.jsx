import React from 'react';
import accounts from '../assets/Icons/accounts.png'
import business from '../assets/Icons/business.png'
import chip from '../assets/Icons/chip.png'
import socialMedia from '../assets/Icons/socialMedia.png'

const JobList = () => {
    return (
        <div>
            <h2 className='text-center text-4xl font-bold mt-5'>Job Category List</h2>
            <p className='text-center  text-base text-slate-500 mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='lg:flex mt-16 '>
                <p className='m-auto sm:mt-5'>
                    <img className='bg-indigo-100 p-4 rounded-lg sm:m-auto' src={accounts} alt="" />
                    <p className='text-lg font-extrabold mt-5 sm:text-center'>Account & Finance</p>
                    <p className='text-base text-slate-500 mt-2 sm:text-center'>300 Jobs Available</p>
                </p >
                <p className='m-auto sm:mt-5'>
                    <img className='bg-indigo-100 p-4 rounded-lg sm:m-auto' src={business} alt="" />
                    <p className='text-lg font-extrabold mt-5 sm:text-center'>Creative Design</p>
                    <p className='text-base text-slate-500 mt-2 sm:text-center'>100+ Jobs Available</p>
                </p>
                <p className='m-auto sm:mt-5'>
                    <img className='bg-indigo-100 p-4 rounded-lg sm:m-auto' src={chip} alt=""/>
                    <p className='text-lg font-extrabold mt-5 sm:text-center'>Marketing & Sales</p>
                    <p className='text-base text-slate-500 mt-2 sm:text-center'>150 Jobs Available</p>
                </p>
                <p className='m-auto sm:mt-5'>
                    <img className='bg-indigo-100 p-4 rounded-lg sm:m-auto' src={socialMedia} alt="" />
                    <p className='text-lg font-extrabold mt-5 sm:text-center'>Engineering Job</p>
                    <p className='text-base text-slate-500 mt-2 sm:text-center '>224 Jobs Available</p>
                </p>
            </div>
        </div>
    );
};

export default JobList;