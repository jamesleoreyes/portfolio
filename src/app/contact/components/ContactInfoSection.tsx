import { MapPin, Clock, Calendar } from "lucide-react";
import { contactData } from "../data";

export default function ContactInfoSection() {
  const { contactInfo } = contactData;

  return (
    <section className='space-y-6'>
      <h2 className='text-center sm:text-left text-3xl font-bold tracking-tight'>Contact Information</h2>

      <div className='grid gap-6 md:grid-cols-3'>
        <div className='text-center sm:text-left space-y-3'>
          <div className='flex items-center justify-center sm:justify-start gap-2'>
            <MapPin className='w-5 h-5 text-primary' />
            <h3 className='text-lg font-semibold'>Location</h3>
          </div>
          <p className='text-muted-foreground'>{contactInfo.location}</p>
        </div>

        <div className='text-center sm:text-left space-y-3'>
          <div className='flex items-center justify-center sm:justify-start gap-2'>
            <Clock className='w-5 h-5 text-primary' />
            <h3 className='text-lg font-semibold'>Timezone</h3>
          </div>
          <p className='text-muted-foreground'>{contactInfo.timezone}</p>
        </div>

        <div className='text-center sm:text-left space-y-3'>
          <div className='flex items-center justify-center sm:justify-start gap-2'>
            <Calendar className='w-5 h-5 text-primary' />
            <h3 className='text-lg font-semibold'>Availability</h3>
          </div>
          <div className='text-muted-foreground'>
            <ul className='list-none space-y-1'>
              {contactInfo.availability.map((day) => (
                <li key={day.day}>{day.day}: <span className='font-bold'>{day.time}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='bg-accent p-6 border border-foreground/10 text-center'>
        <h3 className='text-lg font-semibold mb-3'>Response Time</h3>
        <p className='text-muted-foreground leading-relaxed'>
          I try to respond to all messages within 48 hours. I&apos;m always excited to discuss new opportunities,
          collaborate on ideas, or just connect with fellow developers and creators!
        </p>
      </div>
    </section>
  );
}