import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { resumeData } from "../data";

export default function Certifications() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-primary border-b border-primary/20 pb-2">Certifications</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {resumeData.certifications.map((cert, index) => (
          <div key={index} className="border p-4 space-y-2 bg-muted-foreground/10">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="text-sm text-primary">{cert.issuer}</p>
              </div>
              {cert.url && (
                <Link
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              )}
            </div>
            <div className="text-sm text-muted-foreground">
              {cert.date !== 'In Progress' ? <p>Issued: {cert.date}</p> : <p>In Progress</p>}
              {cert.credentialId && <p>Credential ID: {cert.credentialId}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 