import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { formatCurrency } from '../utils';

const ProductsGrid = () => {
    const { products } = useLoaderData();
    console.log(products);
    
    return (
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {products.map((product) => {
                const { title, image, price } = product.attributes
                    const dollarsAmount=formatCurrency(price);
                return <Link key={product.id} to={`/products/${product.id}`} className='card w-full shadow-xl hover:shadow-2xl transition duration-300'>
                    <figure className='px-4 pt-4'>
                        <img src={image} alt={title} className='w-full object-cover rounded-xl h-64 md:h-48 ' />                        
                    </figure>
                    <div className='items-center text-center card-body'>
                        <h2 className='card-title capitalize tracking-wider'>{title}</h2>
                        <span className='text-secondary'>{dollarsAmount}</span>
                    </div>
                </Link>
            })}
        </div>
    )
}

export default ProductsGrid