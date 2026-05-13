import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ramanutencaodesacadas.com.br'),
  title: {
    default: "RA Manutenção de Sacadas | Vedação, Roldanas e Segurança em SP",
    template: "%s | RA Manutenção de Sacadas"
  },
  description: "Especialista em manutenção de sacadas em São Paulo. Vedação contra infiltração, troca de roldanas, inspeção técnica com ART e segurança estrutural. Atendimento em 24h para condomínios.",
  keywords: [
    "manutenção de sacadas SP",
    "conserto de sacadas de vidro",
    "vedação de sacadas contra chuva",
    "troca de roldanas sacada",
    "impermeabilização de sacadas",
    "laudo técnico sacadas SP",
    "manutenção varanda gourmet",
    "segurança de sacadas",
    "RA Manutenção de Sacadas",
    "empresa de manutenção predial SP"
  ],
  authors: [{ name: "RA Manutenção de Sacadas" }],
  creator: "RA Manutenção de Sacadas",
  publisher: "RA Manutenção de Sacadas",
  alternates: {
    canonical: "https://www.ramanutencaodesacadas.com.br",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "RA Manutenção de Sacadas | Líder em Segurança e Vedação em SP",
    description: "Serviços técnicos especializados com garantia e mão de obra própria em São Paulo. Proteja seu patrimônio contra infiltrações.",
    url: "https://www.ramanutencaodesacadas.com.br",
    siteName: "RA Manutenção de Sacadas",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Manutenção técnica de sacadas profissional"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Manutenção de Sacadas em SP | RA Manutenção",
    description: "Especialistas em vedação, impermeabilização e manutenção de sacadas com segurança garantida.",
    images: ["/images/hero-bg.png"]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.ramanutencaodesacadas.com.br/#organization",
      "name": "RA Manutenção de Sacadas",
      "url": "https://www.ramanutencaodesacadas.com.br",
      "telephone": "+5511993803195",
      "email": "contato@ramanutencaodesacadas.com.br",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -23.55052,
        "longitude": -46.633308
      },
      "areaServed": [
        { "@type": "City", "name": "São Paulo" },
        { "@type": "City", "name": "Santo André" },
        { "@type": "City", "name": "São Bernardo do Campo" },
        { "@type": "City", "name": "São Caetano do Sul" },
        { "@type": "City", "name": "Guarulhos" },
        { "@type": "City", "name": "Osasco" }
      ],
      "image": "https://www.ramanutencaodesacadas.com.br/images/hero-bg.png",
      "priceRange": "$$"
    },
    {
      "@type": "Service",
      "serviceType": "Manutenção de Sacadas",
      "provider": { "@id": "https://www.ramanutencaodesacadas.com.br/#organization" },
      "description": "Manutenção completa de sistemas de envidraçamento de sacadas, incluindo troca de roldanas e alinhamento."
    },
    {
      "@type": "Service",
      "serviceType": "Vedação e Impermeabilização",
      "provider": { "@id": "https://www.ramanutencaodesacadas.com.br/#organization" },
      "description": "Vedação técnica contra infiltrações de chuva e proteção de estruturas metálicas em sacadas."
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preload"
          href="/images/hero-bg.png"
          as="image"
          type="image/png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
