import { Users, Award, Zap, Heart, Target } from 'lucide-react';

export function About() {
  const values = [
    { icon: Award, title: 'Seguridad', description: 'Siempre lo primero. Priorizamos la calidad de nuestros productos para asegurar el bienestar de las personas.' },
    { icon: Heart, title: 'Compromiso', description: 'Cumplir en todo momento para lograr la confianza de nuestros clientes.' },
    { icon: Zap, title: 'Servicio', description: 'Entregar la mejor atención y rapidez para garantizar la plena satisfacción de quienes confían en nuestra empresa.' },
    { icon: Users, title: 'Trabajo en equipo', description: 'Para responder con la mayor rapidez a las necesidades y requerimientos de nuestros clientes.' },
    { icon: Users, title: 'Excelencia e Innovación', description: 'Para ser competitivos en un mercado que exige productos de calidad, atención personalizada y un servicio de asesoramiento permanente' },
  ];

  return (
    <div className="min-h-screen bg-[#fefefe]">
      {/* Hero con Video de fondo */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden bg-[#1c4421]">
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/clip.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>

        {/* Overlay oscuro para asegurar que el texto sea legible */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-[#fefefe] mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-[#d4a373] font-medium">Más de 20 años construyendo confianza</p>
        </div>
      </div>

      {/* Historia */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#1c4421]">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p><strong>Madernoa</strong> es una empresa radicada en San Miguel de Tucumán , desde el año 1991.</p>

<p>Desde sus comienzos hasta la actualidad nuestro objetivo fue el servicio y asesoramiento al cliente , Carpinteros , Profesionales de la Arquitectura , Empresas constructoras y particulares en general, quienes encuentran en nuestra empresa todo lo necesario en maderas, machimbres, herrajes, placas, lustres y maderas de obras varias, para desarrollar en el mas alto rendimiento, todo sus proyectos en excelencia y calidad .</p>

<p>Comercializamos productos de primera calidad y marcas de vanguardia, colaborando en la conservación del medio ambiente, la forestación y la naturaleza para mantener el equilibrio ecológico necesario.</p>

<p><strong>Nuestra visión:</strong> Contribuir a mejorar la vida de las personas, su bienestar, entregando los mejores productos y servicios para enfrentar cualquier tipo de  desafíos que nos presenta nuestra tierra.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="./modelos/image_05.png" alt="Madera" className="rounded-2xl shadow-lg" />
              <img src="./modelos/image_01.png" alt="Almacén" className="rounded-2x1 shadow-lg mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Valores - Usando tu paleta nueva */}
      <section className="py-10 bg-[#f4f4f2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-[#1c4421]/10 text-center hover:border-[#d4a373] transition-colors">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#1c4421] rounded-full mb-4">
                  <v.icon className="w-7 h-7 text-[#d4a373]" />
                </div>
                <h3 className="text-xl font-bold text-[#1c4421] mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}