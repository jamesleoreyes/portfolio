import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { urlConfig } from "@/configs/app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultUrl = urlConfig.app
  ? `https://${urlConfig.app}`
  : 'http://localhost:3000';

interface Meta {
  title: string;
  description: string;
  keywords: string[];
  siteName: string;
  creator: string;
}

const meta: Meta = {
  title: 'James Reyes',
  description: "I build useful, purposeful apps and learn everything I can along the way.",
  keywords: ['James Reyes', 'Portfolio', 'Developer', 'Software Engineer', 'Web Developer', 'Mobile Developer', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Software Developer', 'Software Engineer', 'Web Developer', 'Mobile Developer', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Software Developer'],
  siteName: 'James Reyes',
  creator: 'James Reyes'
}

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: `Portfolio | ${meta.title}`,
    template: `%s | ${meta.title}`,
  },
  description: meta.description,
  applicationName: `Portfolio | ${meta.title}`,
  keywords: meta.keywords,
  authors: [
    {
      name: meta.creator,
      url: defaultUrl
    },
  ],
  creator: meta.creator,
  publisher: meta.creator,
  robots: 'index, follow',
  openGraph: {
    title: {
      default: `Portfolio | ${meta.title}`,
      template: `%s | ${meta.title}`,
    },
    description: meta.description,
    url: defaultUrl,
    siteName: `Portfolio | ${meta.title}`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'James Reyes - Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
