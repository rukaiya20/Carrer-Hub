import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPinIcon,CurrencyDollarIcon} from '@heroicons/react/24/solid'

const Cart = ({data}) => {
    const navigate =useNavigate();
    const{id,JobDescription,JobResponsibility,EducationalRequirements,Experiences,Salary,JobTitle,Phone,Email,Address,logo,title,company,jobType1,jobType2,locationImg,salaryImg,location,salary} = data;
    return (
        <li className='flex justify-between items-center ml-32 mt-20 p-10  py-6  '>
        
        <div className='flex'>
        <img  className='w-52 h-32 bg-neutral-200 p-12 rounded mt-4' src={logo}alt="" />
        <div>
          <h1 className="ml-10 text-2xl text-neutral-800 font-bold">{JobTitle}</h1>
          <p className="ml-10 text-lg text-neutral-500 font-bold">{company}</p>
          <button className="ml-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 text-base font-semibold border p-2 border-purple-600 mt-2">
           {jobType1}
          </button>
          <button className=" ml-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 text-base font-semibold border p-2 border-purple-600 mt-2 ">{jobType2}</button> <br />
          <div className="flex mt-5 ml-8 text-lg text-neutral-500 font-bold">
            <MapPinIcon class="h-6 w-6 text-blue-500" /> <span>{Address}</span>
            <CurrencyDollarIcon class="h-6 w-6 ml-4 text-black" />
            <span>Salary :{salary}</span>
          </div>
          
        </div>
      </div>
      <div className='text-xl font-extrabold text-white bg-gradient-to-r from-indigo-400 to-purple-400 text-purple-300  rounded-lg px-3 py-3 mt-3'>
      <button onClick={()=>navigate(`/job/${id}`)} className=" ml-2  ">View Details</button>
      </div>
      </li>
    );
};

export default Cart;