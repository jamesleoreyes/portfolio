import type { ReactNode } from "react";
import { Code, Music, Truck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface JourneySectionProps {
  className?: string;
}

interface JourneyItem {
  title: string;
  description: string;
  icon: ReactNode;
}

const journeyItems: JourneyItem[] = [
  {
    title: 'Early Coding',
    description: 'Started with Visual Basic as a kid, making desktop apps from YouTube tutorials',
    icon: <Code className='w-6 h-6 text-primary' />
  },
  {
    title: 'Creative Years',
    description: 'Dove deep into filmmaking, photography, and music production — mastering the art of creation',
    icon: <Music className='w-6 h-6 text-primary' />
  },
  {
    title: 'Reality Check',
    description: 'FedEx delivery driver, Instacart, Aldi — learning the value of hard work while searching for my path',
    icon: <Truck className='w-6 h-6 text-primary' />
  },
  {
    title: 'The Spark',
    description: 'ChatGPT launched, and everything clicked. I found my way back to code — this time for real',
    icon: <Zap className='w-6 h-6 text-primary' />
  }
]

function JourneyItem({ title, description, icon }: JourneyItem) {
  return (
    <div className='text-center space-y-3'>
      <div className='mx-auto w-12 h-12 bg-primary/10 flex items-center justify-center'>
        {icon}
      </div>
      <h3 className='font-semibold'>{title}</h3>
      <p className='text-muted-foreground'>{description}</p>
    </div>
  );
}

export default function JourneySection({ className }: JourneySectionProps) {
  return (
    <section className={cn("border-b border-border/50 py-16 w-full", className)}>
      <div className='max-w-4xl mx-auto space-y-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight mb-4'>The Journey So Far</h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            My path to software engineering wasn&apos;t linear. It was more like a spiral — circling back to childhood interests,
            taking unexpected detours through music and manual labor, until everything clicked into place.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {journeyItems.map((item) => (
            <JourneyItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}