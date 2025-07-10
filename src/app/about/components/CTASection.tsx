import { Button, SocialLinks } from "@/components";
import { nav } from "@/configs/nav";
import Link from "next/link";

export default function CTASection() {
  // Helper function to check if a page is disabled
  const isPageDisabled = (href: string) => {
    const page = nav.find(p => p.href === href);
    return page?.disabled || false;
  };

  return (
    <section className='space-y-6 text-center'>
      <h2 className='text-3xl font-bold tracking-tight'>Let&apos;s Work Together</h2>
      <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
        I&apos;m always interested in new opportunities and meaningful projects.
        Whether you&apos;re looking to build something new or improve something existing,
        I&apos;d love to help bring your ideas to life.
      </p>

      <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
        {isPageDisabled('/projects') ? (
          <Button
            size='lg'
            className='min-w-[140px]'
            disabled={true}
            aria-label='Projects page (coming soon)'
            title='Projects page (coming soon)'
          >
            View My Work
          </Button>
        ) : (
          <Button
            asChild
            size='lg'
            className='min-w-[140px]'
            aria-label='View my projects'
            title='View my projects'
          >
            <Link href='/projects'>
              View My Work
            </Link>
          </Button>
        )}

        <Button
          asChild
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

      <div className='flex justify-center'>
        <SocialLinks />
      </div>
    </section>
  );
}