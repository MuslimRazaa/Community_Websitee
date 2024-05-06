import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/home';
import Detail from './pages/Detail page/Detail';
import DetailTwo from './pages/Detail page Two/DetailTwo';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ListingDetail from './pages/Detail page/ListingDetail';
import Popup1 from './components/Popup1';
import FilterPage from './pages/Filter Page/FilterPage';
import FindAgent from './pages/Agent/FindAgent';
import Listing from './pages/Detail page/Listing';

const router = createBrowserRouter([
  // {
  //   path:"/",
  //   element: <Home/>
  // },
  // {
  //   path: "/projects/:secondParam",
  //   element: <Detail/>
  // },
  //     {
  //     path: "/popup",
  //     element: <Popup1/>
  //   },  
  // {
  //   path: "/properties-for-sale/:secondParam",
  //   element: <ListingDetail/>
  // },
  //           {
  //       path: "listing",
  //       element: <Listing/>
  //     },
  //     {
  //       path: "projects",
  //       element: <DetailTwo/>
  //     },
  // {
  //       path: "/:firstParam",
  //       element: <FilterPage/>
  //     },
  // {
  //       path: "/Agent",
  //       element: <FindAgent/>
  //     },


    {
      path:"/:firstParam",
      element: <Home/>
    },
    {
      path: "/:firstParam/projects/:thirdParam",
      element: <Detail/>
    },
    {
      path: "/popup",
      element: <Popup1/>
    },  
    {
      path: "/:firstParam/properties-for-sale/:thirdParam",
      element: <ListingDetail/>
    },
        {
      path: "listing",
      element: <Listing/>
    },
    {
      path: "projects",
      element: <DetailTwo/>
    },
{
      path: "/:firstParam/:secondParam",
      element: <FilterPage/>
    },
{
      path: "/Agent",
      element: <FindAgent/>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
