'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Moon, Sun } from 'lucide-react';
import { Button, Card, CardContent, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, PlaceholderScreenshot } from '@/components';
import { cn } from '@/lib/utils';
import { projects } from '@/data/projects';

interface ScreenshotGalleryProps {
  className?: string;
}

export default function ScreenshotGallery({ className }: ScreenshotGalleryProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('light');
  const { screenshots, title } = projects.portfolio;

  const currentScreenshots = screenshots[selectedTheme] || screenshots.default;

  const getPageName = (imagePath: string) => {
    const filename = imagePath.split('/').pop() || '';
    const match = filename.match(/desktop-(light|dark)-(.+)\.png/);
    if (match && match[2]) {
      return match[2].charAt(0).toUpperCase() + match[2].slice(1);
    }
    return 'Screenshot';
  };

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className={cn("py-16 w-full px-4 border-t border-border/50", className)}>
      <div className='max-w-6xl mx-auto space-y-8'>
        <div className='text-center space-y-3'>
          <h2 className='text-3xl font-bold tracking-tight text-primary mb-4'>Project Screenshots</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Take a visual tour through the different pages and features of the portfolio website.
            Switch between light and dark themes to see the complete design system.
          </p>

          {/* Theme Toggle */}
          <div className="flex justify-center">
            <div className="bg-accent border border-border p-1 flex items-center gap-1">
              <Button
                variant={selectedTheme === 'light' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSelectedTheme('light')}
                className="h-8"
              >
                <Sun className="w-4 h-4" />
                Light
              </Button>
              <Button
                variant={selectedTheme === 'dark' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSelectedTheme('dark')}
                className="h-8"
              >
                <Moon className="w-4 h-4" />
                Dark
              </Button>
            </div>
          </div>
          <div className="flex justify-center -mb-3 xl:hidden">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Swipe to view more
              <ArrowRight className="w-4 h-4" />
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {currentScreenshots.map((screenshot, index) => (
                <CarouselItem key={`${selectedTheme}-${index}`} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden pt-0 border border-border/50 hover:border-border transition-colors">
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden">
                        {mounted ? (
                          <Image
                            src={screenshot}
                            alt={`${title} - ${getPageName(screenshot)} page`}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <PlaceholderScreenshot />
                        )}
                      </div>
                      <div className="p-4 pb-0">
                        <h3 className="font-semibold text-foreground">{getPageName(screenshot)} Page</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)} theme
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant="default" size="icon" className='hidden xl:flex' />
            <CarouselNext variant="default" size="icon" className='hidden xl:flex' />
          </Carousel>
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="text-center bg-accent border-primary/20">
            <CardContent className="py-4">
              <div className="text-2xl font-bold text-primary">{currentScreenshots.length}</div>
              <div className="text-sm text-muted-foreground">Pages</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-accent border-primary/20">
            <CardContent className="py-4">
              <div className="text-2xl font-bold text-primary">OKLCH</div>
              <div className="text-sm text-muted-foreground">Colors</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-accent border-primary/20">
            <CardContent className="py-4">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Responsive</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-accent border-primary/20">
            <CardContent className="py-4">
              <div className="text-2xl font-bold text-primary">PWA</div>
              <div className="text-sm text-muted-foreground">Enabled</div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="py-6">
            <div className="text-center space-y-3">
              <h3 className="text-lg font-semibold text-primary">Responsive Design Excellence</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Every page is meticulously crafted to provide an optimal viewing experience across all devices.
                The design system ensures consistency while adapting beautifully to different screen sizes,
                from mobile phones to ultra-wide desktop displays.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 