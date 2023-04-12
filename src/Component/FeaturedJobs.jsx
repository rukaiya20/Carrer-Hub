import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';


const FeaturedJobs = ({data}) => {
  const navigate = useNavigate();
  const {id,JobDescription,JobResponsibility,EducationalRequirements,Experiences,Salary,JobTitle,Phone,Email,Address,logo,title,company,jobType1,jobType2,locationImg,salaryImg,location,salary} =data;

    return (
      <>

        <div>
            <div className='border rounded-xl p-10' >
                    <img className='w-20 h-10 mb-2 ' src={logo} alt="" />
                    <p className='text-2xl font-bold text-neutral-800'>
                      {title}
                      </p>
                    <p className='text-xl mt-2  font-semibold text-neutral-600'>{company}
                    </p>
                    <div className='flex'>
                          <p className='border p-2 me-2 border-purple-600 mt-3'>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 text-base font-semibold'>{jobType1}</span>
                            </p>
                          <p className='border p-2 border-purple-600 mt-3'>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 text-base font-semibold'>{jobType2}</span>
                         </p>
                    </div>
                    <div className='flex'>
                          <p className='me-3 text-base font-semibold text-neutral-800 mt-3'>
                          <img className='w-6 h-6 inline-block ' src={locationImg} alt="" />
                              { location}
                        </p>
                        <p className=' text-base font-semibold text-neutral-800 flex mt-3'>
                          <img className='w-6 h-6 ' src={salaryImg} alt="" />Salary: {salary}
                        </p>
                          
                    </div>
                    <button onClick={()=>navigate(`/job/${id}`)} className='text-xl font-extrabold text-white bg-gradient-to-r from-indigo-400 to-purple-400 text-purple-300  rounded-lg px-3 py-2 mt-3'>
                        View Details
                    </button>
                </div>
              
            </div>
       
        </>
    );
};

export default FeaturedJobs;