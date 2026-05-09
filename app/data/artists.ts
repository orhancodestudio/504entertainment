export type Artist = {
  slug: string;
  name: string;
  role: string;
  born: string;
  city: string;
  tagline: string;
  bio: string[];
  featured: { title: string; year: string; type: string };
  accent: string; // tailwind/inline color
  initials: string;
  socials: { label: string; href: string }[];
  videos: { title: string; year: string; thumbAccent: string }[];
};

export const artists: Artist[] = [
  {
    slug: "tuco",
    name: "Tuco",
    role: "Rap",
    born: "1999",
    city: "İstanbul",
    initials: "TC",
    accent: "#8a48d6",
    tagline: "Tek bir kalıba bağlı kalmadan; sound çeşitliliği ve uyum.",
    bio: [
      "1999 yılında İstanbul'da doğan Tuco, 2020 yılından bu yana Türkçe rap müzik üretmektedir. Farklı tarzlara uyum sağlayabilen yapısı ve sound çeşitliliğiyle öne çıkan sanatçı, müzikal olarak tek bir kalıba bağlı kalmadan üretim yapmaktadır.",
      "İlk profesyonel adımını 2025 yılında, 504 Entertainment bünyesinde yayımlanan \"Bulunur Yolu\" isimli çalışmasıyla atan Tuco, üretimlerine aktif olarak devam etmektedir.",
    ],
    featured: { title: "Bulunur Yolu", year: "2025", type: "İlk Profesyonel İş" },
    socials: [
      { label: "Spotify", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "Apple Music", href: "#" },
      { label: "Instagram", href: "#" },
    ],
    videos: [
      { title: "Bulunur Yolu", year: "2025", thumbAccent: "#8a48d6" },
      { title: "Studio Session 01", year: "2025", thumbAccent: "#682baf" },
      { title: "Live Performance", year: "2025", thumbAccent: "#3a1466" },
    ],
  },
  {
    slug: "noire",
    name: "Noire",
    role: "Deep House · Melodik",
    born: "2002",
    city: "İstanbul",
    initials: "NR",
    accent: "#a866ff",
    tagline: "Atmosfer odaklı, duygusal altyapısı güçlü işler.",
    bio: [
      "2002 yılında İstanbul'da doğan Noire, lise yıllarından itibaren söz yazarlığıyla ilgilenmeye başlamıştır. Zamanla kendini stüdyo ortamında keşfederek müzik üretimine yönelen sanatçı, yazarlık tarafındaki birikimini kendi müziğine taşımaktadır.",
      "Müzikal olarak özellikle deep house ve melodik sound'lara yakın duran Noire, duygusal altyapısı güçlü ve atmosfer odaklı işler üretmeye devam etmektedir.",
    ],
    featured: { title: "Atmospheric EP", year: "2025", type: "Yaklaşan İş" },
    socials: [
      { label: "Spotify", href: "#" },
      { label: "SoundCloud", href: "#" },
      { label: "Apple Music", href: "#" },
      { label: "Instagram", href: "#" },
    ],
    videos: [
      { title: "Visualizer · Night Drive", year: "2025", thumbAccent: "#a866ff" },
      { title: "Live Set 01", year: "2025", thumbAccent: "#682baf" },
      { title: "Studio Process", year: "2025", thumbAccent: "#1a0b34" },
    ],
  },
  {
    slug: "kahn",
    name: "Kahn",
    role: "T-Rap · Trap",
    born: "2002",
    city: "İstanbul",
    initials: "KH",
    accent: "#682baf",
    tagline: "Sert trap altyapıları, güçlü tavır ve kendi anlatım dili.",
    bio: [
      "2002 yılında İstanbul'da doğan Kahn, sert trap altyapıları ve güçlü tavrıyla öne çıkan bir rap sanatçısıdır. Uzun yıllardır T-rap kültürünü yakından takip eden sanatçı, dinleyici tarafındaki birikimini zamanla kendi müziğine ve bakış açısına yansıtmaya başlamıştır.",
      "T-rap müziğin sert enerjisini kendi anlatım diliyle birleştirirken zaman zaman kendi stilinin dışına çıkarak farklı sound'lar denemeyi de tercih etmektedir.",
    ],
    featured: { title: "Yeni Single", year: "2025", type: "Çalışmalar Sürüyor" },
    socials: [
      { label: "Spotify", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "Apple Music", href: "#" },
      { label: "Instagram", href: "#" },
    ],
    videos: [
      { title: "Trap Visual", year: "2025", thumbAccent: "#682baf" },
      { title: "Cypher Session", year: "2025", thumbAccent: "#3a1466" },
      { title: "Behind the Beat", year: "2025", thumbAccent: "#8a48d6" },
    ],
  },
];
