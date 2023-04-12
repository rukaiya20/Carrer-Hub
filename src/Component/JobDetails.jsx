import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../utilites/FakeDb';
import { FcBriefcase ,} from "react-icons/fc";
import { FiPhone ,} from "react-icons/fi";
import { BiEnvelope , BiHomeAlt} from "react-icons/bi";


const JobDetails = () => {
    
    const [details,setDetails] = useState([]);
    const daynamic = useParams();
    const dynamicId = daynamic.id;
    const data = useLoaderData();
    useEffect( ()=> {

        const detailsData = data.find((dt) => dt.id === dynamicId);
    setDetails(detailsData);
    
    },[])
    const {id,JobDescription,JobResponsibility,EducationalRequirements,Experiences,Salary,JobTitle,Phone,Email,Address,logo,title,company,jobType1,jobType2,locationImg,salaryImg,location,salary} = details;

    const handleApplyButton=(id)=>{
        addToDb(id.id);
       
      }

    return (
        <>
        <h1 className='text-center mt-20 pb-20 text-4xl font-extrabold'>Job Details</h1>
    
        <div className='md:grid md:grid-cols-2 md:ms-32 ms-3 mt-20'>
            <div className='text-xl text-neutral-500 font-semibold'>
                <p>
                    <span className='text-2xl text-neutral-800 font-bold'>Job Descriptuon</span> :{JobDescription}</p>
                <p><span className='text-2xl text-neutral-800 font-bold'>Job Responsibility</span> :{JobResponsibility}
                </p>
                <p>
                    <span className='text-2xl text-neutral-800 font-bold'>Educational Requirements</span>: 
                    <p>{EducationalRequirements}</p> 
                </p>
                <p>
                    <span className='text-2xl text-neutral-800 font-bold'>Experiences</span>:
                     <p>{Experiences}</p> 
                </p>
            </div>
            <div className='bg-indigo-100 md:me-48 md:ms-16 ms-2 me-2 sm:mt-5 md:mt-3 md:px-8'>
                <p className='text-2xl text-neutral-800 font-bold mt-2 border-b border-indigo-300 mb-6 py-3 px-2'>Job Details</p>
                <p className='flex  text-neutral-600 font-bold mt-2 '>
                    <img className='w-6 h-5 mt-1 me-1' src={salaryImg} alt="" />
                    <span className='text-lg text-neutral-800 font-bold me-2'>Salary :</span>
                     <span className=' text-lg'>{salary}</span> 
                     <span className='text-lg text-neutral-600 font-semibold ms-2' >(Per Month)</span>
                </p>
                <p className='flex mt-2 text-neutral-600 font-bold text-lg'> <FcBriefcase className='ms-1 mt-1'/> <span className='text-lg text-neutral-800 font-bold me-2 ms-2'>Job Title :</span>
                 {JobTitle}</p>
                <p className='text-xl text-neutral-800 font-bold pb-3 mt-4 border-b border-indigo-300 mb-5'>  Contact Information</p>
                <p className='flex text-neutral-600 font-bold '> 
                    <FiPhone className='mt-1.5 text-blue-700'/>
                   <span className='text-lg text-neutral-800 font-bold me-2 ms-2'>Phone :</span> 
                   <span className='mt-1'>{Phone}</span>
                </p>
                <p className='flex text-neutral-600 font-bold '>
                    <BiEnvelope className='mt-1.5 text-blue-700'/>
                     <span className='text-lg text-neutral-800 font-bold me-2 ms-2'>Email :</span> 
                     <span className='mt-1'>{Email}</span>
                </p>
                <p className='flex text-neutral-600 font-bold '> 
                    <BiHomeAlt className='mt- text-blue-700 w-8 h-8'/>
                    <span className='text-lg text-neutral-800 font-bold me-2 mt-0.5 ms-1'>Address:</span> 
                    <span className='mt-1.5' >{Address}</span>
                </p>
                
               
            </div>
            
        </div>
        <div className='md:text-right md:me-48 sm:ms-3 sm:mt-20'>
                <button onClick={()=>handleApplyButton(details)} className='bg-indigo-400 text-xl font-extrabold text-white bg-gradient-to-r from-indigo-400 to-purple-400 text-purple-300  rounded-xl py-4 px-28 md:ms-12  '>
                Apply Now
                </button>
                </div>

        </>

    );
};

export default JobDetails;