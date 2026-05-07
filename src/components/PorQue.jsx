const razones = [
  {
    icono: "📍",
    titulo: "Ubicados en Caracas",
    descripcion: "Consultorio accesible en zona céntrica, con estacionamiento disponible y fácil acceso en transporte público."
  },
  {
    icono: "💵",
    titulo: "Precios en dólares y bolívares",
    descripcion: "Aceptamos pago en efectivo, transferencia, Zelle y pago móvil. Sin excusas para cuidar tu salud bucal."
  },
  {
    icono: "🩺",
    titulo: "Equipo certificado",
    descripcion: "Todos nuestros odontólogos están certificados por la FCV con años de experiencia clínica comprobada."
  },
  {
    icono: "⚡",
    titulo: "Atención el mismo día",
    descripcion: "Citas de emergencia disponibles. Escríbenos por WhatsApp y te atendemos en el menor tiempo posible."
  }
]

export default function PorQue() {
  return (
    <section id="nosotros" className="py-24 bg-blue-700">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-200 font-semibold text-sm uppercase tracking-widest">
            Nuestra diferencia
          </span>
          <h2 className="text-4xl font-extrabold text-white mt-2">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-blue-100 mt-4 max-w-xl mx-auto">
            No somos la única clínica en Caracas, pero sí la que más se preocupa por tu experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {razones.map((r, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">{r.icono}</div>
              <h3 className="text-lg font-bold mb-2">{r.titulo}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{r.descripcion}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}