import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();

    if (error.status === 404) {
        return (
            <main className='grid min-h-[100vh] place-items-center px-8'>
                <div className='text-center'>
                    <h1 className='text-3xl mt-5 font-bold tracking-tight sm:text-5xl'>Page not found</h1>
                    <p className='mt-6 text-lg leading-7 '>
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                    <div className='mt-10 '>
                        <Link to='/' className='btn btn-secondary'>
                            Go back home
                        </Link>
                    </div>
                </div>

            </main>
        )
    }
    return (

        <div>Error</div>
    )
}

export default Error