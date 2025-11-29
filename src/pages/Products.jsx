import React from 'react'
import { customFetch } from '../utils';
import { Filters, PaginatedContainer, ProductsContainer } from '../componets';

const url = 'https://strapi-store-server.onrender.com/api/products';

export const loader= async({request})=>{
  const response=await customFetch(url);
  const products=response.data.data;
  const meta=response.data.meta;
  // console.log(meta);
  return {products,meta}
}

const Products = () => {
  return (
    <>
    
    <Filters/>
    <ProductsContainer/>
    <PaginatedContainer/>
    </>
  )
}

export default Products