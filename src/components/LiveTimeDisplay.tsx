'use client';

import { useState, useEffect } from 'react';
import { getEasternTimezone, getCurrentEasternTime } from '@/lib/utils';
import { Skeleton } from './ui/skeleton';

interface LiveTimeDisplayProps {
  className?: string;
}

export default function LiveTimeDisplay({ className }: LiveTimeDisplayProps) {
  const [timeData, setTimeData] = useState<{
    timezone: string;
    currentTime12Hr: string;
    currentTime24Hr: string;
  } | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const updateTime = () => {
      setTimeData({
        timezone: getEasternTimezone(),
        currentTime12Hr: getCurrentEasternTime(),
        currentTime24Hr: getCurrentEasternTime(true),
      });
    };

    updateTime();

    const now = new Date();
    const secondsUntilNextMinute = 60 - now.getSeconds();
    const millisecondsUntilNextMinute = (secondsUntilNextMinute * 1000) - now.getMilliseconds();

    const initialTimeout = setTimeout(() => {
      updateTime();
      interval = setInterval(updateTime, 60000);
    }, millisecondsUntilNextMinute);

    return () => {
      clearTimeout(initialTimeout);
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  if (!timeData) {
    return (
      <div className={className}>
        <Skeleton className='w-25 h-4' />
        <Skeleton className='w-27 h-3' />
      </div>
    );
  }

  return (
    <div>
      <p className='text-muted-foreground'>{timeData.timezone}</p>
      <p className='text-sm text-muted-foreground'>
        {timeData.currentTime12Hr} / {timeData.currentTime24Hr}
      </p>
    </div>
  );
}