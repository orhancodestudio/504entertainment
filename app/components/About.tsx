import { Card } from "./ui/Card";
import { Eyebrow } from "./ui/Eyebrow";

export function About() {
  return (
    <section
      id="hakkimizda"
      className="relative scroll-mt-24 py-28 md:py-36 overflow-hidden"
    >
      <div
        className="absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-brand/20 blur-[140px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Eyebrow className="mb-5">Hakkımızda</Eyebrow>
            <h2 className="font-display font-black uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.5rem,5.5vw,5rem)]">
              Müzik ve görseli
              <br />
              tek bir <span className="text-brand-bright">kültürde</span>
              <br />
              birleştiriyoruz.
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-3">
              <Stat label="Kuruluş" value="2025" />
              <Stat label="Şehir" value="İstanbul" />
              <Stat label="Bölge" value="Küçükçekmece" />
              <Stat label="Tip" value="Bağımsız" />
            </div>
          </div>

          <div className="md:col-span-7 md:pl-10">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
              <span className="text-white font-semibold">2025 yılında</span>{" "}
              İstanbul Küçükçekmece merkezli kurulan{" "}
              <span className="text-brand-bright font-semibold">
                504 Entertainment
              </span>
              , müzik ve görsel üretim odağında ilerleyen bağımsız bir müzik
              yapım şirketidir.
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/70">
              Kendi tarzını ve üretim anlayışını oluşturmaya odaklanan 504;
              sanatçı gelişimi, müzik ve görsel dünyayı tek bir kültürde
              birleştirerek özgün işler üretmeyi hedeflemektedir. Yeniliğe açık
              yapısıyla birlikte sürekli gelişen ve kendi çizgisini oluşturmaya
              çalışan ekip, uzun vadeli bir üretim kültürü kurmayı amaçlamaktadır.
            </p>

            <div className="mt-10 p-6 md:p-8 rounded-2xl border border-brand/40 bg-gradient-to-br from-brand/10 to-transparent">
              <p className="text-base md:text-lg leading-relaxed text-foreground/85">
                <span className="text-brand-bright font-semibold">
                  504 Entertainment
                </span>
                , yalnızca müzik yayınlayan bir ekip değil; kendi dünyasını
                oluşturmaya çalışan bağımsız bir{" "}
                <span className="text-white font-semibold">üretim kültürüdür</span>.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              <Pillar
                title="Sanatçı Gelişimi"
                desc="Her sanatçının kendi sesini ve hikâyesini bulması için uzun vadeli üretim alanı."
              />
              <Pillar
                title="Görsel Dil"
                desc="Müziği tamamlayan, kendine has bir görsel kültür ve estetik yaklaşım."
              />
              <Pillar
                title="Bağımsız Üretim"
                desc="Trendlere değil, kendi çizgimize sadık kalan bir üretim modeli."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <Card className="p-4">
      <div className="text-[0.7rem] uppercase tracking-widest text-foreground/55">
        {label}
      </div>
      <div className="mt-1 font-display font-black uppercase tracking-[-0.02em] leading-[0.95] text-2xl">
        {value}
      </div>
    </Card>
  );
}

function Pillar({ title, desc }: { title: string; desc: string }) {
  return (
    <Card className="p-5">
      <div className="w-9 h-9 rounded-lg bg-brand/15 border border-brand/40 flex items-center justify-center mb-3">
        <span className="text-brand-bright text-base">★</span>
      </div>
      <h3 className="font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/70">{desc}</p>
    </Card>
  );
}
