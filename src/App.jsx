import React from 'react'
import { About, Cart, Checkout, CheckoutError, Error, HomeLayout, Landing, Login, Oders, Products, Register, SIngleProduct } from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// main.jsx or main.tsx
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children:[
      {
        index:true,
        element:<Landing/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/checkout",
        element:<Checkout/>,
        errorElement:<CheckoutError/>
      },
      {
        path:"/oders",
        element:<Oders/>
      },
      {
        path:"/products",
        element:<Products/>
      },
      {
        path:"/products/:id",
        element:<SIngleProduct/>
      },
      {
        path:"/about",
        element:<About/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />

  },
  {
    path: "/Register",
    element: <Register />,
    errorElement: <Error />
  }
])

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App