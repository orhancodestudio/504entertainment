import { artists } from "../data/artists";
import { Card } from "./ui/Card";
import { Eyebrow } from "./ui/Eyebrow";

export function Videos() {
  return (
    <section
      id="klipler"
      className="relative scroll-mt-24 py-28 md:py-36 border-t border-border"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <Eyebrow className="mb-5">Görsel Üretim</Eyebrow>
            <h2 className="font-display font-black uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.5rem,5.5vw,5rem)]">
              Klipler & Video İçerikler
            </h2>
          </div>
          <p className="max-w-md text-foreground/70 leading-relaxed">
            Sanatçılarımızın klipleri, performansları ve stüdyo süreçlerinden
            seçkiler.
          </p>
        </div>

        <div className="space-y-16">
          {artists.map((artist) => (
            <div key={artist.slug}>
              <div className="flex items-baseline justify-between mb-6 gap-4 flex-wrap">
                <div className="flex items-baseline gap-4">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: artist.accent }}
                  />
                  <h3 className="font-display font-black uppercase tracking-[-0.02em] leading-[0.95] text-3xl md:text-4xl">
                    {artist.name}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.3em] text-foreground/55">
                    {artist.role}
                  </span>
                </div>
                <a
                  href={`#sanatci-${artist.slug}`}
                  className="text-sm text-brand-bright hover:text-white transition"
                >
                  Sanatçı sayfası →
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {artist.videos.map((video, i) => (
                  <VideoCard
                    key={i}
                    title={video.title}
                    year={video.year}
                    accent={video.thumbAccent}
                    artist={artist.name}
                    index={i + 1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  title,
  year,
  accent,
  artist,
  index,
}: {
  title: string;
  year: string;
  accent: string;
  artist: string;
  index: number;
}) {
  return (
    <Card className="overflow-hidden group cursor-pointer">
      <div
        className="relative aspect-video w-full overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${accent}55, #0a0a12 70%)`,
        }}
      >
        <div className="absolute inset-0 starfield opacity-30" aria-hidden />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: `radial-gradient(circle at 30% 40%, ${accent}66, transparent 60%)`,
          }}
          aria-hidden
        />
        <div className="absolute top-0 left-0 right-0 h-3 flex">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 border-r border-black/30"
              style={{ background: i % 2 === 0 ? "#000" : "transparent" }}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-3 flex">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 border-r border-black/30"
              style={{ background: i % 2 === 0 ? "#000" : "transparent" }}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/95 text-black flex items-center justify-center shadow-2xl shadow-black/50 group-hover:scale-110 transition-transform">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <div className="absolute top-5 left-5 right-5 flex justify-between items-start text-[0.7rem] uppercase tracking-widest text-white/80">
          <span>{artist}</span>
          <span>#{String(index).padStart(2, "0")}</span>
        </div>
      </div>
      <div className="p-5 flex items-center justify-between">
        <div>
          <div className="font-bold text-white">{title}</div>
          <div className="text-xs text-foreground/55 mt-0.5">{year}</div>
        </div>
        <span
          className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-foreground/70 group-hover:border-brand-bright group-hover:text-brand-bright transition"
          aria-hidden
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Card>
  );
}
