import { Github, Twitter, Linkedin, Mail, ShoppingBag } from 'lucide-react';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-base-200 text-base-content mt-15'>
      <div className='footer p-10 align-element grid-cols-1 md:grid-cols-3'>
        <aside>
          <div className='flex items-center gap-2 mb-2'>
            <div className='bg-primary p-2 rounded-lg'>
              <ShoppingBag className='text-primary-content w-6 h-6' />
            </div>
            <span className='text-2xl font-bold tracking-widest uppercase'>
              Comfy
            </span>
          </div>
          <p className='max-w-xs opacity-70'>
            Crafting the future of home comfort with high-quality furniture and 
            seamless digital shopping experiences. Built with modern React architecture.
          </p>
        </aside>

        <div>
          <span className='footer-title opacity-100'>Company</span>
          <Link to='/' className='link link-hover'>Home</Link>
          <Link to='/products' className='link link-hover'>Products</Link>
          <Link to='/about' className='link link-hover'>About Us</Link>
          <Link to='/cart' className='link link-hover'>Shopping Cart</Link>
        </div>
        <div>
          <span className='footer-title opacity-100'>Connect</span>
          <div className='grid grid-flow-col gap-4'>
            <a href='https://github.com/Rethabile2004' target='_blank' className='hover:text-primary transition-colors'>
              <BsGithub size={24} />
            </a>
            <a href='https://wa.me/27752626847'target='_blank' className='hover:text-primary transition-colors'>
              <BsWhatsapp size={24} />
            </a>
            <a href='https://www.linkedin.com/in/rethabile-eric-siase-6199a131a' target='_blank' className='hover:text-primary transition-colors'>
              <BsLinkedin size={24} />
            </a>
            <a href='ericksiase375@gmail.com' className='hover:text-primary transition-colors'>
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className='footer footer-center p-4 border-t border-base-300 bg-base-200 text-base-content opacity-60'>
        <aside>
          <p>© {currentYear} Comfy Store. All rights reserved. Built as a 2026 Udemy Portfolio Project.</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
