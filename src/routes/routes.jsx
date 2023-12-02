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
import ManageUsers from "../Pages/ManageUsers/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import CreateBioData from "../Pages/CreateBioData/CreateBioData";


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
      element : <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children : [

        //Normal Users
        {
          path : 'viewBioData',
          element : <BioData></BioData>
        },
        {
          path : 'createBioData',
          element : <CreateBioData></CreateBioData>
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
          element : <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path : 'manageUsers',
          element : <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path : 'approvePremium',
          element : <AdminRoute><ApprovePremium></ApprovePremium></AdminRoute>
        },
        {
          path : 'contactReq',
          element : <AdminRoute><ContactRequest></ContactRequest></AdminRoute>
        }
      ]
    }
  ]);