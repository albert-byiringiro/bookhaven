import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import ShopPage from './pages/Shop.tsx'
import AboutPage from './pages/About.tsx'
import ContactPage from './pages/Contact.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
