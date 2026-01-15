import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';
import { BsGithub } from 'react-icons/bs';

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
          Discover a Smarter Way to Shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
          Experience curated collections, seamless navigation, and a shopping journey designed around you. From timeless interiors to everyday essentials, we bring style and simplicity together—so you can focus on what truly matters.
        </p>
        <div className='mt-10 flex gap-x-3'>
          <Link to='/products' className='btn btn-primary'>
            Our Products
          </Link>
          <Link to='https://github.com/Rethabile2004/comfy-store-react.js' className='btn btn-secondary'>
            <BsGithub /> Github
          </Link>
        </div>
      </div>
      <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box '>
        {carouselImages.map((image) => {
          return (
            <div key={image} className='carousel-item'>
              <img
                src={image}
                className='rounded-box h-full w-80 object-cover'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
