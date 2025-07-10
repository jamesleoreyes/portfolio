'use client';

import { toast } from "sonner";
import { Cookie } from "@/components";

export default function CalEmbedSection() {
  return (
    <section className='space-y-6'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold tracking-tight mb-4'>Schedule a Meeting</h2>
        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
          Book a 30-minute call directly in my calendar. Perfect for discussing opportunities, projects, or just having a chat.
        </p>
      </div>

      <div className='bg-card border border-foreground/10 overflow-hidden'>
        <div className='w-full h-[600px] flex flex-col items-center justify-center gap-2'>
          <h3 className='text-2xl font-medium'>Working on it...</h3>
          <p className='text-sm text-muted-foreground max-w-md text-center'>
            In the meantime, here is a cookie for you!
          </p>
          <p
            className='mt-2 cursor-pointer select-none hover:scale-105 transition-all duration-200'
            onClick={() => {
              toast.info('*nom nom* 🍪 Delicious!')
            }}
          >
            <Cookie className='w-48 h-48' />
          </p>
        </div>
      </div>

      <div className='text-center'>
        <p className='text-sm text-muted-foreground'>
          All meetings are conducted via Google Meet. You&apos;ll receive a calendar invite with the meeting link after booking.
        </p>
      </div>
    </section>
  );
} 