
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './navbar/page'

import { CartProvider } from './cartcontext/cartContext'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commerce App',
  description: 'E-commerce clothing app',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
      <CartProvider>
        
      <Navbar/>
     
      
      {children}
      </CartProvider>
      
      </body>
    </html>
  )
}
