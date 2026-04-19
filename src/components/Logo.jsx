export default function Logo({ className = 'w-10 h-10', textClass = '' }) {
  return (
    <div className={`flex items-center gap-2.5 ${textClass}`}>
      <svg
        className={className}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Soluciones Integrales RQ logo"
      >
        <path
          d="M20 2 L35.56 11 L35.56 29 L20 38 L4.44 29 L4.44 11 Z"
          fill="url(#hex-gradient)"
        />
        <path
          d="M20 6 L32.5 13 L32.5 27 L20 34 L7.5 27 L7.5 13 Z"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
        />
        <path
          d="M22.5 8 L14 21.5 L20.5 21.5 L17.5 32 L26 18.5 L19.5 18.5 Z"
          fill="white"
        />
        <defs>
          <linearGradient id="hex-gradient" x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
      </svg>

      <div className="leading-tight">
        <span className="block font-extrabold text-base tracking-tight">Soluciones RQ</span>
        <span className="block text-[10px] font-medium tracking-widest uppercase opacity-70">Integrales</span>
      </div>
    </div>
  )
}

export function LogoIcon({ className = 'w-8 h-8' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 2 L35.56 11 L35.56 29 L20 38 L4.44 29 L4.44 11 Z"
        fill="url(#hex-g2)"
      />
      <path
        d="M20 6 L32.5 13 L32.5 27 L20 34 L7.5 27 L7.5 13 Z"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />
      <path
        d="M22.5 8 L14 21.5 L20.5 21.5 L17.5 32 L26 18.5 L19.5 18.5 Z"
        fill="white"
      />
      <defs>
        <linearGradient id="hex-g2" x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
    </svg>
  )
}
