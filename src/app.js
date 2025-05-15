import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";
import About from "./components/About";
import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom'
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
function AppLayout() {  
  return (
    <div className="app">
      <Header />
 
      <Outlet />
  
    </div>
  );
}

const appRouter= createBrowserRouter([
  {
    path:"/",
     element:<AppLayout/>,
     children:[
      {
        path:"/",
        element:<Body/>
      },
       {path:"/about",
     element:<About/>

      },
     {
        path:"/contact",
      element:<Contact/>
     },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    }
    ],
     errorElement:<Error/>
      
  },
  {
    path:"/login",
    element:<Login/>
  },
 
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);