import useAnimacion from "../hooks/useAnimacion"

const servicios = [
  {
    imagen: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    titulo: "Limpieza Dental",
    descripcion: "Eliminamos sarro y placa bacteriana para mantener tu boca sana y tu aliento fresco.",
    precio: "Desde $25"
  },
  {
    imagen: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=800",
    titulo: "Blanqueamiento",
    descripcion: "Recupera el blanco natural de tus dientes con nuestro tratamiento profesional en una sola sesión.",
    precio: "Desde $60"
  },
  {
    imagen: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
    titulo: "Ortodoncia",
    descripcion: "Brackets metálicos y estéticos para corregir la posición de tus dientes con seguimiento mensual.",
    precio: "Desde $150"
  },
  {
    imagen: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80",
    titulo: "Sellantes y Resinas",
    descripcion: "Protegemos y restauramos tus dientes con materiales de alta durabilidad y acabado natural.",
    precio: "Desde $20"
  },
  {
    imagen: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
    titulo: "Extracciones",
    descripcion: "Procedimiento rápido y sin dolor con anestesia local. Incluye seguimiento postoperatorio.",
    precio: "Desde $30"
  },
  {
    imagen: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=600&q=80",
    titulo: "Odontopediatría",
    descripcion: "Atención especializada para niños en un ambiente amigable que elimina el miedo al dentista.",
    precio: "Desde $20"
  }
]

export default function Servicios() {
  const [refHeader, visibleHeader] = useAnimacion()

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div ref={refHeader} className={`text-center mb-16 transition-all duration-700 ${
          visibleHeader ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            Lo que ofrecemos
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
            Nuestros Servicios
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Atención integral para toda tu familia con tecnología moderna y precios en bolívares y dólares.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s, i) => {
            const [ref, visible] = useAnimacion()
            return (
              <div
                ref={ref}
                key={i}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <img
                  src={s.imagen}
                  alt={s.titulo}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-blue-700/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{s.titulo}</h3>
                    <span className="bg-white/20 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                      {s.precio}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold text-white mb-3">{s.titulo}</h3>
                  <p className="text-white/90 text-sm text-center leading-relaxed mb-4">{s.descripcion}</p>
                  
                  <a
                    href="https://wa.me/584121234567"
                    target="_blank"
                    className="bg-white text-blue-700 font-bold px-6 py-2 rounded-full text-sm hover:bg-blue-50 transition"
                  >
                    Consultar precio →
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${
          visibleHeader ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          
          <a
            href="https://wa.me/584121234567"
            target="_blank"
            className="bg-blue-700 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-800 transition shadow-lg inline-block"
          >
            Consultar disponibilidad por WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}