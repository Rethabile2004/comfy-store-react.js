import React, { useState } from 'react'
import { customFetch, formatCurrency } from '../utils';
import { Link, useLoaderData } from 'react-router-dom';

export const loader = async ({ params }) => {
  const id = params.id;
  const response = await customFetch.get(`/products/${id}`)
  const product = response.data.data
  return { product }
}

const SingleProduct = () => {
  const { product } = useLoaderData()
  const { title, description, image, price, colors, company } = product.attributes;
  const [productColor, setProductColor] = useState(colors[0]);
  const dollarAmount = formatCurrency(price);
  // console.log(product);

  return (
    <section>
      <div className='text-md breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Producrs</Link>
          </li>
        </ul>
      </div>
      <div className='grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        <img src={image} alt={title} className='w-96 h-96 object-contain lg:w-full' />
        <div>
          <h1 className='text-3xl capitalize font-bold'>{title}</h1>
          <h4 className='text-xl text-neutral-content font-bold mt-2'>{company}</h4>
          <p className='mt-3'>{dollarAmount}</p>
          <p className='mt-6 leading-8'>{description}</p>
          <div className='mt-6'>
            <h4 className='font-medium text-medium tracking-wider capitalize'>colors</h4>
            <div className='mt-2'>
              {colors.map((color) => {
                return <button type='button' className={`h-6 w-6 mr-2 badge ${color == productColor && 'border-2 border-secondary'}`} onClick={() => setProductColor(color)} style={{ backgroundColor: color }}></button>
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct