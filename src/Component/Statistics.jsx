import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
   
    const assigmentMarksArray = [
        {
          "id": "85a1",
          "name": "Assignment-1",
          "marks": 57
        },
        {
          "id": "85b2",
          "name": "Assignment-2",
          "marks": 59
        },
        {
          "id": "85c3",
          "name": "Assignment-3",
          "marks": 60
        },
        {
          "id": "85d",
          "name": "Assignment-4",
          "marks": 23
        },
        {
          "id": "85e5",
          "name": "Assignment-5",
          "marks": 48
        },
        {
          "id": "85f6",
          "name": "Assignment-6",
          "marks": 0
        },
        {
          "id": "85g7",
          "name": "Assignment-7",
          "marks": 60
        }
      ]     
    return (

      <> 
      <h1 className='text-center mt-20 pb-20 text-4xl font-extrabold'>Assigment Rechart</h1>

     
        <div className='mt-32 ml-32 '>
            <AreaChart
              width={1000}
               height={400}
               data={assigmentMarksArray}
            >
                <Area dataKey="marks"></Area>
                <XAxis dataKey="name"></XAxis>
                <YAxis />
                <Tooltip />
                <CartesianGrid />
                <ResponsiveContainer />
                
            </AreaChart>
        </div>
        </>
    );
};

export default Statistics;