interface SkillProps {
  title: string;
  description: string;
}

function Skill({ title, description }: SkillProps) {
  return (
    <div className='space-y-3'>
      <h3 className='text-center sm:text-left text-xl font-semibold'>{title}</h3>
      <p className='text-center sm:text-left text-muted-foreground'>{description}</p>
    </div>
  )
}

export default function SoftSkills() {
  return (
    <section className='space-y-6'>
      <h2 className='text-center sm:text-left text-3xl font-bold tracking-tight'>Soft Skills</h2>
      <div className='flex flex-col items-center sm:items-start sm:grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Skill title="Communication" description="Clear, transparent communication across teams and stakeholders" />
        <Skill title="Collaboration" description="Working effectively with diverse teams to achieve shared goals" />
        <Skill title="Openness to Feedback" description="Actively seeking and incorporating constructive feedback for growth" />
        <Skill title="Adaptability" description="Embracing change and adjusting approaches based on new requirements" />
        <Skill title="Curiosity" description="Driven by genuine interest in understanding problems and solutions" />
        <Skill title="Continuous Learning" description="Committed to staying current with technologies and best practices" />
        <Skill title="Empathy" description="Understanding user needs and team perspectives to build better solutions" />
        <Skill title="Accountability" description="Taking ownership of decisions, code quality, and project outcomes" />
      </div>
    </section>
  );
}