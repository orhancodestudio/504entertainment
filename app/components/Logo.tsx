type LogoProps = {
  size?: number;
  withText?: boolean;
  className?: string;
};

export function Logo({ size = 44, withText = true, className }: LogoProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 ${className ?? ""}`}
      aria-label="504 Entertainment"
    >
      <LogoMark size={size} />
      {withText && (
        <span className="font-display font-black uppercase tracking-[0.18em] leading-none whitespace-nowrap text-[1.05rem]">
          504<span className="text-brand-bright"> ENTERTAINMENT</span>
        </span>
      )}
    </div>
  );
}

export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="504 Music"
      className="animate-flash"
    >
      <defs>
        <radialGradient id="lg-sky" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#1a0b34" />
          <stop offset="60%" stopColor="#0a0413" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        <linearGradient id="lg-bolt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a866ff" />
          <stop offset="55%" stopColor="#682baf" />
          <stop offset="100%" stopColor="#3a1466" />
        </linearGradient>
        <filter id="lg-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Sky disk */}
      <circle cx="60" cy="60" r="58" fill="url(#lg-sky)" />
      <circle cx="60" cy="60" r="58" fill="none" stroke="rgba(138,72,214,0.45)" strokeWidth="1.2" />

      {/* Stars */}
      <g fill="#ffffff" opacity="0.85">
        <circle cx="28" cy="32" r="0.9" />
        <circle cx="92" cy="40" r="0.7" />
        <circle cx="40" cy="22" r="0.6" />
        <circle cx="80" cy="22" r="0.8" />
        <circle cx="100" cy="68" r="0.7" />
        <circle cx="22" cy="78" r="0.7" />
        <circle cx="48" cy="92" r="0.6" />
        <circle cx="86" cy="96" r="0.8" />
      </g>

      {/* Lightning bolt */}
      <path
        d="M64 14 L36 64 L54 64 L46 102 L84 50 L66 50 L74 14 Z"
        fill="url(#lg-bolt)"
        filter="url(#lg-glow)"
      />
      <path
        d="M64 14 L36 64 L54 64 L46 102 L84 50 L66 50 L74 14 Z"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.55"
        strokeWidth="0.8"
      />
    </svg>
  );
}

export function LogoFull({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 200"
      className={className}
      role="img"
      aria-label="504 Music"
    >
      <defs>
        <radialGradient id="hero-sky" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#220c44" />
          <stop offset="55%" stopColor="#0a0413" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        <linearGradient id="hero-bolt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b88aff" />
          <stop offset="55%" stopColor="#8a48d6" />
          <stop offset="100%" stopColor="#3a1466" />
        </linearGradient>
        <filter id="hero-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="520" height="200" fill="url(#hero-sky)" rx="20" />

      <g fill="#ffffff">
        <circle cx="40" cy="36" r="1" opacity="0.8" />
        <circle cx="120" cy="22" r="0.7" opacity="0.6" />
        <circle cx="200" cy="48" r="0.9" opacity="0.7" />
        <circle cx="300" cy="30" r="0.8" opacity="0.7" />
        <circle cx="380" cy="48" r="0.7" opacity="0.6" />
        <circle cx="460" cy="28" r="1" opacity="0.8" />
        <circle cx="80" cy="170" r="0.8" opacity="0.6" />
        <circle cx="220" cy="180" r="0.7" opacity="0.5" />
        <circle cx="350" cy="170" r="0.9" opacity="0.7" />
        <circle cx="490" cy="158" r="0.7" opacity="0.6" />
      </g>

      {/* Big lightning bolt centered */}
      <path
        d="M275 18 L195 110 L240 110 L218 184 L320 86 L272 86 L296 18 Z"
        fill="url(#hero-bolt)"
        filter="url(#hero-glow)"
      />
      <path
        d="M275 18 L195 110 L240 110 L218 184 L320 86 L272 86 L296 18 Z"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.6"
        strokeWidth="1.1"
      />

      {/* 504 MUSIC text */}
      <text
        x="50%"
        y="58%"
        textAnchor="middle"
        fontFamily="var(--font-display), Impact, sans-serif"
        fontSize="46"
        letterSpacing="6"
        fill="#ffffff"
        opacity="0.96"
      >
        504 MUSIC
      </text>
    </svg>
  );
}
