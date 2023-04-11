import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Bars3Icon , XMarkIcon} from '@heroicons/react/24/solid'

const Header = () => {
    const [IsOpen,setIsOpen] = useState(false);
    return (
        <> 
        <div onClick={()=> setIsOpen(!IsOpen)} className='md:hidden'>
            <span>{IsOpen === true ?  <XMarkIcon className="h-6 w-6 text-blue-500" /> : <Bars3Icon className="h-8 w-15 text-purple-500" />}
            </span>
        </div>
            <ul className={`md:flex md:justify-between lg:justify-between absolute duration-500 md:static ${IsOpen ? 'top-6' : '-top-48'} sm:ms-5` }>
                <li 
                className='text-3xl font-extrabold text-zinc-950 sm:mt-1 lg:ms-5 lg:mt-9'>
                    JobsHub
               </li>
                
                <li className='lg:mt-10 sm:mt-1' >
                    <Link className='font-semibold text-lg text-purple-500 ' 
                      to='/statistics'> 
                      Statistics 
                    </Link>
                </li>

                <li className='lg:mt-10 '>
                <Link className='font-semibold text-lg text-zinc-500' 
                   to='/appliedJobs'> 
                   Applied Jobs
                </Link>
                 </li>
                <li className='lg:mt-10 sm:mt-1 sm:mb-1'>
                   <Link className='font-semibold text-lg text-zinc-500' 
                   to='/blog'> Blog 
                   </Link>
                </li>
             
                <li><button className='text-2xl font-extrabold text-white bg-purple-500 text-purple-300  lg:mt-5 p-3 lg:px-5 lg:py-7 rounded-lg'>Start Applying</button></li>
            </ul>
        </>
    );
};

export default Header;