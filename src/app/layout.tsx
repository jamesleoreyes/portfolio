import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Portfolio | James Reyes',
    template: '%s | James Reyes',
  },
  description: 'I build useful, purposeful apps and learn everything I can along the way.',
  applicationName: 'Portfolio | James Reyes',
  keywords: ['James Reyes', 'Portfolio', 'Developer', 'Software Engineer', 'Web Developer', 'Mobile Developer', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Software Developer', 'Software Engineer', 'Web Developer', 'Mobile Developer', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Software Developer'],
  authors: [
    {
      name: 'James Reyes',
      url: 'https://jamesleoreyes.com'
    },
  ],
  creator: 'James Reyes',
  publisher: 'James Reyes',
  robots: 'index, follow',
  openGraph: {
    title: {
      default: 'Portfolio | James Reyes',
      template: '%s | James Reyes',
    },
    description: 'I build useful, purposeful apps and learn everything I can along the way.',
    url: 'https://jamesleoreyes.com',
    siteName: 'Portfolio | James Reyes',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: 'Portfolio | James Reyes',
      template: '%s | James Reyes',
    },
    description: 'I build useful, purposeful apps and learn everything I can along the way.',
    images: ['https://jamesleoreyes.com/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
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
