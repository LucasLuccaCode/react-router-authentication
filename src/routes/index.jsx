import { createBrowserRouter } from "react-router-dom"

import Root from "../pages/Root"
import NotFound from "../pages/NotFound"
import Dashboard from "../pages/Dashboard"
import Contact from "../pages/Contact"

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])