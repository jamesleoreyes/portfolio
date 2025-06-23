import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import { urlConfig } from "@/configs/app";
import { DynamicThemeColor } from "@/components/dynamic-theme-color";
import { DynamicViewport } from "@/components/dynamic-viewport";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface Meta {
  title: string;
  description: string;
  siteName: string;
  creator: string;
}

const meta: Meta = {
  title: 'James Reyes',
  description: "I build useful, purposeful apps and learn everything I can along the way.",
  siteName: 'James Reyes',
  creator: 'James Reyes'
}

export const metadata: Metadata = {
  metadataBase: new URL(urlConfig.app),
  title: {
    default: `Portfolio | ${meta.title}`,
    template: `%s | ${meta.title}`,
  },
  description: meta.description,
  applicationName: `Portfolio | ${meta.title}`,
  authors: [{ name: meta.creator, url: urlConfig.app }],
  creator: meta.creator,
  publisher: meta.creator,
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
    type: 'website',
    locale: 'en_US',
    url: urlConfig.app,
    title: {
      default: `Portfolio | ${meta.title}`,
      template: `%s | ${meta.title}`,
    },
    description: meta.description,
    siteName: `Portfolio | ${meta.title}`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'James Reyes - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: `Portfolio | ${meta.title}`,
      template: `%s | ${meta.title}`,
    },
    description: meta.description,
    images: ['/og-image.png'],
  },
  appleWebApp: {
    capable: true,
    title: meta.title,
    statusBarStyle: 'default',
    startupImage: '/apple-touch-icon.png'
  },
  alternates: {
    canonical: urlConfig.app,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "James Reyes",
              "url": urlConfig.app,
              "image": `${urlConfig.app}/og-image.png`,
              "sameAs": [
                "https://github.com/jamesleoreyes",
                "https://linkedin.com/in/jamesleoreyes"
              ],
              "jobTitle": "Full Stack Product Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Cimplx HR, Inc.",
                "url": "https://cimplx.com"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DynamicThemeColor />
          <DynamicViewport />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
