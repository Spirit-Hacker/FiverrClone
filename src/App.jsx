import React from 'react';
import "./App.scss"
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Gig from './pages/gig/Gig';
import Gigs from './pages/gigs/Gigs';
import Message from './pages/message/Message';
import Messages from './pages/messages/Messages';
import Orders from './pages/orders/Orders';
import Add from "./pages/add/Add"
import MyGigs from './pages/myGigs/MyGigs';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Footer from './components/footer/Footer';


function App() {

  const Layout = () => {
    return(
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
        {
          path: "/gig/:id",
          element: <Gig/>
        },
        {
          path: "/orders",
          element: <Orders/>
        },
        {
          path: "/mygigs",
          element: <MyGigs/>
        },
        {
          path: "/add",
          element: <Add/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/message/:id",
          element: <Message/>
        },
      ]
    },
  ]);
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
