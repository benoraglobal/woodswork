import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import { WhatsappButton } from "@/components";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.woodswork.net"),
  title: "Wood’s Craft & Furniture | woodswork.net",
  description:
    "Handcrafted wooden furniture built with precision, passion, and your perspective. Discover warmth, authenticity, and timeless design at Wood’s Craft.",
  keywords: [
    "woodwork",
    "furniture",
    "custom wood furniture",
    "handcrafted furniture",
    "artisan woodcraft",
    "wood's craft",
    "woodswork",
  ],
  openGraph: {
    title: "Wood’s Craft & Furniture | woodswork.net",
    description:
      "Handcrafted wooden furniture built with precision, passion, and your perspective.",
    url: "https://www.woodswork.net",
    siteName: "Wood’s Craft",
    images: [
      {
        url: "/og-image.jpg", // 👈 replace with your OG image in /public
        width: 1200,
        height: 630,
        alt: "Wood’s Craft handcrafted furniture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wood’s Craft & Furniture | woodswork.net",
    description:
      "Handcrafted wooden furniture built with precision, passion, and your perspective.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: { canonical: "https://www.woodswork.net" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${cormorant.variable}`}
    >
      <body className="bg-background text-foreground font-sans antialiased">
        <main>{children}</main>
        <WhatsappButton />
      </body>
    </html>
  );
}
