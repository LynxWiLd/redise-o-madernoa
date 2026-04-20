import { Link } from 'react-router';
import { Home, Search } from 'lucide-react';
import { Button } from '../components/Button';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-9xl font-bold text-[#56a927] mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-4">Página No Encontrada</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="primary" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Volver al Inicio
            </Button>
          </Link>
          <Link to="/catalogo">
            <Button variant="secondary" className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Ver Catálogo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
