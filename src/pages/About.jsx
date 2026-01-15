import { Code2, ShoppingCart, Layout, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section className='align-element'>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>

      <p className='mt-10 text-lg leading-8 max-w-2xl mx-auto text-center'>
        This project is a high-performance E-commerce frontend built to demonstrate mastery of 
        modern React patterns. From complex state management to seamless routing, it 
        bridges the gap between a classroom assignment and a production-ready application.
      </p>

      <div className='mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
        
        <div className='card bg-base-200 shadow-xl transition-transform duration-300 hover:-translate-y-2'>
          <div className='card-body items-center text-center'>
            <Code2 className='w-12 h-12 text-secondary' /> 
            <h2 className='card-title mt-4'>Architecture</h2>
            <p className='text-sm'>Built with React Router 6 Data APIs (Loaders/Actions) for optimized data fetching.</p>
          </div>
        </div>

        <div className='card bg-base-200 shadow-xl transition-transform duration-300 hover:-translate-y-2'>
          <div className='card-body items-center text-center'>
            <Layout className='w-12 h-12 text-accent' /> 
            <h2 className='card-title mt-4'>Design</h2>
            <p className='text-sm'>Crafted with Tailwind CSS and DaisyUI for a fully responsive, mobile-first experience.</p>
          </div>
        </div>

        <div className='card bg-base-200 shadow-xl transition-transform duration-300 hover:-translate-y-2'>
          <div className='card-body items-center text-center'>
            <Cpu className='w-12 h-12 text-green-500' /> 
            <h2 className='card-title mt-4'>Efficiency</h2>
            <p className='text-sm'>Utilizing custom hooks and Axios wrappers to ensure clean, reusable logic.</p>
          </div>
        </div>

        <div className='card bg-base-200 shadow-xl transition-transform duration-300 hover:-translate-y-2'>
          <div className='card-body items-center text-center'>
            <ShoppingCart className='w-12 h-12 text-primary' /> 
            <h2 className='card-title mt-4'>Commerce</h2>
            <p className='text-sm'>Complete flow including dynamic filtering, pagination, and persistent cart logic.</p>
          </div>
        </div>
      </div>
      <div className='mt-16 flex flex-wrap justify-center gap-4'>
        {['React', 'Vite', 'Tailwind', 'React Router', 'Axios'].map((tech) => (
          <span key={tech} className='badge badge-outline badge-lg p-4 font-semibold'>
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default About;
