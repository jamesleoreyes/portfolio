'use client';

import { Analytics } from '@vercel/analytics/next';

const OPT_OUT_KEY = 'jlr:disable_analytics';

export function AnalyticsClient() {
  return (
    <Analytics
      beforeSend={(event) => {
        try {
          if (localStorage.getItem(OPT_OUT_KEY) === '1') return null;
        } catch {
          // Ignore errors
        }
        return event;
      }}
    />
  );
}
