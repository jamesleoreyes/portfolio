import { resumeData } from '@/src/data';

function ExperienceItem({ experience }: { experience: typeof resumeData.experience[0] }) {
  return (
    <div className="border-l-4 border-primary/20 pl-6 relative">
      <div className="absolute -left-2.5 w-4 h-4 bg-primary"></div>

      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold text-primary">{experience.position}</h3>
            <p className="text-lg font-medium text-primary/60">{experience.company}</p>
          </div>
          <div className="text-sm text-muted-foreground text-right">
            <p>{experience.startDate} — {experience.endDate}</p>
            <p>{experience.location}</p>
          </div>
        </div>

        <p className="text-foreground leading-relaxed">
          {experience.description}
        </p>

        <div>
          <h4 className="font-semibold mb-2 text-primary">Key Achievements:</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-primary">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-accent hover:bg-primary/20 text-primary px-2 py-1 text-sm transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-primary border-b pb-2">Professional Experience</h2>
      <div className="space-y-8">
        {resumeData.experience.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
}