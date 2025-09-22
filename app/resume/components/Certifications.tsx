import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { resumeData } from '@/src/data';
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from '@components/ui/card';
import { Progress, Tooltip, TooltipContent, TooltipTrigger } from '@/src/components';

export default function Certifications() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-primary border-b pb-2">Certifications</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {resumeData.certifications.map((cert, index) => (
          <Card key={index} className='border border-foreground/10 py-4 bg-accent shadow-none hover:shadow-md transition'>
            <CardHeader>
              <CardTitle>{cert.name}</CardTitle>
              <CardDescription>
                {cert.issuerUrl && (
                  <Link
                    href={cert.issuerUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:underline hover:text-foreground'
                  >
                    {cert.issuer}
                  </Link>
                )}
              </CardDescription>
              {cert.certUrl && (
                <CardAction>
                  <Link
                    href={cert.certUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </CardAction>
              )}
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                {cert.date !== 'In Progress' ? <p>Issued: {cert.date}</p> : (
                  <div className='space-y-2'>
                    <p>In Progress</p>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Progress
                          value={cert.completionProgress}
                          aria-label={`${cert.completionProgress}% complete`}
                          className='h-3'
                        />
                      </TooltipTrigger>
                      <TooltipContent className='shadow-lg'>
                        <span className="font-semibold">{cert.completionProgress}% complete</span>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                )}
                {cert.credentialId && <p>Credential ID: {cert.credentialId}</p>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}