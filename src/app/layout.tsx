import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/common/FloatingCTA";
import { BackToTop } from "@/components/common/BackToTop";
import { ProgressBar } from "@/components/common/ProgressBar";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.baseUrl),
  title: {
    default: "GAutoDetailing | Premium Mobile Auto Detailing — Hardeeville, Bluffton, Hilton Head & Beaufort, SC",
    template: "%s | GAutoDetailing",
  },
  description:
    "GAutoDetailing offers professional mobile auto detailing in Hardeeville, Bluffton, Hilton Head Island, and Beaufort, SC. We come to you — premium products, expert results. Book your detail today!",
  keywords: [
    "mobile auto detailing",
    "car detailing",
    "auto detailing hardeeville sc",
    "car detailing bluffton sc",
    "auto detailing hilton head",
    "car detailing beaufort sc",
    "mobile car wash",
    "interior detailing",
    "exterior detailing",
    "ceramic spray protection",
    "paint sealant",
    "luxury car detailing",
    "mobile detailer near me",
    "professional car detailing",
    "lowcountry auto detailing",
    "south carolina mobile detailing",
    "ga auto detailing",
    "gautodetailing",
  ],
  authors: [{ name: "GAutoDetailing" }],
  creator: "GAutoDetailing",
  publisher: "GAutoDetailing",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BUSINESS.baseUrl,
    siteName: "GAutoDetailing",
    title: "GAutoDetailing | Premium Mobile Auto Detailing in the SC Lowcountry",
    description:
      "Professional mobile auto detailing serving Hardeeville, Bluffton, Hilton Head Island, and Beaufort, SC. We come to you with premium products and expert results.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GAutoDetailing — Premium Mobile Auto Detailing in South Carolina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GAutoDetailing | Premium Mobile Auto Detailing — SC Lowcountry",
    description:
      "Professional mobile auto detailing serving Hardeeville, Bluffton, Hilton Head Island, and Beaufort, SC.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "CXWhVPVYYJheU2Ilg19c2qR0PpWuFQiFGnl7cU3Yelk",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${BUSINESS.baseUrl}/#business`,
      name: "GAutoDetailing",
      description:
        "Premium professional mobile auto detailing serving Hardeeville, Bluffton, Hilton Head Island, and Beaufort, South Carolina.",
      url: BUSINESS.baseUrl,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      image: `${BUSINESS.baseUrl}/og-image.jpg`,
      priceRange: "$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Cash, Credit Card, Venmo, Zelle, CashApp",
      address: {
        "@type": "PostalAddress",
        addressRegion: "SC",
        addressCountry: "US",
        description: "Mobile service — we travel to you",
      },
      geo: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 32.2416,
          longitude: -80.8732,
        },
        geoRadius: "80000",
      },
      areaServed: [
        { "@type": "City", name: "Hardeeville", containedIn: { "@type": "State", name: "South Carolina" } },
        { "@type": "City", name: "Bluffton", containedIn: { "@type": "State", name: "South Carolina" } },
        { "@type": "City", name: "Hilton Head Island", containedIn: { "@type": "State", name: "South Carolina" } },
        { "@type": "City", name: "Beaufort", containedIn: { "@type": "State", name: "South Carolina" } },
      ],
      serviceType: "Mobile Auto Detailing",
      openingHours: ["Mo-Sa 07:00-19:00"],
      sameAs: [BUSINESS.instagram],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "100",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BUSINESS.baseUrl}/#website`,
      url: BUSINESS.baseUrl,
      name: "GAutoDetailing",
      description: "Premium Mobile Auto Detailing in the SC Lowcountry",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BUSINESS.baseUrl}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased min-h-screen">
        <ProgressBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <BackToTop />
      </body>
    </html>
  );
}
