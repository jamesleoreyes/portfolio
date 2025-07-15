import { Globe, Mail } from "lucide-react";
import Link from "next/link";
import { resumeData } from "@/data";

export default function ResumeHero() {
  const { personalInfo } = resumeData;

  return (
    <header className="bg-primary text-primary-foreground p-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
        <p className="text-xl">{personalInfo.title}</p>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <Link
              href={`mailto:${personalInfo.contact.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {personalInfo.contact.email}
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <Link
              href={`https://${personalInfo.contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {personalInfo.contact.website}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}