import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { type ProjectItem } from '@_types/Resume';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Skeleton } from '@/src/components';
import { PlaceholderScreenshot } from '@/src/components';
import { type CarouselApi } from '@/src/components';

export default function ScreenshotCarousel({ project }: { project: ProjectItem }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrentSlide(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrentSlide(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const currentTheme = mounted ? (resolvedTheme || 'light') : 'light';

  return (
    <div className='flex items-center justify-center'>
      {project.images ? (
        <div>
          <Carousel opts={{ loop: true }} setApi={setApi}>
            <CarouselContent>
              {project.images[currentTheme === 'dark' ? 'dark' : 'light'].map((image, idx) => (
                <CarouselItem key={idx}>
                  <Image
                    src={image}
                    alt={project.name}
                    width={400}
                    height={200}
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 400px"
                    className="w-full"
                    priority={idx === 0}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className='absolute left-4 top-1/2 -translate-y-1/2'
              variant='outline'
            />
            <CarouselNext
              className='absolute right-4 top-1/2 -translate-y-1/2'
              variant='outline'
            />
          </Carousel>
          <div className="text-muted-foreground py-2 -mb-2 border-b border-muted-foreground/10 text-center text-sm">
            {!api || count === 0 ? (
              <div className="flex justify-center space-x-1">
                <Skeleton className="h-5 w-2 bg-foreground/10" />
                <span className="text-muted-foreground">/</span>
                <Skeleton className="h-5 w-2 bg-foreground/10" />
              </div>
            ) : (
              <span>{currentSlide} / {count}</span>
            )}
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-center bg-background'>
          <PlaceholderScreenshot className='w-full max-w-none' />
        </div>
      )}
    </div>
  );
}