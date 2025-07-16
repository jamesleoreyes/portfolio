import Link from "next/link";
import { Button } from "@/components";

export default function CTASection() {
  return (
    <section className="text-center py-16 w-full px-4 border-t border-border/50">
      <div className='max-w-4xl mx-auto space-y-6'>
        <h2 className='text-3xl font-bold tracking-tight text-primary'>Want to See What I&apos;ve Built?</h2>
        <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
          While this dedicated projects page is under construction, you can still check out my work
          through my resume and GitHub profile.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Button asChild variant="default">
            <Link href="/resume">
              View Resume
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="https://github.com/jamesleoreyes" target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </Link>
          </Button>
        </div>

        <div className='bg-primary/10 p-6 border border-foreground/10 max-w-2xl mx-auto'>
          <h3 className='text-lg font-semibold mb-3 text-primary'>Coming Soon</h3>
          <p className='text-foreground/80 leading-relaxed'>
            This page will feature detailed project showcases, live demos, source code links,
            and insights into my development process. Each project will tell the story of the
            problem it solves and the technologies used to build it.
          </p>
        </div>
      </div>
    </section>
  );
}