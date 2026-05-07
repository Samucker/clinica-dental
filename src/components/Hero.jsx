import { useState, useEffect } from "react"

const slides = [
  {
    imagen: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1400&q=80",
    titulo: "Tu sonrisa merece",
    destacado: "el mejor cuidado",
    subtitulo: "Más de 10 años de experiencia. Atención moderna, precios accesibles y un equipo que te hace sentir en confianza."
  },
  {
    imagen: "https://images.unsplash.com/photo-1588776814546-1ffbb06a7a45?w=1400&q=80",
    titulo: "Tecnología dental",
    destacado: "de primer nivel",
    subtitulo: "Equipos modernos para diagnóstico preciso y tratamientos sin dolor. Tu comodidad es nuestra prioridad."
  },
  {
    imagen: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&q=80",
    titulo: "Toda la familia",
    destacado: "en un solo lugar",
    subtitulo: "Atendemos desde los más pequeños hasta los adultos mayores. Citas disponibles de lunes a sábado."
  }
]

export default function Hero() {
  const [actual, setActual] = useState(0)
  const [animando, setAnimando] = useState(false)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setAnimando(true)
      setTimeout(() => {
        setActual(prev => (prev + 1) % slides.length)
        setAnimando(false)
      }, 500)
    }, 5000)
    return () => clearInterval(intervalo)
  }, [])

  const irA = (i) => {
    setAnimando(true)
    setTimeout(() => {
      setActual(i)
      setAnimando(false)
    }, 300)
  }

  const slide = slides[actual]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Imagen de fondo con transición */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${animando ? "opacity-0" : "opacity-100"}`}
        style={{
          backgroundImage: `url(${slide.imagen})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl flex flex-col gap-6">

          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border border-white/30 text-white text-sm font-medium px-4 py-2 rounded-full w-fit">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Atendiendo pacientes hoy · Caracas
          </div>

          {/* Título */}
          <h1 className={`text-5xl md:text-6xl font-extrabold text-white leading-tight transition-all duration-500 ${animando ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
            {slide.titulo} <br />
            <span className="text-blue-400">{slide.destacado}</span>
          </h1>

          {/* Subtítulo */}
          <p className={`text-lg text-gray-200 leading-relaxed max-w-xl transition-all duration-500 delay-100 ${animando ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
            {slide.subtitulo}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="https://wa.me/584121234567?text=Hola,%20quiero%20agendar%20una%20cita"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-2xl text-center"
              rel="noopener noreferrer"
            >
              📅 Agendar cita ahora
            </a>
            <a
              href="#servicios"
              className="bg-white/15 backdrop-blur hover:bg-white/25 border border-white/40 text-white px-8 py-4 rounded-full font-semibold text-lg transition text-center"
            >
              Ver servicios →
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-4 pt-6 border-t border-white/20">
            {[
              { num: "+2.000", label: "Pacientes" },
              { num: "10+", label: "Años" },
              { num: "4.9⭐", label: "Valoración" }
            ].map((s, i) => (
              <div key={i}>
                <p className="text-2xl font-extrabold text-white">{s.num}</p>
                <p className="text-gray-300 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots navegación */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => irA(i)}
            className={`transition-all duration-300 rounded-full ${
              i === actual
                ? "w-8 h-3 bg-blue-400"
                : "w-3 h-3 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 z-10 hidden md:flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-white/70 h-4 animate-bounce" />
        </div>
      </div>

    </section>
  )
}