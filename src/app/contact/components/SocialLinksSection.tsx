import Link from "next/link";
import { Button } from "@/components";
import { contactData } from "../data";

export default function SocialLinksSection() {
  const { socialLinks } = contactData;

  return (
    <section className='space-y-6'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold tracking-tight mb-4'>Connect on Social</h2>
        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
          Follow my journey, see my latest projects, and stay connected through my social media accounts.
        </p>
      </div>

      <div className='flex flex-wrap justify-center gap-4'>
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <Button
              key={social.name}
              variant='default'
              size='lg'
              asChild
              className='flex items-center gap-3 min-w-[140px]'
            >
              <Link
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`Follow on ${social.name}`}
                title={`Follow on ${social.name}`}
              >
                <IconComponent className='w-5 h-5' />
                {social.name}
              </Link>
            </Button>
          );
        })}
      </div>

      <div className='text-center'>
        <p className='text-sm text-muted-foreground'>
          I&apos;m most active on GitHub, where I&apos;m frequently updating my projects. Feel free to open an issue or a pull request!
        </p>
      </div>
    </section>
  );
}