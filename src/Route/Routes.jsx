import { createBrowserRouter } from "react-router"
import RootLayouts from "../Layouts/RootLayouts"
import BookListed from "../Pages/BookListed"
import Home from "../Pages/Home"
import ReadPages from "../Pages/ReadPages"
import Error from "../Pages/Error"

export const router = createBrowserRouter([
  {
    path:'/',
    Component:RootLayouts,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        Component:Home,
      },
      {
        path:'/book-list',
        Component:BookListed,
      },
      {
        path:'/read-pages',
        Component:ReadPages,
      }
    ],
  },
]);