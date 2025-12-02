import React, { useState } from 'react'
import { customFetch, formatCurrency, generateAmountOptions } from '../utils';
import { Link, useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

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
  const [amount, setAmount] = useState(1)
  const dollarAmount = formatCurrency(price);
  const handleAmount = (e) => {
    setAmount(e.target.value);
    generateAmountOptions(colors.length);
  }

  const cartProduct = {
    cartId: product.id + productColor,
    productID: product.id,
    image, title, price, description, company
  }

  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }))
    // console.log(cartProduct);
    
  }

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
                return <button key={color} type='button' className={`h-6 w-6 mr-2 badge ${color == productColor && 'border-2 border-secondary'}`} onClick={() => setProductColor(color)} style={{ backgroundColor: color }}></button>
              })}
            </div>
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <h4 className='text-md font-medium tracking-wider capitalize'>
                amount
              </h4>
            </label>
            <select
              className='select select-secondary select-bordered select-md'
              value={amount}
              onChange={handleAmount}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <div className='mt-10 '>
            <button
              className='btn btn-secondary btn-md'
              onClick={addToCart}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct