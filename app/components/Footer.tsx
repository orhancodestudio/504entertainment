export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border mt-10 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-bright/60 to-transparent"
        aria-hidden
      />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-brand/15 blur-[140px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <span className="font-display font-black uppercase tracking-[0.18em] leading-none whitespace-nowrap text-[1.25rem]">
              504<span className="text-brand-bright"> ENTERTAINMENT</span>
            </span>
            <p className="mt-5 text-foreground/65 max-w-sm leading-relaxed">
              Bağımsız bir müzik ve görsel üretim kültürü. İstanbul Küçükçekmece
              merkezli, 2025'te kuruldu.
            </p>
          </div>

          <FooterCol
            title="Site"
            links={[
              { label: "Hakkımızda", href: "#hakkimizda" },
              { label: "Sanatçılar", href: "#sanatcilar" },
              { label: "Klipler", href: "#klipler" },
              { label: "Galeri", href: "#galeri" },
              { label: "İletişim", href: "#iletisim" },
            ]}
          />
          <FooterCol
            title="Sanatçılar"
            links={[
              { label: "Tuco", href: "#sanatci-tuco" },
              { label: "Noire", href: "#sanatci-noire" },
              { label: "Kahn", href: "#sanatci-kahn" },
            ]}
          />
          <FooterCol
            title="İletişim"
            links={[
              { label: "info@504entertainment.com", href: "mailto:info@504entertainment.com" },
              { label: "demo@504entertainment.com", href: "mailto:demo@504entertainment.com" },
              { label: "Küçükçekmece, İstanbul", href: "#" },
            ]}
          />
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <div className="text-sm text-foreground/55">
            © {year} 504 Entertainment · Tüm hakları saklıdır.
          </div>
          <div className="text-sm">
            <span className="text-foreground/55">
              Orhan Ali Enuştekin tarafından geliştirilmiştir!
            </span>
          </div>
        </div>
      </div>

      <div className="relative px-5 pb-10 sm:px-8">
        <div
          className="font-display font-black uppercase tracking-[-0.02em] text-[clamp(4rem,18vw,16rem)] leading-none text-center bg-gradient-to-b from-white/15 to-transparent bg-clip-text text-transparent select-none"
          aria-hidden
        >
          504 ENTERTAINMENT
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="md:col-span-2">
      <div className="text-xs uppercase tracking-widest text-brand-bright mb-4">
        {title}
      </div>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-foreground/75 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
