import React from 'react'
import { Hero } from '../componets'
import { customFetch } from '../utils'

export const loader = async () => {
  const response = await customFetch.get('/products');
  const products = response.data.data
  return { products }
}

const Landing = () => {
  return (
    <>
      <Hero />
    </>
  )
}

export default Landing