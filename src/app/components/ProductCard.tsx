import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  showPrice?: boolean;
}

export function ProductCard({
  id,
  name,
  price,
  image,
  category,
  showPrice = true,
}: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({ id, name, price, image });
  };

  return (
    <Link
      to={`/producto/${id}`}
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {category && (
          <span className="absolute top-3 left-3 bg-[#56a927] text-white px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2 text-gray-900 group-hover:text-[#56a927] transition-colors">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          {showPrice ? (
            <p className="text-lg font-bold text-[#56a927]">{price.toFixed(2)}$</p>
          ) : (
            <p className="text-sm text-gray-600">Consultar precio</p>
          )}
          <button
            onClick={handleAddToCart}
            className="bg-[#56a927] hover:bg-[#3d7f20] text-white p-2 rounded-lg transition-colors shadow-md"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Link>
  );
}
