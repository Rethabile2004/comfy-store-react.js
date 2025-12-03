import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearCart } from '../features/cart/cartSlice'
import { logoutUser } from '../features/user/userSlice'

const Header = () => {
    const user = useSelector((state) => state.userState.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate('/');
        dispatch(clearCart())
        dispatch(logoutUser())
    }
    return (
        <header className='bg-neutral py-2 text-neutral-content'>
            <div className='align-element flex justify-center align-elements sm:justify-end'>
                {user === null ?
                    <>
                        <div className="flex gap-x-6 px-2 justify-center items-center">
                            <Link to='/login' className='link link-hover text-xs sm:text-sm'>Sign in /Guest</Link>
                            <Link to='/register' className='link link-hover text-xs sm:text-sm'>Create Account</Link>
                        </div>
                    </> :
                    <div className='flex place-items-center gap-x-2 sm:gap-x-8'>

                        <p className='text-sm sm:text-xs'>Welcome {user.username}</p>
                        <button className='btn btn-sm btn-primary btn-outline' onClick={handleOnClick}>logout</button>
                    </div>
                }
                {/* USER */}
                {/* LINKS */}
            </div>
        </header>
    )
}

export default Header