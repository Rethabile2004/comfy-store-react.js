import React from 'react'
import { About, Cart, Checkout, CheckoutError, Error, ErrorElement, HomeLayout, Landing, Login, Oders, Products, Register, SingleProduct } from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { loader as landingLoader } from './pages/Landing';
import { loader as singleProductLoader } from './pages/SingleProduct';
import { loader as productsLoader } from './pages/Products';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/checkout",
        element: <Checkout />,
        errorElement: <CheckoutError />
      },
      {
        path: "/oders",
        element: <Oders />
      },
      {
        path: "/products",
        element: <Products />,
        loader:productsLoader
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader
      },
      {
        path: "/about",
        element: <About />
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
]);

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App