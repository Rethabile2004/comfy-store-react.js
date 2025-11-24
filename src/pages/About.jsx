import React from 'react'

const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='font-bold text-4xl leading-none tracking-tight sm:text-6xl'>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className="stat">
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius itaque eum obcaecati voluptate enim architecto aliquam ipsam sed alias. Ipsum totam ad nostrum cumque dolorem, vitae doloribus? Id, fugiat odit.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis dolores est aliquid quo, quisquam exercitationem assumenda. Atque esse nulla eveniet at impedit expedita, quaerat beatae, ab velit vero enim sed!
      </p>
    </>
  )
}

export default About