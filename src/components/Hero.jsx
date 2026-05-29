import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1.webp';
import { BsGithub } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className='grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]'>
      <div>
        <p className='mb-4 text-sm font-bold uppercase tracking-[0.24em] text-secondary'>
          Modern home essentials
        </p>
        <h1 className='max-w-2xl text-4xl font-extrabold tracking-tight text-neutral sm:text-6xl'>
          Discover a smarter way to shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-slate-600'>
          Experience curated collections, seamless navigation, and a shopping
          journey designed around you. From timeless interiors to everyday
          essentials, Comfy brings style and simplicity together.
        </p>
        <div className='mt-10 flex flex-wrap gap-3'>
          <Link to='/products' className='btn btn-primary'>
            Our products
          </Link>
          <Link
            to='https://github.com/Rethabile2004/comfy-store-react.js'
            className='btn btn-secondary'
          >
            <BsGithub /> GitHub
          </Link>
        </div>
      </div>

      <div className='hidden lg:block'>
        <div className='relative overflow-hidden rounded-[2rem] bg-neutral shadow-soft'>
          <img
            src={hero1}
            alt='Comfortable furniture in a modern living room'
            className='h-[30rem] w-full object-cover opacity-95'
          />
          <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral/80 to-transparent p-8'>
            <p className='max-w-sm text-lg font-semibold text-white'>
              Furniture, decor, and essentials presented with a clean shopping
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
