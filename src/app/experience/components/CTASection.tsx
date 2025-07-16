import Link from "next/link";
import { Button, SocialLinks } from "@/components";
import { cn, isPageDisabled } from "@/lib/utils";

interface CTASectionProps {
  className?: string;
}

function CTAButtons() {
  return (
    <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
      <Button
        asChild
        size='lg'
        className='min-w-[140px]'
        aria-label='View my resume'
        title='View my resume'
      >
        <Link href='/resume'>
          View Resume
        </Link>
      </Button>

      <Button
        asChild={!isPageDisabled('/projects')}
        disabled={isPageDisabled('/projects')}
        size='lg'
        variant='secondary'
        className='min-w-[140px]'
        aria-label='View my projects'
        title='View my projects'
      >
        <Link href='/projects'>
          See Projects
        </Link>
      </Button>

      <Button
        asChild
        size='lg'
        variant='secondary'
        className='min-w-[140px]'
        aria-label='Get in touch with me'
        title='Get in touch with me'
      >
        <Link href='/contact'>
          Get In Touch
        </Link>
      </Button>
    </div>
  );
}

export default function CTASection({ className }: CTASectionProps) {
  return (
    <section className={cn("text-center py-16 w-full", className)}>
      <div className='max-w-4xl mx-auto space-y-6'>
        <h2 className='text-3xl font-bold tracking-tight text-primary'>Ready to Work Together?</h2>
        <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
          I&apos;m passionate about building products that solve real problems and create meaningful impact.
          Let&apos;s discuss how we can work together to build something great.
        </p>

        <CTAButtons />

        <div className='flex justify-center'>
          <SocialLinks />
        </div>

        <div className='bg-primary/10 p-6 border border-foreground/10 max-w-2xl mx-auto'>
          <h3 className='text-lg font-semibold mb-3 text-primary'>What I&apos;m Looking For</h3>
          <p className='text-foreground/80 leading-relaxed'>
            I&apos;m seeking a full-stack engineering role where I can focus on building great software
            with teams that value both technical excellence and user experience. I want to work on
            products that make a real difference in people&apos;s lives.
          </p>
        </div>
      </div>
    </section>
  );
}