import { useState, useEffect } from "react"

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? "bg-white shadow-md py-3"
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🦷</span>
          <span className={`text-xl font-bold transition-colors duration-300 ${scrolled ? "text-blue-700" : "text-white"}`}>
            DentalCare
          </span>
          <span className={`text-xl font-light transition-colors duration-300 ${scrolled ? "text-gray-400" : "text-white/70"}`}>
            Caracas
          </span>
        </div>

        {/* Links escritorio */}
        <ul className="hidden md:flex gap-8 font-medium">
          {["Servicios", "Nosotros", "Testimonios", "Contacto"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`transition-colors duration-300 hover:text-blue-400 ${
                  scrolled ? "text-gray-600" : "text-white/90"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón CTA */}
        <a
          href="https://wa.me/584121234567"
          target="_blank"
          className={`hidden md:block px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
            scrolled
              ? "bg-blue-700 text-white hover:bg-blue-800"
              : "bg-white/20 backdrop-blur border border-white/40 text-white hover:bg-white/30"
          }`}
        >
          Agendar cita
        </a>

        {/* Hamburguesa móvil */}
        <button
          className={`md:hidden focus:outline-none transition-colors duration-300 ${scrolled ? "text-gray-600" : "text-white"}`}
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuAbierto
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 text-gray-600 font-medium">
          {["servicios", "nosotros", "testimonios", "contacto"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuAbierto(false)}
              className="capitalize hover:text-blue-700 transition"
            >
              {item}
            </a>
          ))}
          <a
            href="https://wa.me/584121234567"
            target="_blank"
            className="bg-blue-700 text-white px-5 py-2 rounded-full text-center font-semibold"
          >
            Agendar cita
          </a>
        </div>
      )}
    </nav>
  )
}