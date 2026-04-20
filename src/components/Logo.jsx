const BLUE   = '#29ABE2'
const NAVY   = '#1D3461'
const ORANGE = '#F47421'

function LogoSVG({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Soluciones Integrales RQ logo"
    >
      {/* Circle ring — two arcs with gaps where the bolt pierces */}
      <path
        d="M 47,47 A 75,75 0 0,1 173,116"
        stroke={BLUE} strokeWidth="16" strokeLinecap="round"
      />
      <path
        d="M 151,155 A 75,75 0 0,1 28,81"
        stroke={BLUE} strokeWidth="16" strokeLinecap="round"
      />

      {/* Lightning bolt — double-headed arrow, upper-left → lower-right */}
      <polygon
        points="35,18 106,48 105,92 148,102 165,182 88,148 89,104 46,94"
        fill={ORANGE}
      />

      {/* RQ */}
      <text
        x="100" y="117"
        textAnchor="middle"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="50"
        fill={NAVY}
      >RQ</text>
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
