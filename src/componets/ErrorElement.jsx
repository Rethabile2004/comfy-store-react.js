import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
    const error=useRouteError();
    // const {}=error
    console.log(error);
    console.log('hi');
    
  return (
   <h4 className='font-bold text-4xl'>There was an error... </h4>
  )
}

export default ErrorElement