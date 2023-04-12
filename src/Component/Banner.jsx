import React, { useEffect, useState } from 'react';
import BannerO from '../assets/All Images/BannerO.png'
import { useLoaderData } from 'react-router-dom';
import JobList from './JobList';
import FeaturedJobs from './FeaturedJobs';



const Banner = () => {
  const jobList = useLoaderData();

  const [jobData,setJobData]=useState([]);
    const [showAll,setShowAll]=useState(false)
    useEffect(()=>{
      fetch('/jobDetails.json')
      .then(res=>res.json())
      .then(data=>setJobData(data))
      
    },[]);
    const handlerViewDetails=(job)=>{

    }
    const handleSeeALl=()=>{
      setShowAll(true)
    }
    
    return (
        <div >
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
        <h2 className='text-center text-4xl font-bold mt-5 text-neutral-900'>Job Category List</h2>
            <p className='text-center text-xl font-bold mb-20 text-neutral-500 mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
       <div className='md:flex'>
       {
          jobList.map(job => <JobList key={job.id} job={job}></JobList>)
        }
       </div>

<h1 className="font-bold text-center text-5xl mt-20">Featured Jobs</h1>
<p className="font-bold text-center text-xl mt-6 mb-10 text-neutral-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
<div className='md:grid md:grid-cols-2 gap-5 m-5'>
    {
      jobData.slice(0,showAll ? 6 : 4).map(data => <FeaturedJobs key={data.id} data={data}></FeaturedJobs>)
     }
</div>
{!showAll && <p className="text-center m-auto">
      <button className="bg-indigo-400 text-xl font-extrabold text-white bg-gradient-to-r from-indigo-400 to-purple-400 text-purple-300  rounded-xl px-5 py-4 mt-3 mb-10" onClick={handleSeeALl}>See All Job</button>
     </p>}
        </div>
    );
};

export default Banner;