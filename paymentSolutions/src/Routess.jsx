import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import AboutUs from './AboutUs.jsx'
import App from './App'

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
  ]);

export default function Routess({routes}) {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}



