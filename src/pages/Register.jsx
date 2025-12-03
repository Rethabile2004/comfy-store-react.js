import React from 'react'
import { Form, Link } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../componets'

export const action = () => {
  return null
}

const Register = () => {
  // console.log(require("daisyui/src/theming/themes"));

  return (

    <section className='h-screen grid place-items-center' data-theme="dark">
      <Form method='post' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput defaultValue={"Rethabile"} label="username" name="username" type="text" />
        <FormInput label="email" name="email" type="email" defaultValue={"test1@test.com"} />
        <FormInput label="password" name="password" type="password" />
        <div className='mt-4'>
          <SubmitBtn text="submit" />
        </div>
        <p className='text-center'>Already a member yer? <Link to="/login">Login</Link></p>
      </Form>
    </section>
  )
}

export default Register