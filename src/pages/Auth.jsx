import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import React from 'react'
/* eslint-disable import/no-anonymous-default-export */

const Auth = () => {
  const {setTheme} = useTheme();
  return (
    <div>
      Hello World
      click here to change the theme 
      <Button onClick={() =>setTheme('dark')}>dark</Button>
      <Button onClick={() =>setTheme('light')}>light</Button>
    </div>
  )
}

export default Auth;