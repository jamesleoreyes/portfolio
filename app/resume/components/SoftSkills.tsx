import { resumeData } from '@/src/data';
import type { SoftSkill } from '@_types/Resume';

function SkillItem({ skill }: { skill: SoftSkill }) {
  const { name, description, icon: IconComponent } = skill;

  return (
    <div className="bg-accent p-4 hover:shadow-md transition">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1">
          <IconComponent className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">{name}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function SoftSkills() {
  const { softSkills } = resumeData;

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-primary border-b pb-2">Soft Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {softSkills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}