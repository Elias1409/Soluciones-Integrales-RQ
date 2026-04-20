import { waLink, WA_NUMBER } from '../App'

export default function Contact() {
  const displayNumber = WA_NUMBER.replace(/^506/, '+506 ')

  return (
    <section id="contacto" className="py-32 bg-[#1D3461] relative overflow-hidden border-t border-white/5">
      {/* Subtle brand mark */}
      <span className="pointer-events-none select-none absolute right-0 bottom-0 text-[28vw] font-black leading-none text-white/[0.03] translate-x-[8%] translate-y-[10%]">
        RQ
      </span>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-[#F47421]" />
          <span className="text-[11px] tracking-[0.28em] uppercase text-[#F47421] font-medium">Contacto</span>
          <div className="w-8 h-0.5 bg-[#F47421]" />
        </div>

        <h2 className="text-5xl sm:text-6xl font-black text-white leading-[0.9] tracking-tight mb-8">
          Hablemos<br />
          <span className="text-[#F47421]">hoy mismo.</span>
        </h2>

        <p className="text-white/50 text-lg mb-12">
          Cotizaciones, precios y asesoría sin compromiso.
        </p>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-9 py-4 rounded-xl transition-colors text-sm"
        >
          <WAIcon />
          Chatear por WhatsApp
        </a>

        <p className="mt-10 text-white/25 text-sm">
          {displayNumber} · Costa Rica
        </p>
      </div>
    </section>
  )
}

function WAIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
