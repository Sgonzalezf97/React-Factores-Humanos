import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Cart from './Routes/Cart';
import Login from './Routes/LogReg';
import Reg from './Routes/Reg';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap-icons/font/bootstrap-icons.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
  },
  {
    path: "/login",
    element: <div><Login /></div>,
  },
  {
    path: "/Cart",
    element: <div><Cart /></div>,
  },
  {
    path: "/About",
    element: <div><Cart /></div>,
  },
  {
    path: "/Profile",
    element: <div><Cart /></div>,
  },
  {
    path: "/Products",
    element: <div><Cart /></div>,
  },
  {
    path: "/Register",
    element: <div><Reg /></div>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
