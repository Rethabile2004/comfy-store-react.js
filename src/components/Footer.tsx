import { Mail, ShoppingBag } from 'lucide-react';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='mt-16 border-t border-base-300 bg-base-200 text-base-content'>
      <div className='align-element grid gap-10 py-10 md:grid-cols-3'>
        <aside>
          <div className='mb-3 flex items-center gap-2'>
            <div className='rounded-lg bg-primary p-2'>
              <ShoppingBag className='h-6 w-6 text-white' />
            </div>
            <span className='text-2xl font-bold uppercase tracking-widest'>
              Comfy
            </span>
          </div>
          <p className='max-w-xs text-sm leading-6 text-slate-600'>
            Crafting the future of home comfort with high-quality furniture and
            seamless digital shopping experiences. Built with modern React
            architecture.
          </p>
        </aside>

        <div>
          <span className='footer-title'>Company</span>
          <div className='grid gap-2'>
            <Link to='/' className='link link-hover'>
              Home
            </Link>
            <Link to='/products' className='link link-hover'>
              Products
            </Link>
            <Link to='/about' className='link link-hover'>
              About Us
            </Link>
            <Link to='/cart' className='link link-hover'>
              Shopping Cart
            </Link>
          </div>
        </div>

        <div>
          <span className='footer-title'>Connect</span>
          <div className='flex gap-4'>
            <a
              href='https://github.com/Rethabile2004'
              target='_blank'
              rel='noreferrer'
              className='transition-colors hover:text-primary'
            >
              <BsGithub size={24} />
            </a>
            <a
              href='https://wa.me/27752626847'
              target='_blank'
              rel='noreferrer'
              className='transition-colors hover:text-primary'
            >
              <BsWhatsapp size={24} />
            </a>
            <a
              href='https://www.linkedin.com/in/rethabile-eric-siase-6199a131a'
              target='_blank'
              rel='noreferrer'
              className='transition-colors hover:text-primary'
            >
              <BsLinkedin size={24} />
            </a>
            <a
              href='mailto:ericksiase375@gmail.com'
              className='transition-colors hover:text-primary'
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className='border-t border-base-300 bg-white/60 py-4 text-center text-sm text-slate-500'>
        <p>
          © {currentYear} Comfy Store. All rights reserved. Built as a 2026
          Udemy Portfolio Project.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
