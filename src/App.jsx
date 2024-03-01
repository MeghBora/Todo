import { useState } from 'react'
import { NextUIProvider } from "@nextui-org/react";
import Auth from './pages/Auth';


function App() {

  return (
    <NextUIProvider >
    // wrap our application here
    <Auth />
    </NextUIProvider>
  )
}

export default App
