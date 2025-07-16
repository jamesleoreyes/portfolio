import { Trophy, TrendingUp, Users, Zap, Target, Rocket, Shield, Building, Award } from 'lucide-react';
import { experienceData } from '@/data';

function AchievementCard({ achievement, icon: Icon, color }: {
  achievement: typeof experienceData.experiences[0]['achievements'][0];
  icon: React.ElementType;
  color: string;
}) {
  return (
    <div className='bg-accent border border-foreground/10 p-6 hover:shadow-md transition-shadow flex flex-col h-full'>
      <div className={`p-3 ${color} text-white mb-4 flex items-center justify-center`}>
        <Icon className='w-6 h-6' />
      </div>

      <div className='flex-1 flex flex-col'>
        <div className='mb-4'>
          <h3 className='text-lg font-semibold mb-2 text-primary'>{achievement.title}</h3>
          <p className='text-muted-foreground mb-0'>{achievement.description}</p>
        </div>

        <div className='bg-primary/10 p-3 border border-primary/20 mb-4'>
          <div className='flex items-center gap-2 mb-1'>
            <Target className='w-5 h-5 text-primary' />
            <span className='font-medium text-primary text-lg'>Impact</span>
          </div>
          <p className='text-accent-foreground'>{achievement.impact}</p>
        </div>

        {achievement.metrics && (
          <div className='bg-background p-3 border border-foreground/10 text-center mt-auto'>
            <p className='text-primary/70 mb-1 text-lg'>Key Metric</p>
            <p className='text-lg font-bold text-primary'>{achievement.metrics}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function KeyAchievements() {
  // Flatten all achievements from all experiences
  const allAchievements = experienceData.experiences.flatMap(exp => exp.achievements);

  // Define unique icons and colors for different achievements
  const achievementStyles = [
    { icon: Rocket, color: 'bg-blue-600' },
    { icon: TrendingUp, color: 'bg-green-700' },
    { icon: Zap, color: 'bg-purple-700' },
    { icon: Users, color: 'bg-orange-700' },
    { icon: Shield, color: 'bg-red-700' },
    { icon: Building, color: 'bg-indigo-700' },
    { icon: Trophy, color: 'bg-yellow-600' },
    { icon: Award, color: 'bg-teal-700' },
  ];

  return (
    <section className='space-y-8 border-b border-foreground/10 pb-16'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold tracking-tight mb-4'>Key Achievements</h2>
        <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
          Highlighting the most significant accomplishments and impacts across all professional experiences.
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2 items-stretch'>
        {allAchievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            achievement={achievement}
            icon={achievementStyles[index % achievementStyles.length]!.icon}
            color={achievementStyles[index % achievementStyles.length]!.color}
          />
        ))}
      </div>

      <div className='bg-primary/5 p-8 border border-primary/20 text-center'>
        <h3 className='text-xl font-semibold mb-4'>Achievement Summary</h3>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div className='space-y-2'>
            <div className='text-2xl font-bold text-primary'>100K+</div>
            <div className='text-muted-foreground'>Events Processed</div>
          </div>
          <div className='space-y-2'>
            <div className='text-2xl font-bold text-primary'>95%</div>
            <div className='text-muted-foreground'>Task Automation</div>
          </div>
          <div className='space-y-2'>
            <div className='text-2xl font-bold text-primary'>90%</div>
            <div className='text-muted-foreground'>Cost Reduction</div>
          </div>
          <div className='space-y-2'>
            <div className='text-2xl font-bold text-primary'>95%</div>
            <div className='text-muted-foreground'>Less Manual Work</div>
          </div>
        </div>
      </div>
    </section>
  );
}