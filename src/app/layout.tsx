import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.consultoriourbanistico.com"),
  title: "Perito Judicial Urbanístico · Ana Epitie · Manresa · Bages",
  description:
    "Perito Judicial Urbanístico Ana Epitie (Diploma Numerario N.º 02659). Especializada en legalización de obras, asimilación a fuera de ordenación, informes periciales y estudio de viabilidad urbanística en la comarca del Bages, Cataluña.",
  keywords: [
    "perito judicial",
    "urbanismo",
    "Manresa",
    "Bages",
    "POUM",
    "legalización",
    "masía",
    "suelo urbanizable",
    "Ana Epitie",
    "perito urbanístico",
    "informe pericial",
    "disciplina urbanística",
  ],
  authors: [
    {
      name: "Ana Epitie",
      url: "https://www.consultoriourbanistico.com",
    },
  ],
  creator: "Ana Epitie",
  publisher: "Consultorio Urbanístico - Ana Epitie",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.consultoriourbanistico.com/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["ca_ES"],
    url: "https://www.consultoriourbanistico.com",
    siteName: "Consultorio Urbanístico - Ana Epitie",
    title: "Perito Judicial Urbanístico · Ana Epitie · Manresa · Bages",
    description:
      "Legalización de obras, informes periciales judiciales y disciplina urbanística en Manresa y el Bages.",
    images: [
      {
        url: "https://www.consultoriourbanistico.com/logo.svg",
        width: 1200,
        height: 630,
        alt: "Consultorio Urbanístico - Ana Epitie - Perito Judicial Urbanístico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perito Judicial Urbanístico · Ana Epitie · Manresa · Bages",
    description:
      "Legalización de obras, informes periciales y disciplina urbanística. ASPEJURE N.º 02659.",
  },
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="alternate" hrefLang="es" href="https://www.consultoriourbanistico.com/" />
        <link rel="alternate" hrefLang="ca" href="https://www.consultoriourbanistico.com/?lang=ca" />
        <link rel="alternate" hrefLang="x-default" href="https://www.consultoriourbanistico.com/" />
        <SchemaMarkup />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
