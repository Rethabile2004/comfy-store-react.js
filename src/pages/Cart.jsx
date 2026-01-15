import { useSelector } from 'react-redux';
import { CartItemsList, SectionTitle, CartTotals } from '../components';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react'; // Import the icon

const Cart = () => {
  const user = useSelector((state) => state.userState.user);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return (
      <section className='align-element'>
        <div className='flex flex-col items-center justify-center text-center'>
          <div className='bg-base-200 p-6 rounded-full mb-6'>
            <ShoppingBag className='w-16 h-16 text-primary opacity-80' />
          </div>
          
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Your cart is empty
          </h2>
          
          <p className='mt-4 text-lg text-base-content/70 max-w-md'>
            Looks like you haven't added anything to your cart yet. 
            Check out our latest arrivals and find something you love!
          </p>

          <div className='mt-10'>
            <Link to='/products' className='btn btn-primary px-8'>
              Fill your cart
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <SectionTitle text='Shopping Cart' />
      <div className='mt-8 grid gap-8 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
          {user ? (
            <Link to='/checkout' className='btn btn-primary btn-block mt-8'>
              proceed to checkout
            </Link>
          ) : (
            <Link to='/login' className='btn btn-primary btn-block mt-8'>
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
