import { Button, Input, Link } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import { FaApple } from "react-icons/fa";
/* eslint-disable import/no-anonymous-default-export */

const Auth = () => {
  const { setTheme } = useTheme();
  return (
    <div className='flex justify-center align-center gap-10 h-[80%]' >
      <div className='flex flex-col gap-12 w-1/4'>
        <div className='flex gap-7'>
          <CiCircleList className='text-danger text-4xl mt-10'/>
          <h1 className='text-2xl text-center mt-10'>Todu</h1>
        </div>
        <div className='flex flex-col max-w-200 gap-6'>
          <h3 className='text-5xl text-left mt-8 font-bold mb-4'>Sign up</h3>
          <Button
          variant='bordered'
          color='warning'
          >
            <FaGoogle/> <h2 className='text-lg font-semibold'>Continue with Google</h2>
          </Button>
          <Button
          variant='bordered'
          color='primary'
          >
            <FaFacebookF className='text-lg'/> <h2 className='text-lg font-semibold'>Continue with Facebook</h2>
          </Button>
          <Button
          variant='bordered'
          color='danger'
          >
            <FaApple className='text-lg'/> <h2 className='text-lg font-semibold'>Continue with Apple</h2>
          </Button>
        <hr />
        <Input label='Email' type='email'/>
        <Input label='Password' type='password'/>
        <Button type='submit' color='primary'>Submit</Button>
      <h4>By continuing with Google, Apple, or Email, you agree to Toduist’s Terms of Service and Privacy Policy.</h4>
      <hr/>
      <h4 className='text-center'>Already signed up? <Link className='cursor-pointer'>Go to login</Link></h4>
        </div>
      </div>
      {/* <div className='w-1/2 bg-red-900'>

      </div> */}
    </div>
  )
}

export default Auth;