import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import AboutUs from './AboutUs.jsx'
import App from './App'
import CreateAccount from './CreateAccount'

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
  }
  ]);

export default function Routess({routes}) {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}



