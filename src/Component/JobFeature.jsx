import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobFeature = () => {
    const jobsFeature = useLoaderData();
    return (
        <>
            <div>
            {/* {
                jobsFeature.map(job => )
             } */}
            </div> 
            <div>
                
            </div>
        </>
    );
};

export default JobFeature;