import Link from "next/link";
import { resumeData } from "../data";

function SkillCategory({ title, skills }: { title: string; skills: Array<{ name: string; icon: React.ElementType; url: string }> }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-4">
        {skills.map(({ name, icon: IconComponent, url }) => (
          <Link
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-muted/50 hover:bg-muted px-3 py-2 transition-colors group"
            title={name}
          >
            <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">{name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function TechnicalSkills() {
  const { skills } = resumeData;

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-primary border-b pb-2">Technical Skills</h2>
      <div className="space-y-6">
        <SkillCategory title="Programming Languages" skills={skills.languages} />
        <SkillCategory title="Frontend Development" skills={skills.frontend} />
        <SkillCategory title="Backend Development" skills={skills.backend} />
        <SkillCategory title="DevOps & Tools" skills={skills.devops} />
        <SkillCategory title="Cloud & Infrastructure" skills={skills.cloud} />
      </div>
    </section>
  );
}