import { waLink } from '../App'

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen relative flex flex-col justify-center bg-white overflow-hidden pt-16">
      {/* Giant RQ watermark */}
      <span className="pointer-events-none select-none absolute right-0 bottom-0 text-[38vw] font-black leading-none text-gray-900/[0.025] translate-x-[10%] translate-y-[5%]">
        RQ
      </span>

      <div className="relative max-w-5xl mx-auto px-6 py-24 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-0.5 bg-[#F47421]" />
          <span className="text-[11px] tracking-[0.28em] uppercase text-gray-400 font-medium">
            Distribuidores Citel · Costa Rica
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(3.2rem,9vw,7.5rem)] font-black text-gray-900 leading-[0.88] tracking-tight mb-8">
          Protección<br />
          <span className="text-[#F47421]">eléctrica</span><br />
          de confianza.
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 text-lg leading-relaxed max-w-lg mb-12">
          Especialistas en supresores de voltaje Citel y materiales eléctricos
          para hogares, comercios e industrias en Costa Rica.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors"
          >
            <WAIcon />
            Contactar por WhatsApp
          </a>
          <a
            href="#productos"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 font-medium text-sm px-7 py-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-colors"
          >
            Ver productos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-wrap gap-10">
          {[
            { value: '+40', label: 'Años marca Citel' },
            { value: 'Todo CR', label: 'Cobertura nacional' },
            { value: 'Inmediato', label: 'Respuesta WhatsApp' },
          ].map(s => (
            <div key={s.label}>
              <p className="text-xl font-black text-gray-900">{s.value}</p>
              <p className="text-[11px] text-gray-400 uppercase tracking-widest mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WAIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
