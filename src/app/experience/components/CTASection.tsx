import Link from "next/link";
import { Button, SocialLinks } from "@/components";
import { isPageDisabled } from "@/lib/utils";

export default function CTASection() {
  return (
    <section className='space-y-6 text-center pb-8'>
      <h2 className='text-3xl font-bold tracking-tight'>Ready to Work Together?</h2>
      <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
        I&apos;m passionate about building products that solve real problems and create meaningful impact.
        Let&apos;s discuss how we can work together to build something great.
      </p>

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

        {isPageDisabled('/projects') ? (
          <Button
            size='lg'
            variant='ghost'
            className='min-w-[140px]'
            disabled={true}
            aria-label='Projects page (coming soon)'
            title='Projects page (coming soon)'
          >
            See Projects
          </Button>
        ) : (
          <Button
            asChild
            size='lg'
            variant='ghost'
            className='min-w-[140px]'
            aria-label='View my projects'
            title='View my projects'
          >
            <Link href='/projects'>
              See Projects
            </Link>
          </Button>
        )}

        <Button
          asChild
          size='lg'
          variant='ghost'
          className='min-w-[140px]'
          aria-label='Get in touch with me'
          title='Get in touch with me'
        >
          <Link href='/contact'>
            Get In Touch
          </Link>
        </Button>
      </div>

      <div className='flex justify-center'>
        <SocialLinks />
      </div>

      <div className='bg-accent p-6 border border-foreground/10 max-w-2xl mx-auto'>
        <h3 className='text-lg font-semibold mb-3'>What I&apos;m Looking For</h3>
        <p className='text-muted-foreground leading-relaxed'>
          I&apos;m seeking a full-stack engineering role where I can focus on building great software
          with teams that value both technical excellence and user experience. I want to work on
          products that make a real difference in people&apos;s lives.
        </p>
      </div>
    </section>
  );
}