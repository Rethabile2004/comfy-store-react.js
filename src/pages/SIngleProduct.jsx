import React from 'react'
import { customFetch } from '../utils';
import { useLoaderData } from 'react-router-dom';

export const loader= async({params})=>{
  const id=params.id;
  const response=await customFetch.get(`/products/${id}`)
  const product=response.data.data
  return {product}
}

const SingleProduct = () => {
  const product=useLoaderData()
  const {title,description,image,price,colors,company}=product;
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct