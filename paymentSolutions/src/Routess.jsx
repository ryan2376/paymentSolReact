import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import AboutUs from './AboutUs.jsx'
import App from './App'
import CreateAccount from './CreateAccount'
import Admin from './Admin'
import User from './User'
import AdminDash from './AdminDash'

const router = createBrowserRouter([
  // createRoutesFromElements(
  //   <Route path='/' element={<App />}>
  //     <Route index element={<App />} />
  //     <Route path='/AboutUs' element={<AboutUs />} />

  //   </Route>
  // ),
  {
    path: "AboutUs",
    element:<AboutUs />
  },

  {
    path:"/",
    element: <App />
  },

  {
    path:"Create",
    element:<CreateAccount />
  },

  {
    path:"Admin",
    element:<Admin />
  },

  {
    path:"User",
    element:<User />
  },
  {
    path:"AdminDash",
    element:<AdminDash />
  },

  ]);

export default function Routess({routes}) {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}



