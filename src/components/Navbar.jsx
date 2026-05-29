import { BsCart3 } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useSelector } from 'react-redux';
import { ShoppingBag } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  return (
    <nav className='sticky top-0 z-40 border-b border-base-300 bg-white/95 backdrop-blur'>
      <div className='navbar align-element relative'>
        <div className='navbar-start'>
          <NavLink
            to='/'
            className='hidden h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-sm transition hover:bg-indigo-700 lg:flex'
            aria-label='Comfy Store home'
          >
            <ShoppingBag />
          </NavLink>

          <div className='lg:hidden'>
            <button
              type='button'
              className='btn btn-ghost btn-circle'
              onClick={() => setIsMenuOpen((value) => !value)}
              aria-label='Open menu'
            >
              <FaBarsStaggered className='h-6 w-6' />
            </button>
            {isMenuOpen && (
              <ul className='menu absolute left-6 top-20 z-50 w-56 rounded-2xl border border-base-300 bg-white p-3 shadow-soft'>
                <NavLinks onClick={() => setIsMenuOpen(false)} />
              </ul>
            )}
          </div>
        </div>

        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal'>
            <NavLinks />
          </ul>
        </div>

        <div className='navbar-end'>
          <NavLink
            to='/cart'
            className='relative flex h-11 w-11 items-center justify-center rounded-full text-base-content transition hover:bg-base-200'
            aria-label='Shopping cart'
          >
            <BsCart3 className='h-6 w-6' />
            <span className='absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-secondary px-1.5 text-xs font-bold text-white'>
              {numItemsInCart}
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
