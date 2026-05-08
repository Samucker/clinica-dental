import useAnimacion from "../hooks/useAnimacion"

export default function Contacto() {
  const [refIzq, visibleIzq] = useAnimacion()
  const [refDer, visibleDer] = useAnimacion()

  return (
    <section id="contacto" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Texto izquierda — entra desde la izquierda */}
        <div ref={refIzq} className={`flex flex-col gap-6 transition-all duration-700 ${
          visibleIzq ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}>
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            Estamos para ti
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Agenda tu cita hoy
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Escríbenos por WhatsApp y te respondemos en minutos. También puedes llamarnos o visitarnos directamente en nuestro consultorio en Caracas.
          </p>
          <div className="flex flex-col gap-4 mt-2">
            {[
              { icono: "📱", titulo: "WhatsApp", detalle: "+58 412-123-4567" },
              { icono: "📍", titulo: "Dirección", detalle: "Av. Principal, Chacaíto, Caracas" },
              { icono: "🕐", titulo: "Horario", detalle: "Lunes a Viernes 8am – 6pm · Sábados 8am – 1pm" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-full p-3 text-xl">{item.icono}</div>
                <div>
                  <p className="font-bold text-gray-900">{item.titulo}</p>
                  <p className="text-gray-500 text-sm">{item.detalle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card derecha — entra desde la derecha */}
        <div ref={refDer} className={`bg-blue-50 rounded-3xl p-10 flex flex-col gap-6 items-center text-center transition-all duration-700 delay-200 ${
          visibleDer ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
        }`}>
          <span className="text-6xl">💬</span>
          <h3 className="text-2xl font-extrabold text-gray-900">
            ¿Listo para tu primera cita?
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Haz clic en el botón y cuéntanos qué necesitas. Te asignamos un horario en menos de 10 minutos.
          </p>
          
          <a
            href="https://wa.me/584121234567?text=Hola,%20quiero%20agendar%20una%20cita%20dental"
            target="_blank"
            className="bg-green-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition shadow-lg w-full text-center"
            rel="noopener noreferrer"
          >
            💬 Escribir por WhatsApp
          </a>
          <p className="text-gray-400 text-xs">
            Respuesta garantizada en menos de 10 minutos en horario de atención
          </p>
        </div>

      </div>
    </section>
  )
}