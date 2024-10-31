import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NavigationLayout from "../Layouts/NavigationLayout"
import ErrorPage from "../pages/ErrorPage"
import HomePage from "../pages/Home"
import ShopPage from "../pages/Shop"
import AboutPage from "../pages/About"
import ContactPage from "../pages/Contact"

export default function AppRoutes() {
    const router = createBrowserRouter([
        {
          path: '/',
          element: <NavigationLayout/>,
          errorElement: <ErrorPage/>,
          children: [
            {
              index: true, 
              element: <HomePage/>
            },
            {
              path: 'shop',
              element: <ShopPage/>
            },
            {
              path: 'about',
              element: <AboutPage/>
            },
            {
              path: 'contact',
              element: <ContactPage/>
            },
          ]
        }
      ])

  return <RouterProvider router={router}/>
}
