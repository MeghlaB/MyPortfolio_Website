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
import ContactUs from "../Pages/ContactUs";
import Details from "../Pages/Details";
import ScrollToTopOnMount from "../Components/ScroolComponent";
import Details1 from "../Pages/Details1";
import Details2 from "../Pages/Details2";
import Details3 from "../Pages/Details3";
import Details4 from "../Pages/Details4";
import Details5 from "../Pages/Details5";

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
            path:'/contact',
            element:<ContactUs></ContactUs>
        },
        {
          path:'details',
          element:<Details>
            <ScrollToTopOnMount></ScrollToTopOnMount>
          </Details>
        },
        {
          path:'details1',
          element:<Details1></Details1>
        },
        {
          path:'details2',
          element:<Details2></Details2>
        },
        {
          path:'details3',
          element:<Details3></Details3>
        },
        {
          path:'details4',
          element:<Details4></Details4>
        },
        {
          path:'details5',
          element:<Details5></Details5>
        },
      ]
    },
  ]);
  
  export default router