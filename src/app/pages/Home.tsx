import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { CategoryCard } from '../components/CategoryCard';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Button';
import { Package, Truck, Users, Award, MessageSquare, Clock } from 'lucide-react';
import { Link } from 'react-router';

export function Home() {
  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1772677509584-cbec30114b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      title: 'Calidad en maderas para cada proyecto',
      subtitle: 'Más de 20 años ofreciendo los mejores productos',
    },
    {
      image: 'https://images.unsplash.com/photo-1593812725955-6d89f01ded2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      title: 'Expertos en madera y construcción',
      subtitle: 'Profesionales comprometidos con tu proyecto',
    },
    {
      image: 'https://images.unsplash.com/photo-1766245070010-6e13043ae47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      title: 'Stock permanente y entrega rápida',
      subtitle: 'Disponibilidad inmediata para tu obra',
    },
  ];
const [heroRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  const categories = [
    {
      title: 'Tableros',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1766245070010-6e13043ae47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      href: '/catalogo?categoria=tableros',
    },
    {
      title: 'Maderas',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1772677509584-cbec30114b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      href: '/catalogo?categoria=maderas',
    },
    {
      title: 'Construcción',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1722230428078-591f520674b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      href: '/catalogo?categoria=construccion',
    },
    {
      title: 'Accesorios',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1690926109069-91e2215c651a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      href: '/catalogo?categoria=accesorios',
    },
  ];

  const featuredProducts = [
    {
      id: '1',
      name: 'Tablero Contrachapado 18mm',
      price: 9999,
      image: 'https://images.unsplash.com/photo-1766245070010-6e13043ae47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      category: 'Tableros',
    },
    {
      id: '2',
      name: 'Madera de Pino Natural',
      price: 9999,
      image: 'https://images.unsplash.com/photo-1772677509584-cbec30114b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      category: 'Maderas',
    },
    {
      id: '3',
      name: 'Viga Laminada 200x50',
      price: 9999,
      image: 'https://images.unsplash.com/photo-1702180448025-985eb7ded33f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      category: 'Construcción',
    },
    {
      id: '4',
      name: 'Tablero MDF 16mm',
      price: 9999,
      image: 'https://images.unsplash.com/photo-1767124472496-87b210678063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      category: 'Tableros',
    },
  ];

  const benefits = [
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description: 'Servicio de entrega en 24-48h en toda España',
    },
    {
      icon: Package,
      title: 'Stock Permanente',
      description: 'Amplio inventario disponible todo el año',
    },
    {
      icon: Users,
      title: 'Atención Personalizada',
      description: 'Asesoramiento profesional para tu proyecto',
    },
    {
      icon: Award,
      title: 'Calidad Garantizada',
      description: 'Productos certificados y de primera calidad',
    },
  ];

  const sponsors = [
    './marcas/marca_01.webp',
    './marcas/marca_02.webp',
    './marcas/marca_03.svg',
    './marcas/marca_04.jpg',
    './marcas/marca_05.png',
    './marcas/marca_06.webp',
    './marcas/marca_07.png',
    './marcas/marca_08.png',
    './marcas/marca_09.png',
    './marcas/marca_10.jpg',
    './marcas/marca_11.png',
  ];
const [sponsorsRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000, stopOnInteraction: false })
  ]);

  return (
    <div>
<section className="relative w-full h-screen overflow-hidden">
  <div className="absolute inset-0" ref={heroRef}>
    <div className="flex h-full">
      {heroSlides.map((slide, index) => (
        <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full">
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}
    </div>
  </div>

  <div className="relative z-10 h-full flex items-center justify-center pointer-events-none">
    <div className="max-w-5xl mx-auto px-6 text-center pointer-events-auto">
      <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
        {heroSlides[0].title} 
      </h1>
      <p className="text-xl md:text-3xl text-white/90 mb-10 font-light drop-shadow-md">
        {heroSlides[0].subtitle}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/catalogo">
          <Button variant="primary" className="px-8 py-4 text-lg hover:scale-105 transition-transform">
            Ver Catálogo
          </Button>
        </Link>
        <Link to="/contacto">
          <Button variant="secondary" className="px-8 py-4 text-lg bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-transform">
            Hacer Pedido
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Categorías Destacadas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra amplia gama de productos de madera para todo tipo de proyectos
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Productos Destacados</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestros productos más populares y de mayor calidad
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/catalogo">
              <Button variant="primary">Ver Todo el Catálogo</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1c4421] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">¿Por Qué Elegir Madernoa?</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Nos diferenciamos por nuestro compromiso con la calidad y el servicio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-white/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Representamos las marcas</h2>
        
        {/* Contenedor del carrusel */}
        <div className="overflow-hidden" ref={sponsorsRef}>
          <div className="flex">
            {sponsors.map((logo, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-4"
              >
                <div className="bg-white rounded-lg p-6 flex items-center justify-center h-24 shadow-md">
                  <img 
                    src={logo} 
                    alt={`Proveedor ${index + 1}`} 
                    className="max-h-full object-contain" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Sobre Nosotros</h2>
              <p className="text-gray-300 mb-4">
                Con más de 20 años de experiencia en el sector, Madernoa es tu aliado de
                confianza para proyectos de construcción y carpintería.
              </p>
              <p className="text-gray-300 mb-6">
                Nuestro equipo de profesionales está comprometido en ofrecer productos de la
                más alta calidad y un servicio personalizado que garantiza el éxito de cada
                proyecto.
              </p>
              <Link to="/nosotros">
                <Button variant="primary">Conocer Más</Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="./modelos/image_03.png"
                alt="Equipo Madernoa"
                className="rounded-lg shadow-xl"
              />
              <img
                src="./modelos/image_02.png"
                alt="Instalaciones"
                className="rounded-lg shadow-xl mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="w-16 h-16 mx-auto mb-6 text-[#56a927]" />
          <h2 className="text-4xl font-bold mb-6">¿Necesitas Asesoramiento?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Nuestro equipo de expertos está listo para ayudarte a encontrar los productos
            perfectos para tu proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button variant="primary">Contactar Ahora</Button>
            </Link>
            <a
              href="https://wa.me/5493815230075"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">WhatsApp</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
