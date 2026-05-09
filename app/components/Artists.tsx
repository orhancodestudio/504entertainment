import { artists, type Artist } from "../data/artists";
import { Card } from "./ui/Card";
import { Eyebrow } from "./ui/Eyebrow";

export function Artists() {
  return (
    <section
      id="sanatcilar"
      className="relative scroll-mt-24 py-28 md:py-36 border-t border-border"
    >
      <div
        className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand-deep/40 blur-[160px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <Eyebrow className="mb-5">Roster</Eyebrow>
            <h2 className="font-display font-black uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.5rem,5.5vw,5rem)]">
              Sanatçılarımız
            </h2>
          </div>
          <p className="max-w-md text-foreground/70 leading-relaxed">
            Kendi sesini ve hikâyesini bulmaya odaklanmış üç sanatçı. Üç farklı
            tavır, tek bir üretim kültürü.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {artists.map((artist, i) => (
            <ArtistRow key={artist.slug} artist={artist} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArtistRow({ artist, index }: { artist: Artist; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <article
      id={`sanatci-${artist.slug}`}
      className={`scroll-mt-24 grid md:grid-cols-12 gap-6 md:gap-10 items-stretch ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="md:col-span-5 relative">
        <div
          className="aspect-[4/5] w-full rounded-2xl border border-border overflow-hidden relative"
          style={{
            background: `radial-gradient(circle at 30% 25%, ${artist.accent}55, transparent 55%), radial-gradient(circle at 75% 80%, ${artist.accent}33, transparent 60%), #0a0a12`,
          }}
        >
          <div className="absolute inset-0 starfield opacity-40" aria-hidden />
          <div
            className="absolute -top-10 -right-10 w-72 h-72 rounded-full blur-3xl opacity-50"
            style={{ background: artist.accent }}
            aria-hidden
          />

          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.3em] text-white/70">
                504 / {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-white/70">
                {artist.role}
              </span>
            </div>

            <div className="flex items-end justify-between">
              <div
                className="font-display font-black uppercase tracking-[-0.02em] leading-[0.85] text-white text-[clamp(4rem,12vw,9rem)]"
                style={{ textShadow: `0 0 40px ${artist.accent}80` }}
              >
                {artist.initials}
              </div>
              <div className="text-right">
                <div className="text-[0.7rem] uppercase tracking-widest text-white/55">
                  Doğum / Şehir
                </div>
                <div className="font-mono text-sm text-white/85 mt-1">
                  {artist.born} · {artist.city}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card className="md:col-span-7 p-6 md:p-10 flex flex-col">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h3 className="font-display font-black uppercase tracking-[-0.02em] leading-none text-[clamp(2.5rem,5vw,4.5rem)]">
            {artist.name}
          </h3>
          <span className="text-sm md:text-base text-brand-bright font-semibold tracking-wide">
            {artist.role}
          </span>
        </div>
        <p className="mt-3 text-foreground/70 italic">“{artist.tagline}”</p>

        <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
          {artist.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-7 grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-brand/35 bg-brand/5 p-4">
            <div className="text-xs uppercase tracking-widest text-brand-bright">
              Öne Çıkan
            </div>
            <div className="mt-1 font-bold text-white text-lg">
              {artist.featured.title}
            </div>
            <div className="text-xs text-foreground/65 mt-0.5">
              {artist.featured.type} · {artist.featured.year}
            </div>
          </div>
          <div className="rounded-xl border border-border p-4">
            <div className="text-xs uppercase tracking-widest text-foreground/55">
              Profil
            </div>
            <div className="mt-1 font-bold text-white text-lg">
              {artist.born} · {artist.city}
            </div>
            <div className="text-xs text-foreground/65 mt-0.5">{artist.role}</div>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {artist.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground/85 hover:text-white hover:border-brand-bright/60 hover:bg-brand/10 transition"
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: artist.accent }}
              />
              {s.label}
            </a>
          ))}
        </div>
      </Card>
    </article>
  );
}
