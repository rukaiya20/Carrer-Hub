import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Header/Home'
import Navbar from './Component/Header/Navbar';
import Statistics from './Component/Statistics';
import AppliedJobs from './Component/AppliedJobs';
import Blog from './Component/Blog';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element: <Navbar></Navbar>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>
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
