import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";
import About from "./components/About";
import {createBrowserRouter, RouterProvider} from "react-router"


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter= createBrowserRouter([
  {path:"/", element:<AppLayout/>},
  {path:"/about", element:<About/>}
])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);