import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CartSidebar() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, totalPrice } = useCart();

  // Función para generar el mensaje de WhatsApp y abrirlo
  const handleCheckout = () => {
    const phoneNumber = "5493815230075"; // Número de Madernoa
    
    let message = `¡Hola! Quiero realizar el siguiente pedido:\n\n`;
    
    items.forEach((item) => {
      message += `• ${item.name} (${item.measure || 'N/A'}): ${item.quantity} x $${item.price.toFixed(2)}\n`;
    });
    
    message += `\n*Total a pagar: $${totalPrice.toFixed(2)}*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Fondo oscuro (Overlay) */}
      <div
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-[#1c4421]">Carrito de Compras</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-[#1c4421]" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.measure}`} className="flex gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#1c4421] mb-1">{item.name}</h3>
                    {item.measure && (
                      <p className="text-xs text-gray-500 mb-2">{item.measure}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-7 h-7 flex items-center justify-center bg-white rounded hover:bg-gray-100 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center bg-white rounded hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm font-bold mt-2 text-[#1c4421]">
                      {(item.price * item.quantity).toFixed(2)}$
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-100 p-6 space-y-4 bg-gray-50">
            <div className="flex items-center justify-between text-xl font-bold text-[#1c4421]">
              <span>Total:</span>
              <span>{totalPrice.toFixed(2)}$</span>
            </div>
            
            <button 
              onClick={handleCheckout}
              className="w-full bg-[#1c4421] hover:bg-[#1c4421]/90 text-white py-4 rounded-xl transition-all font-bold shadow-lg shadow-[#1c4421]/20"
            >
              Finalizar Pedido por WhatsApp
            </button>
            
            <button 
              onClick={() => setIsCartOpen(false)}
              className="w-full border border-gray-300 hover:bg-gray-100 py-4 rounded-xl transition-colors font-medium text-[#1c4421]"
            >
              Continuar Comprando
            </button>
          </div>
        )}
      </div>
    </>
  );
}