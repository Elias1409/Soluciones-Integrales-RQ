import { useEffect, useRef } from 'react'

const testimonials = [
  {
    name: 'Carlos Rodríguez',
    role: 'Electricista independiente',
    text: 'Excelente calidad en todos los materiales. Llevo más de 2 años comprando aquí y nunca me han fallado. Además los precios son muy competitivos.',
    rating: 5,
    avatar: 'CR',
  },
  {
    name: 'María Jiménez',
    role: 'Administradora de edificio',
    text: 'Muy buena atención por WhatsApp, responden rápido y me ayudan a identificar exactamente lo que necesito. El supresor de voltaje que compré funciona perfecto.',
    rating: 5,
    avatar: 'MJ',
  },
  {
    name: 'Andrés Mora',
    role: 'Contratista de construcción',
    text: 'Para mis proyectos de construcción siempre cuento con Soluciones RQ. Tienen todo lo que necesito y la entrega es confiable.',
    rating: 5,
    avatar: 'AM',
  },
]

const colors = ['bg-green-500', 'bg-blue-500', 'bg-purple-500']

export default function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.t-card').forEach((el, i) => {
              el.style.animationDelay = `${i * 0.15}s`
              el.classList.add('fade-up')
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Testimonios</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="t-card opacity-0 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <svg key={s} className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${colors[i]} flex items-center justify-center text-white font-bold text-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
