import Link from "next/link";
import { Button, Card, CardContent, CardHeader, CardFooter } from "@/components";
import { contactData } from "../../../data/contact";

export default function ContactMethodsSection() {
  const primaryMethods = contactData.contactMethods;

  return (
    <section className='space-y-8 border-b border-foreground/10 pb-16'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold tracking-tight mb-4'>Get In Touch</h2>
        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
          Choose the method that works best for you. I typically respond within 48 hours.
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        {primaryMethods.map((method) => {
          const IconComponent = method.icon;
          return (
            <Card key={method.name} className='border border-foreground/10 bg-accent space-y-4 hover:shadow-md transition-shadow'>
              <CardHeader className='flex items-center gap-3'>
                <div className='bg-primary text-primary-foreground p-2'>
                  <IconComponent className='w-5 h-5' />
                </div>
                <h3 className='text-xl font-semibold'>{method.name}</h3>
              </CardHeader>
              <CardContent className='text-muted-foreground leading-relaxed'>
                {method.description}
              </CardContent>
              <CardFooter>
                <Button asChild className='w-full'>
                  <Link
                    href={method.url}
                    target={method.url.startsWith('http') ? '_blank' : undefined}
                    rel={method.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {method.name === 'Schedule a Call' ? 'Book a Meeting' : 'Contact Now'}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <div className='text-center'>
        <p className='text-sm text-muted-foreground'>
          All meetings are conducted via Google Meet. You&apos;ll receive a calendar invite with the meeting link after booking.
        </p>
      </div>
    </section>
  );
}