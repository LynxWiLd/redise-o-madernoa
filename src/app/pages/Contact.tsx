import { useState } from 'react';
import { Button } from '../components/Button';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#fefefe]">
      {/* Header */}
      <div className="bg-[#1c4421] text-white py-16 mb-16 relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('./fondos/contact.png')] bg-cover bg-center opacity-20" />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-[#d4a373] text-lg font-medium">Estamos a tu disposición. Consúltanos lo que necesites.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: MapPin, title: 'Ubicación', text: 'Av. Juan B. Justo 1527, San Miguel de Tucumán' },
            { icon: Phone, title: 'Teléfonos', text: '+54 381 428 2087 / 428 3250' },
            { icon: Mail, title: 'Email', text: 'info@madernoa.com.ar' }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-[#1c4421]/10 p-8 text-center hover:border-[#d4a373] transition-all">
              <div className="w-14 h-14 bg-[#1c4421] rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-[#d4a373]" />
              </div>
              <h3 className="text-xl font-bold text-[#1c4421] mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#1c4421]/10 p-8">
            <h2 className="text-3xl font-bold mb-8 text-[#1c4421]">Envíanos un Mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4a373] outline-none" placeholder="Nombre completo" />
              <div className="grid md:grid-cols-2 gap-4">
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4a373] outline-none" placeholder="Tu email" />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4a373] outline-none" placeholder="Teléfono" />
              </div>
              <textarea name="message" required value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4a373] outline-none" placeholder="Tu mensaje..." />
              <Button type="submit" variant="primary" className="w-full py-4 bg-[#1c4421] hover:bg-[#1c4421]/90">Enviar Mensaje</Button>
            </form>
          </div>

          {/* Horarios y Info adicional */}
          <div className="space-y-8">
            <div className="bg-[#1c4421] text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#d4a373]">Horario de Atención</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3"><Clock className="text-[#d4a373]" /> Lunes a Viernes: 8:00 - 13:00 | 16:00 - 19:00</div>
                <div className="flex items-center gap-3"><Clock className="text-[#d4a373]" /> Sábados: <strong>Cerrado</strong></div>
                <div className="flex items-center gap-3"><Clock className="text-[#d4a373]" /> Domingo: <strong>Cerrado</strong></div>
              </div>
            </div>

            <div className="bg-[#d4a373]/10 rounded-2xl p-8 border border-[#d4a373]/20">
              <MessageCircle className="w-10 h-10 mb-4 text-[#1c4421]" />
              <h3 className="text-xl font-bold text-[#1c4421] mb-2">WhatsApp Directo</h3>
              <p className="text-gray-600 mb-4">Respuesta rápida a tus consultas comerciales.</p>
              <a href="https://wa.me/5493815230075" target="_blank" rel="noopener noreferrer" className="block text-center bg-[#1c4421] text-white py-3 rounded-xl font-bold hover:bg-[#1c4421]/90">
                Iniciar Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}