import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kate Monroe, CEO | Modern Fame • Real Power",
  description: "Kate Monroe is a Marine veteran, media entrepreneur, and cultural disruptor redefining power, ownership, and fame in the modern era.",
  keywords: ["Kate Monroe", "CEO", "Monroe Media", "VetComm", "San Diego Surf", "Marine Veteran", "Entrepreneur", "Media Executive"],
  openGraph: {
    title: "Kate Monroe, CEO | Modern Fame • Real Power",
    description: "Building the Future of Media, Ownership, and Culture. Not Just Famous. Formidable.",
    type: "website",
    locale: "en_US",
    siteName: "Kate Monroe",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kate Monroe, CEO",
    description: "Building the Future of Media, Ownership, and Culture.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kate Monroe",
  "url": "https://katemonroe.com",
  "jobTitle": ["CEO", "Producer", "Entrepreneur"],
  "worksFor": [
    {
      "@type": "Organization",
      "name": "Monroe Media"
    },
    {
      "@type": "Organization",
      "name": "VetComm"
    }
  ],
  "knowsAbout": ["Media Production", "Business Strategy", "Veteran Affairs", "Executive Leadership"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
