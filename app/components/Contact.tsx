"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Eyebrow } from "./ui/Eyebrow";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <section
      id="iletisim"
      className="relative scroll-mt-24 py-28 md:py-36 border-t border-border overflow-hidden"
    >
      <div
        className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-brand/20 blur-[160px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Eyebrow className="mb-5">İletişim</Eyebrow>
          <h2 className="font-display font-black uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.5rem,5.5vw,5rem)]">
            Birlikte bir şey
            <br />
            üretelim mi?
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">
            Demo göndermek, iş birliği teklif etmek ya da basın iletişimi için
            buradan yazabilirsiniz. Tüm mesajları okuyoruz.
          </p>

          <div className="mt-10 space-y-4">
            <ContactItem
              label="E-posta"
              value="info@504entertainment.com"
              href="mailto:info@504entertainment.com"
            />
            <ContactItem
              label="Demo / A&R"
              value="demo@504entertainment.com"
              href="mailto:demo@504entertainment.com"
            />
            <ContactItem label="Konum" value="Küçükçekmece, İstanbul" />
            <ContactItem label="Sosyal" value="@504entertainment" href="#" />
          </div>
        </div>

        <Card className="md:col-span-7 p-6 md:p-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("sent");
            }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Ad Soyad" id="name" placeholder="Adınız" />
              <Field
                label="E-posta"
                id="email"
                type="email"
                placeholder="ornek@mail.com"
              />
            </div>
            <div className="mt-5">
              <label className="block text-xs uppercase tracking-widest text-foreground/55 mb-2">
                Konu
              </label>
              <select
                required
                defaultValue=""
                className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-brand-bright/70 transition"
              >
                <option value="" disabled>
                  Bir konu seçin
                </option>
                <option>Demo Gönderimi</option>
                <option>İş Birliği</option>
                <option>Basın</option>
                <option>Diğer</option>
              </select>
            </div>
            <div className="mt-5">
              <label className="block text-xs uppercase tracking-widest text-foreground/55 mb-2">
                Mesaj
              </label>
              <textarea
                required
                rows={5}
                placeholder="Mesajınızı buraya yazın…"
                className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-brand-bright/70 transition resize-y"
              />
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-foreground/55">
                Mesajınızı göndererek iletişim için izin vermiş olursunuz.
              </p>
              <Button type="submit">
                {status === "sent" ? "Teşekkürler ✓" : "Mesajı Gönder"}
                {status === "idle" && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                  >
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-widest text-foreground/55 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-brand-bright/70 transition"
      />
    </div>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const Body = (
    <>
      <div className="text-[0.7rem] uppercase tracking-widest text-foreground/55">
        {label}
      </div>
      <div className="mt-1 font-semibold text-white text-base">{value}</div>
    </>
  );
  return href ? (
    <a href={href} className="block">
      <Card className="p-4 hover:border-brand-bright/60">{Body}</Card>
    </a>
  ) : (
    <Card className="p-4">{Body}</Card>
  );
}
