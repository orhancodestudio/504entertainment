import { LogoFull } from "./Logo";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Eyebrow } from "./ui/Eyebrow";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden min-h-[100svh] flex items-center bg-grain"
    >
      <div className="absolute inset-0 starfield opacity-70" aria-hidden />
      <div className="brand-glow opacity-90" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 pt-32 pb-24 md:pt-36 md:pb-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-7">
            <Eyebrow>İstanbul · Est. 2025</Eyebrow>
            <h1 className="mt-6 font-display font-black uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(3rem,8.5vw,7.5rem)]">
              Bağımsız bir
              <br />
              <span className="bg-gradient-to-r from-white via-[#d6b8ff] to-[#8a48d6] bg-clip-text text-transparent">
                üretim kültürü
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-foreground/75 leading-relaxed">
              504 Entertainment, müzik ve görsel üretimi tek bir kültürde
              birleştirerek özgün işler üreten bağımsız bir müzik yapım
              şirketidir. Sanatçı gelişimi ve uzun vadeli üretim odağında.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="#sanatcilar">
                Sanatçıları Keşfet
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
              <Button href="#klipler" variant="ghost">
                Son Klipler
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-3 max-w-md gap-6">
              <div>
                <dt className="text-xs uppercase tracking-widest text-foreground/55">
                  Sanatçı
                </dt>
                <dd className="mt-1 font-display font-black uppercase tracking-[-0.02em] leading-[0.95] text-3xl text-white">
                  03
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-foreground/55">
                  Kuruluş
                </dt>
                <dd className="mt-1 font-display font-black uppercase tracking-[-0.02em] leading-[0.95] text-3xl text-white">
                  2025
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-foreground/55">
                  Merkez
                </dt>
                <dd className="mt-1 font-display font-black uppercase tracking-[-0.02em] leading-[0.95] text-3xl text-white">
                  İST
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-5 relative">
            <div className="relative animate-float-slow">
              <div
                className="absolute -inset-12 bg-brand/30 blur-3xl rounded-full"
                aria-hidden
              />
              <LogoFull className="relative w-full h-auto rounded-3xl border border-border shadow-[0_30px_80px_-20px_rgba(104,43,175,0.55)]" />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <Card className="p-4">
                <div className="text-foreground/60 text-xs uppercase tracking-widest">
                  Stüdyo
                </div>
                <div className="mt-1 font-semibold">Küçükçekmece, İstanbul</div>
              </Card>
              <Card className="p-4">
                <div className="text-foreground/60 text-xs uppercase tracking-widest">
                  Odak
                </div>
                <div className="mt-1 font-semibold">Müzik & Görsel Üretim</div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 inset-x-0 overflow-hidden opacity-70 pointer-events-none">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap text-sm uppercase tracking-[0.4em] text-foreground/40">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12">
              <span>504 Entertainment</span>
              <span>★</span>
              <span>Tuco</span>
              <span>★</span>
              <span>Noire</span>
              <span>★</span>
              <span>Kahn</span>
              <span>★</span>
              <span>İstanbul · 2025</span>
              <span>★</span>
              <span>Bağımsız Üretim Kültürü</span>
              <span>★</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
