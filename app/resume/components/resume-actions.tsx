'use client';

import Link from 'next/link';
import { Button } from '@/src/components';
import { Download, Share } from 'lucide-react';
import { toast } from 'sonner';

export default function ResumeActions() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'James Reyes — Resume',
          text: 'Check out James Reyes\' professional resume',
          url: window.location.href,
        });
        toast.success('URL shared successfully');
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          toast.warning('Sharing cancelled');
        } else {
          toast.error('Failed to share');
        }
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
      <Button
        variant="ghost"
        size="lg"
        onClick={handleShare}
        className='text-primary'
      >
        <Share />
        Share
      </Button>
      <Button asChild size="lg">
        <Link href="/api/resume" download>
          <Download />
          Download PDF
        </Link>
      </Button>
    </div>
  );
}