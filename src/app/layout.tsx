import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Outfit } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from "@/components/ui/sonner"
import './globals.css';
import { DynamicFavicon, DynamicThemeColor, DynamicViewport, ImpossibleDeviceEasterEgg } from '@/components';
import { NavBar } from '@/components';
import { Footer } from '@/components';
import Head from './(seo)/head';
import metadata from './(seo)/metadata';
import viewport from './(seo)/viewport';
export { metadata, viewport };

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='antialiased' suppressHydrationWarning>
      <Head />
      <body
        className={`${outfit.variable} antialiased min-h-dvh flex flex-col`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
          storageKey='theme'
        >
          <DynamicFavicon />
          <DynamicThemeColor />
          <DynamicViewport />
          <div className='flex-1 hidden min-[151px]:flex flex-col'>
            <NavBar />
            <main className='flex-1 flex justify-center items-center max-w-screen-xl w-full mx-auto xl:border-x border-border/50'>
              {children}
            </main>
            <Footer />
          </div>
          <Toaster
            richColors
            closeButton
            visibleToasts={5}
            duration={4000}
            position='top-center'
          />
          <Analytics />
          <SpeedInsights />
          <ImpossibleDeviceEasterEgg />
        </ThemeProvider>
      </body>
    </html>
  );
}