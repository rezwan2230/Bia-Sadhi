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
import AdminHome from "../Pages/AdminHome/AdminHome";
import ApprovePremium from "../Pages/ApprovePremium/ApprovePremium";
import ContactRequest from "../Pages/ContactRequest/ContactRequest";
import AllUsers from "../Pages/AllUsers/AllUsers";
import ManageUsers from "../Pages/ManageUsers/ManageUsers";


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

        //Normal Users
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
        },


        //Admin access Only
        {
          path : 'adminHome',
          element : <AdminHome></AdminHome>
        },
        {
          path : 'manageUsers',
          element : <ManageUsers></ManageUsers>
        },
        {
          path : 'approvePremium',
          element : <ApprovePremium></ApprovePremium>
        },
        {
          path : 'contactReq',
          element : <ContactRequest></ContactRequest>
        },
        {
          path : 'allUsers',
          element : <AllUsers></AllUsers>
        }
      ]
    }
  ]);