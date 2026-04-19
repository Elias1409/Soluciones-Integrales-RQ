import { useEffect, useRef } from 'react'

const reasons = [
  { title: 'Distribuidores Citel',     desc: 'Marca francesa líder mundial en supresores de voltaje con más de 40 años de trayectoria.' },
  { title: 'Servicio Confiable',        desc: 'Años de experiencia en el mercado eléctrico costarricense. Negocio serio y comprometido.' },
  { title: 'Respuesta Rápida',          desc: 'Atendemos consultas por WhatsApp de forma inmediata. Tu tiempo es valioso.' },
  { title: 'Precios Competitivos',      desc: 'Los mejores precios del mercado sin comprometer la calidad. Cotización sin compromiso.' },
  { title: 'Asesoría Personalizada',    desc: 'Te ayudamos a elegir el producto correcto para tu necesidad específica.' },
  { title: 'Cobertura Nacional',        desc: 'Atendemos clientes en todo Costa Rica con opciones de envío y retiro.' },
]

export default function WhyUs() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.why-item') ?? []
    // Set invisible via inline style so Tailwind class doesn't interfere
    items.forEach(el => { el.style.opacity = '0' })

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            items.forEach((el, i) => {
              el.style.animationDelay = `${i * 0.08}s`
              el.style.opacity = ''
              el.classList.add('fade-up')
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="por-que-nosotros" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Por qué nosotros</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">¿Por qué elegirnos?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="why-item bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-blue-200 text-xs font-mono font-bold mb-4 block">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-semibold text-gray-900 mb-2">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
