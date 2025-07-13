import { Trophy, TrendingUp, Users, Zap } from 'lucide-react';
import { experienceData } from '../data';

function AchievementCard({ achievement, icon: Icon, color }: {
  achievement: typeof experienceData.experiences[0]['achievements'][0];
  icon: React.ElementType;
  color: string;
}) {
  return (
    <div className='bg-accent border border-foreground/10 p-6 space-y-4 hover:shadow-md transition-shadow'>
      <div className='flex items-start gap-4'>
        <div className={`p-3 ${color} text-white flex-shrink-0`}>
          <Icon className='w-6 h-6' />
        </div>
        <div className='flex-1'>
          <h3 className='text-lg font-semibold mb-2'>{achievement.title}</h3>
          <p className='text-muted-foreground text-sm mb-3'>{achievement.description}</p>
          <div className='bg-primary/10 p-3 border border-primary/20'>
            <p className='text-sm font-medium text-primary mb-1'>Impact</p>
            <p className='text-sm text-muted-foreground'>{achievement.impact}</p>
          </div>
        </div>
      </div>
      {achievement.metrics && (
        <div className='bg-background p-3 border border-foreground/10 text-center'>
          <p className='text-xs text-muted-foreground mb-1'>Key Metric</p>
          <p className='text-lg font-bold text-primary'>{achievement.metrics}</p>
        </div>
      )}
    </div>
  );
}

export default function KeyAchievements() {
  // Flatten all achievements from all experiences
  const allAchievements = experienceData.experiences.flatMap(exp => exp.achievements);

  // Define icons and colors for different types of achievements
  const achievementStyles = [
    { icon: Trophy, color: 'bg-yellow-500' },
    { icon: TrendingUp, color: 'bg-green-500' },
    { icon: Users, color: 'bg-blue-500' },
    { icon: Zap, color: 'bg-purple-500' },
    { icon: Trophy, color: 'bg-red-500' },
    { icon: TrendingUp, color: 'bg-indigo-500' },
    { icon: Users, color: 'bg-pink-500' },
    { icon: Zap, color: 'bg-orange-500' },
    { icon: Trophy, color: 'bg-teal-500' },
  ];

  return (
    <section className='space-y-8 border-b border-foreground/10 pb-16'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold tracking-tight mb-4'>Key Achievements</h2>
        <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
          Highlighting the most significant accomplishments and impacts across all professional experiences.
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
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
            <div className='text-sm text-muted-foreground'>Events Processed</div>
          </div>
          <div className='space-y-2'>
            <div className='text-2xl font-bold text-primary'>98%</div>
            <div className='text-sm text-muted-foreground'>Task Automation</div>
          </div>
          <div className='space-y-2'>
            <div className='text-2xl font-bold text-primary'>90%</div>
            <div className='text-sm text-muted-foreground'>Cost Reduction</div>
          </div>
          <div className='space-y-2'>
            <div className='text-2xl font-bold text-primary'>95%</div>
            <div className='text-sm text-muted-foreground'>Less Manual Work</div>
          </div>
        </div>
      </div>
    </section>
  );
}