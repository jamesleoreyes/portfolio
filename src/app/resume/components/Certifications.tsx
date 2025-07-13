import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { resumeData } from "../data";
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from "@/components/ui/card";

export default function Certifications() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-primary border-b pb-2">Certifications</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {resumeData.certifications.map((cert, index) => (
          <Card key={index} className='border border-foreground/10 py-4 bg-accent'>
            <CardHeader>
              <CardTitle>{cert.name}</CardTitle>
              <CardDescription>{cert.issuer}</CardDescription>
              {cert.url && (
                <CardAction>
                  <Link
                    href={cert.url}
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
                {cert.date !== 'In Progress' ? <p>Issued: {cert.date}</p> : <p>In Progress</p>}
                {cert.credentialId && <p>Credential ID: {cert.credentialId}</p>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}