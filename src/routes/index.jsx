import { createBrowserRouter, Navigate } from "react-router-dom"

import Root from "../pages/Root"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import PrivateRoute from "./private"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/dashboard",
        element: <PrivateRoute />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />
          }
        ]
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
])