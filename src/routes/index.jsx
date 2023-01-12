import { createBrowserRouter } from "react-router-dom"

import Root from "../pages/Root"
import NotFound from "../pages/NotFound"
import Dashboard from "../pages/Dashboard"
import Contact from "../pages/Contact"
import About from "../pages/About"

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <h1>Suas publicações aparecerão aqui...</h1>
          },
          {
            path: "posts",
            element: <h1>Suas publicações aparecerão aqui...</h1>
          },
          {
            path: "recent",
            element: <h1>Suas publicações recentes aparecerão aqui...</h1>
          },
          {
            path: "favorites",
            element: <h1>Suas publicações favoritas aparecerão aqui...</h1>
          }
        ]
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
])