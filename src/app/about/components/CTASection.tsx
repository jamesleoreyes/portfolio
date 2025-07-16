import Link from "next/link";
import { Button, SocialLinks } from "@/components";
import { cn, isPageDisabled } from "@/lib/utils";

interface CTASectionProps {
  className?: string;
}

export default function CTASection({ className }: CTASectionProps) {
  return (
    <section className={cn("text-center py-16 w-full", className)}>
      <div className='max-w-4xl mx-auto space-y-8'>
        <h2 className='text-3xl font-bold tracking-tight'>Let&apos;s Work Together</h2>
        <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
          I&apos;m always interested in new opportunities and meaningful projects.
          Whether you&apos;re looking to build something new or improve something existing,
          I&apos;d love to help bring your ideas to life.
        </p>
        <div className='flex sm:flex-row gap-4 justify-center items-center'>
          <Button
            asChild={!isPageDisabled('/projects')}
            disabled={isPageDisabled('/projects')}
            variant='default'
            size='lg'
            className='min-w-[140px]'
            aria-label='View my projects'
            title='View my projects'
          >
            <Link href='/projects'>
              View My Work
            </Link>
          </Button>
          <Button
            asChild
            variant='default'
            size='lg'
            className='min-w-[140px]'
            aria-label='Get in touch with me'
            title='Get in touch with me'
          >
            <Link href='/contact'>
              Get In Touch
            </Link>
          </Button>
        </div>
        <div className='flex justify-center space-x-4'>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}