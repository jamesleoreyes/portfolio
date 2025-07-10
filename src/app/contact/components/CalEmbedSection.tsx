'use client';

import { useEffect } from 'react';

export default function CalEmbedSection() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className='space-y-6'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold tracking-tight mb-4'>Schedule a Meeting</h2>
        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
          Book a 30-minute call directly in my calendar. Perfect for discussing opportunities, projects, or just having a chat.
        </p>
      </div>

      <div className='bg-card border border-foreground/10 overflow-hidden'>
        {/* Cal.com embed */}
        <div
          data-cal-link="jamesleoreyes"
          data-cal-config='{"layout":"month_view","theme":"auto"}'
          style={{ width: '100%', height: '600px', overflow: 'scroll' }}
        />
      </div>

      <div className='text-center'>
        <p className='text-sm text-muted-foreground'>
          All meetings are conducted via Google Meet. You&apos;ll receive a calendar invite with the meeting link after booking.
        </p>
      </div>
    </section>
  );
} 