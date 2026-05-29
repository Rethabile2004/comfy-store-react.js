import { Link, redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import {
  OrdersList,
  ComplexPaginationContainer,
  SectionTitle,
} from '../components';
import { PackageOpen } from 'lucide-react';

const ordersQuery = (params, user) => {
  return {
    queryKey: [
      'orders',
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store, queryClient) =>
    async ({ request }) => {
      const user = store.getState().userState.user;

      if (!user) {
        toast.warn('You must logged in to view orders');
        return redirect('/login');
      }
      const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
      ]);
      try {
        const response = await queryClient.ensureQueryData(
          ordersQuery(params, user)
        );

        return { orders: response.data.data, meta: response.data.meta };
      } catch (error) {
        console.log(error);
        const errorMessage =
          error?.response?.data?.error?.message ||
          'there was an error placing your order';
        toast.error(errorMessage);
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          return redirect('/login');
        }
        return null;
      }
    };

const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return (
      <section className='flex flex-col items-center justify-center text-center'>
        <div className='bg-base-200 p-8 rounded-full mb-6'>
          <PackageOpen className='w-20 h-20 text-primary opacity-80' />
        </div>
        <h2 className='text-3xl font-bold tracking-tight'>No orders found</h2>
        <p className='mt-4 text-lg text-base-content/70 max-w-md'>
          It looks like you haven't placed any orders yet. Start exploring our 
          collection and find the perfect pieces for your home!
        </p>
        <div className='mt-10'>
          <Link to='/products' className='btn btn-primary btn-wide'>
            Start Shopping
          </Link>
        </div>
      </section>
    );
  }
  return (
    <>
      <SectionTitle text='Your Orders' />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
};
export default Orders;
