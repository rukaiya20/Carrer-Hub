import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart/Cart';

const ApplyJob = () => {
    const [cart,setCart]=useState([]);
    const { newArr } = useLoaderData();
    return (
        <div> 
            <h1 className='text-center mt-20 pb-20 text-4xl font-extrabold'>
                Applied Jobs
            </h1>
            <ul>
            {
             newArr.map(data=> 
             <Cart
                 key={data.id} data={data}
             ></Cart>)    
           }
            </ul>
        </div>
    );
};

export default ApplyJob;