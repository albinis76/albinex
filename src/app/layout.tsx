import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Balcony Maintenance in São Paulo | RA Manutenção de Sacadas",
  description:
    "Especialistas em manutenção de sacadas em São Paulo. Serviços de impermeabilização, vedação, inspeção técnica e segurança estrutural para condomínios e residências.",
  keywords: [
    "manutenção de sacadas",
    "manutenção de sacadas SP",
    "impermeabilização de sacadas",
    "vedação de sacadas",
    "infiltração sacada",
    "troca de roldanas sacada",
    "inspeção técnica sacadas",
    "laudo técnico sacadas",
    "segurança em sacadas",
    "manutenção predial SP"
  ],
  authors: [{ name: "RA Manutenção de Sacadas" }],
  creator: "RA Manutenção de Sacadas",
  publisher: "RA Manutenção de Sacadas",
  metadataBase: new URL("https://www.ramanutencaodesacadas.com.br"),
  openGraph: {
    title: "RA Manutenção de Sacadas | Segurança e Alta Performance",
    description:
      "Serviços profissionais de manutenção de sacadas com foco em vedação, impermeabilização e segurança estrutural em São Paulo.",
    url: "https://www.ramanutencaodesacadas.com.br",
    siteName: "RA Manutenção de Sacadas",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Manutenção de sacadas profissional"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Manutenção de Sacadas em SP | RA Manutenção",
    description:
      "Especialistas em vedação, impermeabilização e manutenção de sacadas com segurança garantida.",
    images: ["/images/hero-bg.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "RA Manutenção de Sacadas",
              image: "https://www.ramanutencaodesacadas.com.br/images/hero-bg.png",
              url: "https://www.ramanutencaodesacadas.com.br",
              telephone: "+55 11 99380-3195",
              email: "contato@ramanutencao.com.br",
              address: {
                "@type": "PostalAddress",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                addressCountry: "BR"
              },
              description:
                "Empresa especializada em manutenção de sacadas, impermeabilização, vedação, inspeção técnica e segurança estrutural.",
              areaServed: "São Paulo e Grande SP",
              services: [
                "Manutenção de sacadas",
                "Impermeabilização",
                "Vedação",
                "Inspeção técnica",
                "Laudos técnicos",
                "Troca de roldanas"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
