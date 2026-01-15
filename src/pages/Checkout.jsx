import { useSelector } from 'react-redux';
import { CheckoutForm, SectionTitle, CartTotals } from '../components';
import { toast } from 'react-toastify';
import { Link, redirect } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export const loader = (store) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn('You must be logged in to checkout');
    return redirect('/login');
  }
  return null;
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
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
      <SectionTitle text='place your order' />
      <div className='mt-8 grid gap-8 md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
