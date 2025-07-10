'use client';

import { Calendar, MapPin, Quote } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface TurningPoint {
  year: string;
  title: string;
  description: string;
  lesson: string;
  location?: string;
}

const turningPoints: TurningPoint[] = [
  {
    year: "2008-2012",
    title: "The Accidental Hacker",
    description: "Built my first desktop apps in Visual Basic, including a fake YouTube partnership tool that accidentally taught me about user expectations (and ethics).",
    lesson: "Code has real impact on real people — use that power responsibly.",
  },
  {
    year: "2016-2018",
    title: "The Creative Detour",
    description: "Majored in Media Arts at USC-Columbia, dove into filmmaking and photography. Learned storytelling, visual design, and the importance of user experience.",
    lesson: "Every technical skill benefits from understanding human creativity and emotion.",
    location: "Columbia, SC"
  },
  {
    year: "2018-2022",
    title: "The Music Obsession",
    description: "Spent years making beats in FL Studio, recording music, selling on BeatStars. Learned about iteration, feedback loops, and finding your unique voice.",
    lesson: "Passion projects teach you more than any textbook ever could."
  },
  {
    year: "2020-2022",
    title: "The Reality Check",
    description: "FedEx Ground delivery driver working 60+ hours a week. Physical labor, time pressure, customer service — all while dreaming of something more.",
    lesson: "Hard work builds character, but smart work builds futures.",
    location: "Rock Hill, SC"
  },
  {
    year: "Late 2022",
    title: "The ChatGPT Moment",
    description: "First interaction with ChatGPT sparked everything. Asked about building a Discord bot, got introduced to Python, and suddenly the path forward was clear.",
    lesson: "Sometimes the right tool at the right moment changes everything."
  },
  {
    year: "2023-Present",
    title: "The Full Circle",
    description: "From 'vibe coding' with AI to learning fundamentals, landing my first dev role, and building production systems. The childhood curiosity finally found its home.",
    lesson: "The best journeys bring you back to where you started, but with new eyes."
  }
];

function TurningPointItem({ point }: { point: TurningPoint }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4]);

  return (
    <motion.div ref={ref} className='relative' style={{ opacity }}>
      <div className='flex gap-6'>
        {/* Space for timeline - dot will be positioned fixed */}
        <div className='flex-shrink-0 w-12 h-12'></div>

        {/* Content */}
        <div className='flex-1 space-y-3 pb-8'>
          <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
            <div className='flex items-center gap-2 text-sm text-muted-foreground'>
              <Calendar className='w-4 h-4' />
              <span className='font-medium'>{point.year}</span>
            </div>
            {point.location && (
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <MapPin className='w-4 h-4' />
                <span>{point.location}</span>
              </div>
            )}
          </div>

          <h3 className='text-xl font-semibold'>{point.title}</h3>
          <p className='text-muted-foreground leading-relaxed'>{point.description}</p>

          <div className='bg-accent p-4 border-l-4 border-primary'>
            <div className='flex items-start gap-2'>
              <Quote className='w-4 h-4 text-primary mt-1 flex-shrink-0' />
              <p className='text-sm font-medium italic'>{point.lesson}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AnimatedTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  // Get overall scroll progress for the entire section
  const { scrollYProgress: sectionProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate which turning point is currently active based on scroll position
  const rawProgress = useTransform(scrollYProgress, [0, 1], [0, turningPoints.length - 1]);
  const currentPointIndex = useTransform(rawProgress, (value) => Math.max(0, Math.min(Math.floor(value), turningPoints.length - 1)));

  // Display number (1-based instead of 0-based)
  const displayNumber = useTransform(currentPointIndex, (value) => value + 1);

  // Calculate dot position behavior:
  // - Before timeline: stick to first position
  // - During timeline: fixed in center of screen
  // - After timeline: stick to last position
  const dotPosition = useTransform(sectionProgress, (progress) => {
    if (progress < 0.2) {
      // Before timeline starts - stick to first item
      return "absolute";
    } else if (progress > 0.8) {
      // After timeline ends - stick to last item
      return "absolute";
    } else {
      // During timeline - fixed in center
      return "fixed";
    }
  });

  const dotTop = useTransform(sectionProgress, (progress) => {
    if (progress < 0.2) {
      // Stick to first item position
      return "3rem"; // Approximate position of first item
    } else if (progress > 0.8) {
      // Stick to last item position  
      return "calc(100% - 5rem)"; // Approximate position of last item
    } else {
      // Fixed in center of screen
      return "50vh";
    }
  });

  const dotLeft = useTransform(sectionProgress, (progress) => {
    if (progress < 0.2 || progress > 0.8) {
      // When sticky, position relative to timeline
      return "1.5rem";
    } else {
      // When fixed, calculate absolute position from viewport edge
      return "calc(1.5rem + 1rem + 4px)"; // Account for container padding
    }
  });

  return (
    <div ref={containerRef}>
      {/* Timeline line - moves with content */}
      <div ref={timelineRef} className='absolute left-6 top-0 bottom-8 w-0.5'>
        <div className='absolute w-full h-full bg-border rounded-full'></div>

        {/* Animated progress line */}
        <motion.div
          className='absolute w-full bg-primary rounded-full origin-top'
          style={{
            scaleY: scrollYProgress,
          }}
        />
      </div>

      {/* Dynamic dot that changes positioning behavior */}
      <motion.div
        className='w-12 h-12 bg-primary border-4 border-background rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm shadow-lg z-50 pointer-events-none'
        style={{
          position: dotPosition,
          left: dotLeft,
          top: dotTop,
          y: "-50%",
        }}
      >
        <motion.span>{displayNumber}</motion.span>
      </motion.div>
    </div>
  );
}

export default function TurningPointsSection() {
  return (
    <section className='space-y-8 border-b border-foreground/10 pb-16'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold tracking-tight mb-4'>The Turning Points</h2>
        <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
          Every journey has moments that change everything. Here are the pivotal experiences that shaped who I am today.
        </p>
      </div>

      <div className='relative space-y-8'>
        <AnimatedTimeline />

        {turningPoints.map((point, index) => (
          <TurningPointItem
            key={index}
            point={point}
          />
        ))}
      </div>
    </section>
  );
}