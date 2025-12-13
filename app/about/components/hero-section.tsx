import ProfileImage from '@/src/components/profile-image';
import { cn } from '@/src/lib';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={cn('border-b border-border/50 py-16 w-full', className)}
    >
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row justify-center items-center lg:gap-10 text-center lg:text-left space-y-8 lg:space-y-0">
        <ProfileImage
          width={300}
          height={300}
          priority={true}
          alt="James Reyes"
        />
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            My Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            From childhood curiosity to creative exploration, unexpected detours
            to discovering my calling. This is the winding path that led me to
            become a Full-Stack Product Engineer.
          </p>
          <p className="text-lg text-primary">
            It&apos;s been a circular journey, but every detour taught me
            something valuable.
          </p>
        </div>
      </div>
    </section>
  );
}
