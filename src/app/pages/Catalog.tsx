import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { Search, SlidersHorizontal, X } from 'lucide-react';

export function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Sincroniza la categoría seleccionada con la URL
  const selectedCategory = searchParams.get('categoria') || 'all';
  
  const [selectedMeasure, setSelectedMeasure] = useState<string>('all');
  const [selectedStock, setSelectedStock] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    { id: '1', name: 'Tablero Contrachapado 18mm', price: 9999, image: 'https://images.unsplash.com/photo-1766245070010-6e13043ae47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', category: 'Tableros', measure: '244x122 cm', stock: true },
    { id: '2', name: 'Madera de Pino Natural', price: 9999, image: 'https://images.unsplash.com/photo-1772677509584-cbec30114b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', category: 'Maderas', measure: '200x10x2.5 cm', stock: true },
    { id: '3', name: 'Viga Laminada 200x50', price: 9999, image: 'https://images.unsplash.com/photo-1702180448025-985eb7ded33f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', category: 'Construcción', measure: '200x50 mm', stock: true },
    { id: '4', name: 'Tablero MDF 16mm', price: 9999, image: 'https://images.unsplash.com/photo-1767124472496-87b210678063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', category: 'Tableros', measure: '244x122 cm', stock: true },
    { id: '5', name: 'Madera de Roble', price: 9999, image: 'https://images.unsplash.com/photo-1766245070010-6e13043ae47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', category: 'Maderas', measure: '250x15x3 cm', stock: false },
    { id: '6', name: 'Tornillos para Madera (100 uds)', price: 9999, image: 'https://images.unsplash.com/photo-1690926109069-91e2215c651a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', category: 'Accesorios', measure: '5x60 mm', stock: true },
    { id: '7', name: 'Tablero OSB 12mm', price: 9999, image: 'https://images.unsplash.com/photo-1767124472496-87b210678063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', category: 'Tableros', measure: '244x122 cm', stock: true },
    { id: '8', name: 'Listón de Pino', price: 9999, image: 'https://images.unsplash.com/photo-1772677509584-cbec30114b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', category: 'Construcción', measure: '240x4x2 cm', stock: true },
    { id: '9', name: 'Barniz Protector', price: 9999, image: 'https://images.unsplash.com/photo-1690926109069-91e2215c651a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', category: 'Accesorios', measure: '750 ml', stock: true },
    { id: '10', name: 'Madera de Haya', price: 9999, image: 'https://images.unsplash.com/photo-1766245070010-6e13043ae47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', category: 'Maderas', measure: '200x12x2.5 cm', stock: true },
    { id: '11', name: 'Rastreles para Tejado', price: 9999, image: 'https://images.unsplash.com/photo-1702180448025-985eb7ded33f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', category: 'Construcción', measure: '300x5x2.5 cm', stock: true },
    { id: '12', name: 'Tablero Melamina Blanco', price: 9999, image: 'https://images.unsplash.com/photo-1767124472496-87b210678063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', category: 'Tableros', measure: '244x122 cm', stock: true },
  ];

  const categories = ['all', 'Tableros', 'Maderas', 'Construcción', 'Accesorios'];
  const measures = ['all', '244x122 cm', '200x10x2.5 cm', '200x50 mm', '250x15x3 cm'];

  // Manejador para actualizar la categoría en la URL
  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (category === 'all') {
      params.delete('categoria');
    } else {
      params.set('categoria', category);
    }
    setSearchParams(params);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesMeasure = selectedMeasure === 'all' || product.measure === selectedMeasure;
    const matchesStock = selectedStock === 'all' || (selectedStock === 'available' && product.stock);
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesMeasure && matchesStock && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fefefe]">
      <div className="bg-[#1c4421] relative h-[400px] flex items-center justify-center overflow-hidden text-white py-16 mb-8">
        <div className="absolute inset-0 bg-[url('/fondos/maderas-artificiales.png')] bg-cover bg-center opacity-20" />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Catálogo de Productos</h1>
          <p className="text-[#d4a373] text-lg font-medium">Calidad y variedad a tu disposición</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1c4421]/50 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar productos por nombre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-[#1c4421]/10 rounded-2xl focus:ring-2 focus:ring-[#d4a373] focus:border-[#d4a373] transition-all outline-none"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center justify-center gap-2 px-6 py-4 bg-[#1c4421] text-white rounded-2xl"
          >
            <SlidersHorizontal className="w-5 h-5" /> Filtros
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className={`md:block ${showFilters ? 'block' : 'hidden'} w-full md:w-72 space-y-6`}>
            <div className="bg-[#f4f4f2] p-6 rounded-2xl border border-[#1c4421]/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-[#1c4421] text-lg">Filtros</h3>
                <button className="md:hidden" onClick={() => setShowFilters(false)}><X /></button>
              </div>

              <FilterGroup title="Categoría" options={categories} selected={selectedCategory} onChange={handleCategoryChange} />
              <FilterGroup title="Medidas" options={measures} selected={selectedMeasure} onChange={setSelectedMeasure} />
              
              <div className="mt-6 pt-6 border-t border-[#1c4421]/10">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={selectedStock === 'available'} onChange={(e) => setSelectedStock(e.target.checked ? 'available' : 'all')} className="w-5 h-5 rounded accent-[#1c4421]" />
                  <span className="text-gray-700 font-medium">Solo disponibles</span>
                </label>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="mb-6 text-[#1c4421]/60 font-medium">
              Mostrando {filteredProducts.length} resultados
            </div>
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 border-2 border-dashed border-[#1c4421]/10 rounded-2xl">
                <p className="text-gray-500">No se encontraron productos con estos filtros.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, options, selected, onChange }: any) {
  return (
    <div className="mb-6">
      <h4 className="font-semibold text-[#1c4421] mb-3">{title}</h4>
      <div className="space-y-2">
        {options.map((opt: string) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${selected === opt ? 'bg-[#1c4421] text-white' : 'text-gray-600 hover:bg-[#1c4421]/5'}`}
          >
            {opt === 'all' ? 'Todos' : opt}
          </button>
        ))}
      </div>
    </div>
  );
}