import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Statistics from './Component/Statistics';
import Blog from './Component/Blog';
import Home from './Component/Header/Home';
import Banner from './Component/Banner';
import JobList from './Component/JobList';
import JobDetails from './Component/JobDetails';
import ApplyJob from './Component/ApplyJob';
import { jobDataLoader } from './loader/getCradJobData';
import ErrorPage from './Component/ErrorPage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement : <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Banner></Banner>,
        loader: () => fetch('JobCatagory.json') 
      },
     
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader:() => fetch(`/jobDetails.json`)
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: "/appliedJobs",
        element: <ApplyJob></ApplyJob>,
        loader:jobDataLoader
       
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
