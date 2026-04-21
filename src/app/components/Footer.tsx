import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1c4421] text-[#fffffd] border-t-4 border-[#55ab26]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Grid Responsive: 1 columna en móvil, 2 en tablet, 4 en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center lg:text-left">
          
          {/* Columna 1: Info Empresa */}
          <div className="flex flex-col items-center lg:items-start">
            <img src="./LogoNoOficial.svg" alt="Madernoa" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-[#fffffd]/70 text-sm mb-6 max-w-xs">
              Calidad en maderas para cada proyecto. Más de 20 años brindando soluciones en Tucumán.
            </p>
            <div className="flex gap-3 justify-center lg:justify-start">
              {/* Enlaces correctos */}
              <a href="https://www.facebook.com/MadernoaSolucionesIntegralesEnMaderas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#55ab26]/20 hover:bg-[#eeae4d] rounded-full flex items-center justify-center transition-all">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.instagram.com/madernoa_maderas/?hl=es" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#55ab26]/20 hover:bg-[#eeae4d] rounded-full flex items-center justify-center transition-all">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces */}
          <div>
            <h3 className="font-semibold mb-4 text-[#eeae4d]">Enlaces</h3>
            <ul className="space-y-2 text-sm text-[#fffffd]/70">
              {['Inicio', 'Catálogo', 'Nosotros', 'Contacto'].map(item => (
                <li key={item}>
                  <Link to={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`} className="hover:text-[#55ab26] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Productos */}
<div>
  <h3 className="font-semibold mb-4 text-[#eeae4d]">Productos</h3>
  <ul className="space-y-2 text-sm text-[#fffffd]/70">
    <li>
      <Link to="/catalogo?categoria=Tableros" className="hover:text-[#55ab26] transition-colors">
        Tableros
      </Link>
    </li>
    <li>
      <Link to="/catalogo?categoria=Maderas" className="hover:text-[#55ab26] transition-colors">
        Maderas
      </Link>
    </li>
    <li>
      <Link to="/catalogo?categoria=Construcción" className="hover:text-[#55ab26] transition-colors">
        Construcción
      </Link>
    </li>
    <li>
      <Link to="/catalogo?categoria=Accesorios" className="hover:text-[#55ab26] transition-colors">
        Accesorios
      </Link>
    </li>
  </ul>
</div>

          {/* Columna 4: Contacto */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="font-semibold mb-4 text-[#eeae4d]">Contacto</h3>
            <ul className="space-y-3 text-sm text-[#fffffd]/70">
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 text-[#55ab26]" />
                <span>Av. Juan B. Justo 1527, Tucumán</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <Phone className="w-5 h-5 text-[#55ab26]" />
                <a href="https://wa.me/5493815230075" target="_blank" rel="noopener noreferrer" className="hover:text-[#55ab26]">
                  +54 9 381 523 0075
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <Mail className="w-5 h-5 text-[#55ab26]" />
                <a href="mailto:info@madernoa.com.ar" className="hover:text-[#55ab26]">info@madernoa.com.ar</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Se organiza automáticamente en columna en móvil y fila en desktop */}
        <div className="border-t border-[#fffffd]/10 pt-8 mt-8 text-center">
          <div className="flex flex-col items-center gap-4 text-xs text-[#fffffd]/50">
            <p>© 2026 Madernoa. Todos los derechos reservados.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="hover:text-[#55ab26]">Política de Privacidad</a>
              <a href="#" className="hover:text-[#55ab26]">Términos y Condiciones</a>
              <a 
                href="https://www.instagram.com/estudiocamaleon.tuc/?hl=es" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#eeae4d] font-medium"
              >
                Desarrollado por Estudio Camaleón
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}