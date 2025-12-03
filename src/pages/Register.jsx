import React from 'react'
import { Form, Link, redirect } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../componets'
import { customFetch } from '../utils';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData)
  console.log(data);
  
  try {
    
    const response = await customFetch.post('/auth/local/register',data)
    toast.success("Account created successfully")
    return redirect('/login')
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      'please double check your credentials';
    toast.error(errorMessage);
    return null;
  }
}

const Register = () => {

  return (
    <section className='h-screen grid place-items-center' data-theme="dark">
      <Form method='POST' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput type='text' label='username' name='username' />
        <FormInput label="email" name="email" type="email" />
        <FormInput label="password" name="password" type="password"/>
        <div className='mt-4'>
          <SubmitBtn text="submit" />
        </div>
        <p className='text-center'>Already a member yer? <Link to="/login">Login</Link></p>
      </Form>
    </section>
  )
}

export default Register