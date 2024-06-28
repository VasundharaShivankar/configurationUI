import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./views/Home/Home"
import Birthday from './views/Birthday/Birthday';
import Wedding from './views/Wedding/Wedding';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter([
  {
    path: "/",
    element: <h1><Home/></h1>
  },
  {
    path:"/birthday",
    element:<h1><Birthday/></h1>
  },
  {
    path:"/wedding",
    element:<h1><Wedding/></h1>
  },

])
root.render(<RouterProvider router={router}/>);

