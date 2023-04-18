import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Bars3Icon , XMarkIcon} from '@heroicons/react/24/solid'
import Banner from '../Banner';

const Navbar = () => {
    const [IsOpen,setIsOpen] = useState(false);
    return (
        <> 
      
        <div onClick={()=> setIsOpen(!IsOpen)} className='md:hidden'>
            <span>{IsOpen === true ?  <XMarkIcon className="h-6 w-10 bg-gradient-to-r from-indigo-400 to-fuchsia-400 to-fuchsia-500" /> : <Bars3Icon className="h-8 w-15 bg-gradient-to-r from-indigo-400 to-fuchsia-400" />}
            </span>
        </div>
             <ul className={`md:flex lg:justify-between absolute duration-500 md:static ${IsOpen ? 'top-6' : '-top-48'} sm:ms-5` }>
                <li 
                className='md:text-6xl sm:text-2xl font-extrabold text-neutral-800 sm:mt-1 lg:mt-5'>
                    JobHQ.com
               </li>
                
                <li className='lg:mt-10 sm:mt-1' >
                    <Link className='font-extrabold text-2xl ' 
                      to='/'> 
                      Home
                    </Link>
                </li>
                <li className='lg:mt-10 sm:mt-1' >
                    <Link className='font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 ' 
                      to='/statistics'> 
                      Statistics 
                    </Link>
                </li>
                <li className='lg:mt-10 '>
                <Link className='font-extrabold text-2xl text-zinc-500' 
                   to='/appliedJobs'> 
                   Applied Jobs
                </Link>
                 </li>
                <li className='lg:mt-10 sm:mt-1 sm:mb-1'>
                   <Link className='font-extrabold text-2xl text-zinc-500' 
                   to='/blog'> Blog 
                   </Link>
                </li>
             
                <li><button className='text-2xl font-extrabold text-white bg-gradient-to-r from-indigo-400 to-purple-400 text-purple-300  lg:mt-5 p-1 lg:px-4 lg:py-6 rounded-xl lg:me-3'>Start Applying</button></li>
            </ul> 
        </>
    );
};

export default Navbar;