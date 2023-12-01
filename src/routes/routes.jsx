import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import BioData from "../Pages/BioData/BioData";
import EditBioData from "../Pages/EditBioData/EditBioData";
import MyContactReq from "../Pages/MyContactReq/MyContactReq";
import FavouriteBioData from "../Pages/FavouriteBioData/FavouriteBioData";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [

        //Normal User
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
        },
        {
            path : '/register',
            element : <SignUp></SignUp>
        }
      ]
    },

    {
      path : 'dashboard',
      element : <Dashboard></Dashboard>,
      children : [
        {
          path : 'viewBioData',
          element : <BioData></BioData>
        },
        {
          path : 'editBioData',
          element : <EditBioData></EditBioData> 
        },
        {
          path : 'contactRequest',
          element : <MyContactReq></MyContactReq>
        },
        {
          path : 'favourites',
          element : <FavouriteBioData></FavouriteBioData>
        }
      ]
    }








  ]);