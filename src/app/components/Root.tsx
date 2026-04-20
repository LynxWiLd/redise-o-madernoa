import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartSidebar } from './CartSidebar';
import { CartProvider } from '../context/CartContext';

export function Root() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <CartSidebar />
      </div>
    </CartProvider>
  );
}
