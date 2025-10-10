import { createBrowserRouter } from "react-router"
import Error from "../Components/Error"
import RootLayouts from "../Layouts/RootLayouts"
import BookListed from "../Pages/BookListed"
import Home from "../Pages/Home"
import ReadPages from "../Pages/ReadPages"

export const router = createBrowserRouter([
  {
    path:'/',
    Component:RootLayouts,
    errorElement:<Error></Error>,
    children:[
      {
        index:true,
        path:'home',
        Component:Home,
      },
      {
        path:'book-list',
        Component:BookListed,
      },
      {
        path:'read-pages',
        Component:ReadPages,
      }
    ],
  },
]);