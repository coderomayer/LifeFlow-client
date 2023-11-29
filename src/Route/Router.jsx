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
    element: <DashboardMain></DashboardMain>,
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);


export default Router;