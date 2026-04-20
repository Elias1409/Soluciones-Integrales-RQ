import { useEffect, useRef } from 'react'

const reasons = [
  { title: 'Distribuidores Citel',  desc: 'Marca francesa líder mundial en supresores de voltaje con más de 40 años de trayectoria.' },
  { title: 'Servicio Confiable',    desc: 'Años de experiencia en el mercado eléctrico costarricense. Negocio serio y comprometido.' },
  { title: 'Respuesta Rápida',      desc: 'Atendemos consultas por WhatsApp de forma inmediata. Tu tiempo es valioso.' },
  { title: 'Precios Competitivos',  desc: 'Los mejores precios del mercado sin comprometer la calidad. Cotización sin compromiso.' },
  { title: 'Asesoría Personalizada',desc: 'Te ayudamos a elegir el producto correcto para tu necesidad específica.' },
  { title: 'Cobertura Nacional',    desc: 'Atendemos clientes en todo Costa Rica con opciones de envío y retiro.' },
]

export default function WhyUs() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.why-item') ?? []
    items.forEach(el => { el.style.opacity = '0' })
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            el.style.animationDelay = `${i * 0.07}s`
            el.style.opacity = ''
            el.classList.add('fade-up')
          })
          observer.disconnect()
        }
      })
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="por-que-nosotros" className="py-28 bg-[#FAFAF9] border-t border-gray-100" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-20 items-start">
          {/* Left — sticky heading */}
          <div className="mb-14 lg:mb-0 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#F47421]" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-[#F47421] font-medium">Por qué nosotros</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-tight">
              ¿Por qué<br />elegirnos?
            </h2>
          </div>

          {/* Right — grid of reasons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {reasons.map((r, i) => (
              <div key={r.title} className="why-item">
                <span className="text-[11px] font-mono font-bold text-[#F47421] block mb-2">
                  {String(i + 1).padStart(2, '0')} /
                </span>
                <h3 className="font-bold text-gray-900 mb-1.5">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
