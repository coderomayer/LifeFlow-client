import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/errorPage";
import DonationRequests from "../Pages/DonationRequests";
import Blog from "../Pages/Blog";
import SearchDonors from "../Pages/SearchDonors";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import DashboardMain from "../Layout/DashboardMain";

import Profile from "../Dashboard/Page/Profile";
import UpdateUser from "../Dashboard/Page/UpdateUser";
import CreateDonationRequest from "../Dashboard/Page/CreateDonationRequest ";
import PrivetRout from "../Provider/PrivetRout";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "donation-requests",
        element: <DonationRequests></DonationRequests>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "search-donors",
        element: <SearchDonors></SearchDonors>,
      },
    ],
  },

  {
    path: '/dashboard',
    element: <PrivetRout><DashboardMain></DashboardMain></PrivetRout> ,
    children: [

      {
        path: "profile",
        element: <Profile></Profile>,
      },

      {
        path: "update-user/:id",
        element: <UpdateUser></UpdateUser>
      },

      {
        path: "create-donation-request",
        element: <CreateDonationRequest></CreateDonationRequest>
      }


    ],
  },
]);


export default Router;