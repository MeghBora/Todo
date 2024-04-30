import { useEffect, useState } from 'react'
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import Auth from '@/pages/Auth';

function App() {
  const { theme } = useTheme();
  return (
    <NextUIProvider >
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        <main className={`text-foreground bg-background`}>
          <Auth />
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default App
