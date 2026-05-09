import { Eyebrow } from "./ui/Eyebrow";

const items = [
  { caption: "Stüdyo · Live Tracking", tag: "Studio", h: "tall" },
  { caption: "Backstage · Soundcheck", tag: "Backstage", h: "wide" },
  { caption: "Klip Çekimi · Set", tag: "Visual", h: "short" },
  { caption: "Mixing Session", tag: "Studio", h: "short" },
  { caption: "Behind the Scenes", tag: "Backstage", h: "tall" },
  { caption: "Cover Shoot", tag: "Visual", h: "wide" },
  { caption: "Late Night Session", tag: "Studio", h: "wide" },
  { caption: "Crew Meeting", tag: "Team", h: "short" },
] as const;

const heights: Record<(typeof items)[number]["h"], string> = {
  tall: "row-span-2 aspect-[3/4]",
  wide: "aspect-[16/10]",
  short: "aspect-square",
};

const palette = [
  ["#682baf", "#1a0b34"],
  ["#8a48d6", "#0a0413"],
  ["#3a1466", "#000"],
  ["#a866ff", "#1a0b34"],
  ["#682baf", "#0a0413"],
  ["#3a1466", "#1a0b34"],
  ["#8a48d6", "#0a0413"],
  ["#682baf", "#000"],
];

export function Gallery() {
  return (
    <section
      id="galeri"
      className="relative scroll-mt-24 py-28 md:py-36 border-t border-border overflow-hidden"
    >
      <div
        className="absolute -left-32 -top-20 h-[500px] w-[500px] rounded-full bg-brand/15 blur-[160px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <Eyebrow className="mb-5">Galeri</Eyebrow>
            <h2 className="font-display font-black uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.5rem,5.5vw,5rem)]">
              Stüdyo & Backstage
            </h2>
          </div>
          <p className="max-w-md text-foreground/70 leading-relaxed">
            Üretim sürecinden, stüdyodan ve sahne arkasından kareler. Müziğin
            yapıldığı dünyaya kısa bir bakış.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {items.map((item, i) => {
            const [from, to] = palette[i % palette.length];
            return (
              <figure
                key={i}
                className={`relative overflow-hidden rounded-2xl border border-border group ${
                  item.h === "tall" ? "row-span-2" : ""
                } ${item.h === "wide" ? "col-span-2" : ""}`}
                style={{
                  background: `linear-gradient(135deg, ${from}, ${to})`,
                }}
              >
                <div className="absolute inset-0 starfield opacity-30" aria-hidden />
                <div
                  className="absolute inset-0 opacity-60 group-hover:opacity-90 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${from}88, transparent 60%)`,
                  }}
                  aria-hidden
                />

                <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5">
                  <span className="self-start px-2.5 py-1 rounded-full bg-black/55 backdrop-blur text-[0.65rem] uppercase tracking-widest text-white/85 border border-white/10">
                    {item.tag}
                  </span>
                  <figcaption className="text-white font-semibold text-sm md:text-base translate-y-1 group-hover:translate-y-0 transition-transform">
                    {item.caption}
                  </figcaption>
                </div>

                <div className="absolute inset-0 ring-0 group-hover:ring-2 group-hover:ring-brand-bright/60 rounded-2xl transition-all" />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
