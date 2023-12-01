import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import BioData from "../Pages/BioData/BioData";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : 'bioData',
            element : <BioData></BioData>
        },
        {
            path : 'aboutUs',
            element : <AboutUs></AboutUs>
        },
        {
            path : 'contactUs',
            element : <ContactUs></ContactUs>
        },
        {
            path : '/login',
            element : <Login></Login>
        }
      ]
    },
  ]);