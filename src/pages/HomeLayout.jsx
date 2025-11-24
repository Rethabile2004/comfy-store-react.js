import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Navbar } from '../componets'
// import {}from 'react-router-dom'
const HomeLayout = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <section className='align-elements py-20'>
            <Outlet />

            </section>
        </>
    )
}

export default HomeLayout