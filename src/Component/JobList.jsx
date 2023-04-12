import React from 'react';

const JobList = ({job}) => {
    
    const {id,name,jobAmount,img} = job;
    return (
        <div className='m-auto text-center '>
            <div className=''>
                <img className='jobCatagoryImgStyle m-auto' src={img} alt="" />
                <h1 className='font-bold text-2xl  text-neutral-800 mt-4'>{name}</h1>
                <p className='font-base text-xl text-neutral-500 mt-3'>{jobAmount}</p>
            </div>
        </div>
    );
};

export default JobList;