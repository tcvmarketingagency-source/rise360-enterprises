import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { PreloaderProvider } from "@/components/layout/PreloaderProvider";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ORGANIZATION_JSON_LD, SITE } from "@/lib/content";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: "%s | Rise360 Enterprises",
  },
  description: SITE.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${dmSans.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper font-ui text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_JSON_LD),
          }}
        />
        <MotionProvider>
          <PreloaderProvider>
            <SmoothScroll />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </PreloaderProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
