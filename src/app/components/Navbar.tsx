import { useState } from 'react';
import { Link } from 'react-router';
import { ShoppingCart, Menu, Phone, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Catálogo', path: '/catalogo' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    // Contenedor flotante con backdrop-blur para el efecto cristal
    <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl rounded-2xl bg-[#1c4421]/80 backdrop-blur-md border border-[#ffffff]/10 shadow-2xl transition-all duration-300">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="./LogoNoOficial.svg" 
              alt="Madernoa" 
              className="h-10 brightness-0 invert" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-4 py-2 text-[#fffffd] hover:text-[#eeae4d] hover:bg-[#ffffff]/10 rounded-xl font-medium transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+543814282087" className="text-[#fffffd] hover:text-[#eeae4d] transition-colors flex items-center gap-2 font-medium">
              <Phone className="w-4 h-4" />
              <span>+54 9 381 523 0075</span>
            </a>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-3 bg-[#eeae4d] hover:bg-[#d4a373] text-[#1c4421] rounded-xl transition-all shadow-lg"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#fffffd] hover:bg-[#ffffff]/10 rounded-xl transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#ffffff]/10 bg-[#1c4421]/95 rounded-b-2xl p-6 animate-in slide-in-from-top-4">
          <div className="space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-[#fffffd] hover:text-[#eeae4d] font-medium py-2 px-4 hover:bg-[#ffffff]/5 rounded-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}