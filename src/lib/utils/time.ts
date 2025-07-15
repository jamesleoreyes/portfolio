export function getEasternTimezone(): string {
  const now = new Date();
  const easternTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    timeZoneName: 'short'
  }).formatToParts(now);
  const timeZoneName = easternTime.find(part => part.type === 'timeZoneName')?.value;
  return timeZoneName === 'EDT' ? 'EDT (UTC-4)' : 'EST (UTC-5)';
};

export function getCurrentEasternTime(military = false): string {
  const now = new Date();
  return now.toLocaleTimeString('en-US',
    {
      timeZone: 'America/New_York',
      hour: 'numeric',
      minute: 'numeric',
      hour12: military ? false : true,
    });
};