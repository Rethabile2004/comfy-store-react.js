import React from 'react'
import { customFetch } from '../utils';
import { Filters, PaginatedContainer, ProductsContainer } from '../componets';

const url = 'https://strapi-store-server.onrender.com/api/products';

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries()
  ])
  const response = await customFetch(url, { params: params });
  const products = response.data.data;
  const meta = response.data.meta;
  // console.log(meta);
  return { products, meta, params }
}

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginatedContainer />
    </>
  )
}

export default Products