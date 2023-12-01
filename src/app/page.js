import HomePage from './component/page'
import styles from './page.module.css'
import { AuthProvider } from './authcontext/page'
import { CartProvider } from './cartcontext/page'

export default function Home() {
  return (
    <main className={styles.main}>
    <AuthProvider>
    <CartProvider>
    

    <HomePage/>
    </CartProvider>

    
    </AuthProvider>
    </main>
  )
}
