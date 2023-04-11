import React from 'react';
import google from '../assets/Logo/google.png'
import netflix from '../assets/Logo/netflix.png'
import tesla from '../assets/Logo/tesla.png'
import Frame4 from '../assets/Icons/Frame4.png'
import Frame from '../assets/Icons/Frame.png'
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'

const FeaturedJobs = () => {
    return (
        <div>
            <h2 className='text-center text-4xl font-bold mt-32'>Featured Jobs</h2>
            <p className='text-center  text-base text-slate-500 mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='md:grid lg:grid-cols-2 mt-10 gap-5 w-full'>
                <div className='m-auto border rounded border-slate-200 px-20 py-14 mb-5'>
                    <img className='pt-5' src={google} alt="" />
                    <p className='text-lg font-extrabold text-gray-950'>Technical Database Engineer</p>
                    <p className='text-lg font-medium my-3 text-slate-500 '>Google LLC</p>
                    <div className='flex'>
                          <p className='text-base font-semibold text-slate-500 border py-2 px-8 border-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500'>
                            Onsite
                            </p>
                          <p className='text-base font-semibold text-slate-500 border py-2 px-8 ms-5 border-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500'>
                            Full Time
                         </p>
                    </div>
                    <div className='flex'>
                          <p className='flex text-lg my-3 font-medium text-slate-500 me-4'>
                          <img className='w-6 h-6 me-2' src={Frame4} alt="" />
                            Dhaka, Bangladesh
                        </p>
                        <p className='flex text-lg my-3 font-medium text-slate-500 '>
                          <img className='w-6 h-6 me-2' src={Frame} alt="" /> Salary : 100K - 150K
                        </p>
                          
                    </div>
                    <button className='text-2xl font-extrabold text-white bg-gradient-to-r from-indigo-400 to-purple-400 text-purple-300  px-3 py-3 rounded-md'>
                        View Details
                    </button>
                </div>

                <div className='m-auto border rounded border-slate-200 px-20 py-14 mb-5'>
                    <img className='pt-5' src={netflix} alt="" />
                    <p className='text-lg font-extrabold text-gray-950'>
                       Senior Product Designer
                    </p>
                    <p className='text-lg font-medium my-3 text-slate-500 '>
                        Netflix
                    </p>
                    <div className='flex'>
                          <p className='text-base font-semibold text-slate-500 border py-2 px-8 border-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500'>
                            Remote
                            </p>
                          <p className='text-base font-semibold text-slate-500 border py-2 px-8 ms-5 border-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500'>
                            Full Time
                         </p>
                    </div>
                    <div className='flex'>
                          <p className='flex text-lg my-3 font-medium text-slate-500 me-4'>
                          <img className='w-6 h-6 me-2' src={Frame4} alt="" />
                            Dhaka, Bangladesh
                        </p>
                        <p className='flex text-lg my-3 font-medium text-slate-500 '>
                          <img className='w-6 h-6 me-2' src={Frame} alt="" /> Salary : 100K - 150K
                        </p>
                          
                    </div>
                    <button className='text-2xl font-extrabold text-white bg-gradient-to-r from-indigo-400 to-purple-400 text-purple-300  px-3 py-3 rounded-md'>
                        View Details
                    </button>
                </div>

                <div className='m-auto border rounded border-slate-200 px-20 py-14 mb-5'>
                    <img className='pt-5' src={tesla} alt="" />
                    <p className='text-lg font-extrabold text-gray-950'>
                      Software Engineer
                    </p>
                    <p className='text-lg font-medium my-3 text-slate-500 '>
                        Tesla
                    </p>
                    <div className='flex'>
                          <p className='text-base font-semibold text-slate-500 border py-2 px-8 border-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500'>
                            Remote
                            </p>
                          <p className='text-base font-semibold text-slate-500 border py-2 px-8 ms-5 border-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500'>
                            Full Time
                         </p>
                    </div>
                    <div className='flex'>
                          <p className='flex text-lg my-3 font-medium text-slate-500 me-4'>
                          <img className='w-6 h-6 me-2' src={Frame4} alt="" />
                            Dhaka, Bangladesh
                        </p>
                        <p className='flex text-lg my-3 font-medium text-slate-500 '>
                          <img className='w-6 h-6 me-2' src={Frame} alt="" /> Salary : 100K - 150K
                        </p>
                          
                    </div>
                    <button className='text-2xl font-extrabold text-white bg-gradient-to-r from-indigo-400 to-purple-400 text-purple-300  px-3 py-3 rounded-md'>
                        View Details
                    </button>
                </div>
                <div className='m-auto border rounded border-slate-200 px-20 py-14 mb-5'>
                    <img className='pt-5' src={google} alt="" />
                    <p className='text-lg font-extrabold text-gray-950'>Technical Database Engineer</p>
                    <p className='text-lg font-medium my-3 text-slate-500 '>Google LLC</p>
                    <div className='flex'>
                          <p className='text-base font-semibold text-slate-500 border py-2 px-8 border-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500'>
                            Onsite
                            </p>
                          <p className='text-base font-semibold text-slate-500 border py-2 px-8 ms-5 border-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500'>
                            Full Time
                         </p>
                    </div>
                    <div className='flex'>
                          <p className='flex text-lg my-3 font-medium text-slate-500 me-4'>
                          <img className='w-6 h-6 me-2' src={Frame4} alt="" />
                            Dhaka, Bangladesh
                        </p>
                        <p className='flex text-lg my-3 font-medium text-slate-500 '>
                          <img className='w-6 h-6 me-2' src={Frame} alt="" /> Salary : 100K - 150K
                        </p>
                          
                    </div>
                    <button className='text-2xl font-extrabold text-white bg-gradient-to-r from-indigo-400 to-purple-400 text-purple-300  px-3 py-3 rounded-md'>
                        View Details
                    </button>
                </div>
                <div className='m-auto border rounded border-slate-200 px-20 py-14 mb-5'>
                    <img className='pt-5' src={netflix} alt="" />
                    <p className='text-lg font-extrabold text-gray-950'>
                      Software Engineer
                    </p>
                    <p className='text-lg font-medium my-3 text-slate-500 '>
                        Netflix
                    </p>
                    <div className='flex'>
                          <p className='text-base font-semibold text-slate-500 border py-2 px-8 border-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500'>
                            Remote
                            </p>
                          <p className='text-base font-semibold text-slate-500 border py-2 px-8 ms-5 border-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500'>
                            Full Time
                         </p>
                    </div>
                    <div className='flex'>
                          <p className='flex text-lg my-3 font-medium text-slate-500 me-4'>
                          <img className='w-6 h-6 me-2' src={Frame4} alt="" />
                            Dhaka, Bangladesh
                        </p>
                        <p className='flex text-lg my-3 font-medium text-slate-500 '>
                          <img className='w-6 h-6 me-2' src={Frame} alt="" /> Salary : 100K - 150K
                        </p>
                          
                    </div>
                    <button className='text-2xl font-extrabold text-white bg-gradient-to-r from-indigo-400 to-purple-400 text-purple-300  px-3 py-3 rounded-md'>
                        View Details
                    </button>
                </div>
                <div className='m-auto border rounded border-slate-200 px-20 py-14 mb-5'>
                    <img className='pt-5' src={tesla} alt="" />
                    <p className='text-lg font-extrabold text-gray-950'>
                      Senior Product Designer
                    </p>
                    <p className='text-lg font-medium my-3 text-slate-500 '>
                        Tesla
                    </p>
                    <div className='flex'>
                          <p className='text-base font-semibold text-slate-500 border py-2 px-8 border-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500'>
                            Onsite
                            </p>
                          <p className='text-base font-semibold text-slate-500 border py-2 px-8 ms-5 border-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500'>
                            Full Time
                         </p>
                    </div>
                    <div className='flex'>
                          <p className='flex text-lg my-3 font-medium text-slate-500 me-4'>
                          <img className='w-6 h-6 me-2' src={Frame4} alt="" />
                            Dhaka, Bangladesh
                        </p>
                        <p className='flex text-lg my-3 font-medium text-slate-500 '>
                          <img className='w-6 h-6 me-2' src={Frame} alt="" /> Salary : 100K - 150K
                        </p>
                          
                    </div>
                    <button className='text-2xl font-extrabold text-white bg-gradient-to-r from-indigo-400 to-purple-400 text-purple-300  px-3 py-3 rounded-md'>
                        View Details
                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default FeaturedJobs;