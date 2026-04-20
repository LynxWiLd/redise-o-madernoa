import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { Button } from '../components/Button';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Minus, Plus, Check, Truck, Award, Clock } from 'lucide-react';

export function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedMeasure, setSelectedMeasure] = useState('244x122 cm');
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: id || '1',
    name: 'Tablero Contrachapado 18mm',
    price: 9999,
    description:
      'Tablero contrachapado de alta calidad, ideal para construcción y carpintería. Fabricado con capas de madera natural prensadas que garantizan resistencia y durabilidad excepcionales.',
    category: 'Tableros',
    images: [
      'https://images.unsplash.com/photo-1766245070010-6e13043ae47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1767124472496-87b210678063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1702180448025-985eb7ded33f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    ],
    measures: ['244x122 cm', '200x100 cm', '183x122 cm'],
    features: [
      'Alta resistencia a la humedad',
      'Fácil de trabajar y cortar',
      'Acabado liso en ambas caras',
      'Certificado FSC',
      'Ideal para exteriores e interiores',
    ],
    specifications: {
      Grosor: '18mm',
      Material: 'Madera de pino',
      Capas: '7 capas',
      Peso: 'Aprox. 28 kg/m²',
      Uso: 'Interior y exterior',
    },
  };

  const relatedProducts = [
    {
      id: '2',
      name: 'Madera de Pino Natural',
      price: 9999,
      image: 'https://images.unsplash.com/photo-1772677509584-cbec30114b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      category: 'Maderas',
    },
    {
      id: '4',
      name: 'Tablero MDF 16mm',
      price: 9999,
      image: 'https://images.unsplash.com/photo-1767124472496-87b210678063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      category: 'Tableros',
    },
    {
      id: '7',
      name: 'Tablero OSB 12mm',
      price: 9999,
      image: 'https://images.unsplash.com/photo-1767124472496-87b210678063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      category: 'Tableros',
    },
    {
      id: '12',
      name: 'Tablero Melamina Blanco',
      price: 9999,
      image: 'https://images.unsplash.com/photo-1767124472496-87b210678063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      category: 'Tableros',
    },
  ];

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      measure: selectedMeasure,
    });
    for (let i = 1; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        measure: selectedMeasure,
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fefefe] mt-24"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/catalogo"
          className="inline-flex items-center gap-2 text-[#1c4421] hover:text-[#d4a373] mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al catálogo
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Galería de imágenes */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-[#1c4421]/10 overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-[#1c4421] shadow-md'
                      : 'border-gray-100 hover:border-[#1c4421]/30'
                  }`}
                >
                  <img src={image} alt={`Imagen ${index + 1}`} className="w-full aspect-square object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Información del Producto */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#1c4421]/10 p-8">
            <span className="inline-block bg-[#1c4421] text-[#d4a373] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              {product.category}
            </span>
            <h1 className="text-4xl font-bold mb-4 text-[#1c4421]">{product.name}</h1>
            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-bold text-[#1c4421]">
                {product.price.toFixed(2)}$
              </span>
              <span className="text-gray-500">por unidad</span>
            </div>

            {/* Medidas */}
            <div className="mb-6">
              <label className="block font-semibold mb-3 text-[#1c4421]">Medidas disponibles:</label>
              <div className="grid grid-cols-3 gap-3">
                {product.measures.map((measure) => (
                  <button
                    key={measure}
                    onClick={() => setSelectedMeasure(measure)}
                    className={`px-4 py-2 border-2 rounded-xl transition-all font-medium ${
                      selectedMeasure === measure
                        ? 'border-[#1c4421] bg-[#1c4421] text-white'
                        : 'border-gray-200 hover:border-[#1c4421]'
                    }`}
                  >
                    {measure}
                  </button>
                ))}
              </div>
            </div>

            {/* Cantidad y Botón */}
            <div className="mb-8 flex items-center gap-6">
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl p-1">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-gray-100 rounded-lg"><Minus className="w-4 h-4" /></button>
                <span className="font-bold w-12 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-100 rounded-lg"><Plus className="w-4 h-4" /></button>
              </div>
              <Button onClick={handleAddToCart} className="flex-1 py-4 bg-[#1c4421] hover:bg-[#1c4421]/90">
                Agregar al Carrito
              </Button>
            </div>

            {/* Beneficios */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
              {[
                { icon: Truck, text: 'Entrega 24-48h' },
                { icon: Award, text: 'Calidad garantizada' },
                { icon: Clock, text: 'Stock disponible' }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <item.icon className="w-6 h-6 mx-auto mb-2 text-[#d4a373]" />
                  <p className="text-[10px] uppercase font-bold text-[#1c4421]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Características</h2>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#56a927] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Especificaciones Técnicas</h2>
            <dl className="space-y-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b pb-2">
                  <dt className="font-semibold text-gray-700">{key}:</dt>
                  <dd className="text-gray-600">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8">Productos Relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
