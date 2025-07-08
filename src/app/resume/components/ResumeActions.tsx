'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Share2 } from 'lucide-react';
import { toast } from 'sonner';

export default function ResumeActions() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'James Reyes - Resume',
          text: 'Check out James Reyes\' professional resume',
          url: window.location.href,
        });
      } catch {
        toast.error('Error sharing');
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('URL copied to clipboard');
      } catch {
        toast.error('Failed to copy URL');
      }
    }
  };

  return (
    <div className="flex gap-2">
      <Button variant="ghost" size="sm" onClick={handleShare}>
        <Share2 className="w-4 h-4 mr-2" />
        Share
      </Button>
      <Button asChild size="sm">
        <Link href="/api/resume" download>
          <Download className="w-4 h-4" />
          Download PDF
        </Link>
      </Button>
    </div>
  );
} 