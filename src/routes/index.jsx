import { createBrowserRouter } from "react-router-dom"

import Root from "../pages/Root"
import NotFound from "../pages/NotFound"

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [

    ]
  }
])