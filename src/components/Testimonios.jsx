const testimonios = [
  {
    nombre: "María González",
    cargo: "Paciente desde 2021",
    texto: "Llegué con mucho miedo porque tenía años sin ir al dentista. El equipo fue súper paciente conmigo y el resultado fue increíble. Ya agendé mi próxima cita.",
    avatar: "MG",
    color: "bg-blue-600"
  },
  {
    nombre: "Carlos Mendoza",
    cargo: "Paciente desde 2022",
    texto: "Me hicieron el blanqueamiento en una sola sesión. Pagué en dólares sin problema y el trato fue excelente. Lo recomiendo a toda mi familia.",
    avatar: "CM",
    color: "bg-emerald-600"
  },
  {
    nombre: "Luisa Ferreira",
    cargo: "Paciente desde 2023",
    texto: "Traje a mis dos hijos y los atendieron con mucha paciencia. El consultorio está limpio, moderno y el precio fue justo. Volvemos el mes que viene.",
    avatar: "LF",
    color: "bg-violet-600"
  }
]

const stats = [
  { num: "+2.000", label: "Pacientes atendidos" },
  { num: "10+", label: "Años de experiencia" },
  { num: "4.9/5", label: "Valoración Google" },
  { num: "98%", label: "Recomendarían la clínica" },
]

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Banda de stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <p className="text-3xl font-extrabold text-blue-700">{s.num}</p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            Lo que dicen nuestros pacientes
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
            Testimonios reales
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Más de 2.000 pacientes han confiado en nosotros. Estas son algunas de sus historias.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-5 border border-gray-100 hover:-translate-y-1"
            >
              {/* Estrellas */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Texto */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                "{t.texto}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`${t.color} w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.nombre}</p>
                  <p className="text-gray-400 text-xs">{t.cargo}</p>
                </div>
                <div className="ml-auto">
                  <svg className="w-5 h-5 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}