import { Analytics } from '@vercel/analytics/next'
import { Outfit } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import { DynamicThemeColor } from '@/components';
import { DynamicViewport } from '@/components';
import { NavBar } from '@/components';
import { Footer } from '@/components';
import Head from './head';
import metadata from './metadata';
import viewport from './viewport';
export { metadata, viewport };

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
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
        >
          <DynamicThemeColor />
          <DynamicViewport />
          <div className='flex-1 hidden min-[151px]:flex flex-col'>
            <NavBar />
            <main className='flex-1 flex justify-center items-center'>
              {children}
            </main>
            <Footer />
          </div>
          <Analytics />
          <div className='flex flex-col justify-center items-center text-center min-h-screen min-[151px]:hidden'>
            <p className='text-2xl'>🤔</p>
            <p>What kind of device are you viewing on???</p>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}