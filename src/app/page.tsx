'use client'

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/ui/github-icon";
import { AdaptiveIcon } from "@/components/adaptive-icon";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-dvh p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <motion.main
        className="flex flex-col gap-[32px] row-start-2 items-center"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
            delay: 0.25,
          },
        }}
      >
        <AdaptiveIcon
          src='/media/icon-transparent.svg'
          alt="James Reyes Transparent Logo"
          width={200}
          height={200}
        />
        <p className="font-[family-name:var(--font-geist-mono)] text-center font-light">
          Coming soon...
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button size="sm" asChild className="rounded-full transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium">
            <Link
              href="https://github.com/jamesleoreyes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="size-5" />
              GitHub
            </Link>
          </Button>
        </div>
      </motion.main>
    </div>
  );
}
