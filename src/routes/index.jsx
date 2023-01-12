import { createBrowserRouter, Navigate } from "react-router-dom"

import Root from "../pages/Root"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"

export default createBrowserRouter([
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
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Navigate to="posts" />
          },
          {
            path: "posts",
            element: <h1>Suas <strong>publicações</strong> aparecerão aqui...</h1>
          },
          {
            path: "recent",
            element: <h1>Suas <strong>publicações recentes</strong> aparecerão aqui...</h1>
          },
          {
            path: "favorites",
            element: <h1>Suas <strong>publicações favoritas</strong> aparecerão aqui...</h1>
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