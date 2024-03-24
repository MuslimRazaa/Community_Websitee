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




const router = createBrowserRouter([
  {
    path:"/:firstParam",
    element: <Home/>
  },
  {
    path: "/:firstParam/projects/:thirdParam",
    element: <Detail/>
  },
  {
    path: "Projects-two",
    element: <DetailTwo/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
