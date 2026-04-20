import { useEffect, useRef } from 'react'
import { waLink } from '../App'

const products = [
  {
    title: 'Supresores Citel',
    description: 'Marca líder mundial en protección contra sobretensiones. Para uso doméstico, comercial e industrial.',
    tags: ['Marca Citel', 'Doméstico', 'Comercial', 'Industrial'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Materiales Eléctricos',
    description: 'Cables, tuberías, cajas eléctricas, breakers y tomacorrientes para instalaciones seguras.',
    tags: ['Cables', 'Breakers', 'Tomacorrientes'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.653-4.655m5.397-5.621a3 3 0 00-1.38 5.397" />
      </svg>
    ),
  },
  {
    title: 'Suministros Generales',
    description: 'Herramientas, accesorios y suministros complementarios para profesionales y particulares.',
    tags: ['Herramientas', 'Accesorios', 'Varios'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Protección Eléctrica',
    description: 'UPS y reguladores de voltaje para garantizar continuidad operativa y seguridad.',
    tags: ['UPS', 'Reguladores', 'Seguridad'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

export default function Products() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.card-animate') ?? []
    cards.forEach(el => { el.style.opacity = '0' })
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cards.forEach((el, i) => {
            el.style.animationDelay = `${i * 0.08}s`
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
    <section id="productos" className="py-28 bg-white border-t border-gray-100" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-0.5 bg-[#F47421]" />
          <span className="text-[11px] tracking-[0.28em] uppercase text-[#F47421] font-medium">Productos</span>
        </div>
        <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-16">Lo que ofrecemos</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 rounded-2xl overflow-hidden">
          {products.map((p, i) => (
            <div
              key={p.title}
              className="card-animate bg-white p-8 flex flex-col gap-5 hover:bg-orange-50/40 transition-colors duration-200 group"
            >
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-lg bg-[#F47421]/10 text-[#F47421] flex items-center justify-center">
                  {p.icon}
                </div>
                <span className="text-3xl font-black text-gray-100 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-1.5">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.tags.map(t => (
                  <span key={t} className="text-xs text-[#F47421] bg-[#F47421]/8 px-2.5 py-0.5 rounded-full font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-[#F47421] flex items-center gap-1 transition-colors w-fit"
              >
                Consultar
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
