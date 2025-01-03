import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import AboutMe from "../Pages/AboutMe";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<AboutMe></AboutMe>
        },
        {
            path:'/skils',
            element:<Skills></Skills>
        },
        {
            path:'/projects',
            element:<Projects></Projects>
        },
        {
            path:'/',
            element:<Home></Home>
        },
      ]
    },
  ]);
  
  export default router