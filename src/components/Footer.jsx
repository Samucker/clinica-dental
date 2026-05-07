export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Logo y descripción */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🦷</span>
              <span className="text-xl font-bold text-white">DentalCare</span>
              <span className="text-xl font-light text-gray-400">Caracas</span>
            </div>
            <p className="text-sm leading-relaxed">
              Más de 10 años cuidando la salud bucal de familias caraqueñas con calidad, confianza y precios accesibles.
            </p>
          </div>

          {/* Links rápidos */}
          <div className="flex flex-col gap-3">
            <p className="text-white font-bold mb-1">Navegación</p>
            <a href="#servicios" className="text-sm hover:text-white transition">Servicios</a>
            <a href="#nosotros" className="text-sm hover:text-white transition">Nosotros</a>
            <a href="#testimonios" className="text-sm hover:text-white transition">Testimonios</a>
            <a href="#contacto" className="text-sm hover:text-white transition">Contacto</a>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-3">
            <p className="text-white font-bold mb-1">Contacto</p>
            <p className="text-sm">📱 +58 412-123-4567</p>
            <p className="text-sm">📍 Chacaíto, Caracas</p>
            <p className="text-sm">🕐 Lun–Vie 8am–6pm · Sáb 8am–1pm</p>
            
            <a
              href="https://wa.me/584121234567"
              target="_blank"
              className="mt-2 bg-green-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition text-center"
              rel="noopener noreferrer"
            >
              Agendar por WhatsApp
            </a>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
          © 2025 DentalCare Caracas · Todos los derechos reservados
        </div>

      </div>
    </footer>
  )
}