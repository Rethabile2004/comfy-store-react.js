import React from 'react'
import { FeaturedProducts, Hero } from '../componets'
import { customFetch } from '../utils'

export const loader = async () => {
  const response = await customFetch.get('/products');
  const products = response.data.data
  // console.log(request);
  
  return { products }
}

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts/>
    </>
  )
}

export default Landing