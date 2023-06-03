import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Add from "./pages/add/Add";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import MyGigs from "./pages/mygigs/MyGigs";
import Login from "./pages/login/Login";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";

import Orders from "./pages/orders/Orders";
import Register from "./pages/register/Register";

import React from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Home />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "./",
          element: <Home />,
        },
        {
          path: "./gigs",
          element: <Gigs />,
        },
        {
          path: "./login",
          element: <Login />,
        },
        {
          path: "./messages",
          element: <Messages />,
        },
        {
          path: "./register",
          element: <Register />,
        },
        {
          path: "./gig",
          element: <Gig />,
        },
        {
          path: "./add",
          element: <Add />,
        },
        {
          path: "./orders",
          element: <Orders />,
        },
        {
          path: "./message/:id",
          element: <Message />,
        },
        {
          path: "./mygigs",
          element: <MyGigs />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
