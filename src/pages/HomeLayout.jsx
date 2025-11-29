import React from 'react'
import { Outlet, useNavigate, useNavigation } from 'react-router-dom'
import { Header, Loading, Navbar } from '../componets'
// import {}from 'react-router-dom'
const HomeLayout = () => {
    const navigation = useNavigation()
    const isPageLoading = navigation.state == 'loading'
    return (
        <>
            <Header />
            <Navbar />
            {
                isPageLoading ? <Loading /> :
                    <section className='align-elements py-20'>
                        <Outlet />
                    </section>
            }
        </>
    )
}

export default HomeLayout