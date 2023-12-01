
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './navbar/page'

import { CartProvider } from './cartcontext/page'
import Myapp from './cartcontext/layout'
import { AuthProvider } from './authcontext/page'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commerce App',
  description: 'E-commerce clothing app',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
      <Myapp>
      <CartProvider>
        
      <Navbar/>
     
      
      {children}
      </CartProvider>
      </Myapp>
      </AuthProvider>
      
      </body>
    </html>
  )
}
