import React from 'react'
import './index.css'

import App from './App'
import ComingSoon from "./pages/comingsoon";
import Navbar from "./pages/navbar";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signup";
import Payment from "./pages/payment.js";
import ErrorPage from "./error-page";
import Admin from "./pages/admin";

import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/app",
    element: <App/>
  },
  {
    path: "/admin",
    element: <Admin/>
  },
  {
    path: "/comingsoon",
    element: <ComingSoon/>
  },
  {
    path: "/error",
    element: <ErrorPage />
  },
  {
    path: "/signin",
    element: <SignIn/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/",
    element: <Navbar/>
  },
  {
    path: "/payment",
    element: <Payment/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);