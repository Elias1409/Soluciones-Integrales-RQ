const NAVY = '#1a3272'
const ORANGE = '#f5a623'

function LogoSVG({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Soluciones Integrales RQ logo"
    >
      {/* Circle ring */}
      <circle cx="50" cy="50" r="43" stroke={NAVY} strokeWidth="4.5" fill="none" />

      {/* Lightning bolt — upper arm (top-right → center) */}
      <polygon points="57,11 71,11 50,51 35,51" fill={NAVY} />

      {/* Lightning bolt — lower arm (center → bottom-left) */}
      <polygon points="50,49 65,49 43,91 27,91" fill={NAVY} />

      {/* Plug body */}
      <rect x="26" y="90" width="18" height="8" rx="2.5" fill={NAVY} />

      {/* Plug prongs */}
      <rect x="30"  y="97" width="4" height="7" rx="1.5" fill={NAVY} />
      <rect x="38"  y="97" width="4" height="7" rx="1.5" fill={NAVY} />

      {/* R letter */}
      <text
        x="54"
        y="68"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="47"
        fill={ORANGE}
      >
        R
      </text>
    </svg>
  )
}

export default function Logo({ className = 'w-10 h-10', textClass = '' }) {
  return (
    <div className={`flex items-center gap-2.5 ${textClass}`}>
      <LogoSVG className={className} />
      <div className="leading-tight">
        <span className="block font-extrabold text-base tracking-tight">Soluciones RQ</span>
        <span className="block text-[10px] font-medium tracking-widest uppercase opacity-70">Integrales</span>
      </div>
    </div>
  )
}

export function LogoIcon({ className = 'w-8 h-8' }) {
  return <LogoSVG className={className} />
}
