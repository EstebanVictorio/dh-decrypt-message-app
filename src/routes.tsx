import { createBrowserRouter } from "react-router-dom"
import Home from "pages/Home"
import HomeAction from "pages/Home/action"
import HomeLoader from "pages/Home/loader"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    action: HomeAction,
    loader: HomeLoader,
  },
])


export default router