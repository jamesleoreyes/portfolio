export default function SoftSkills() {
  return (
    <section className='space-y-6'>
      <h2 className='text-center sm:text-left text-3xl font-bold tracking-tight'>Soft Skills</h2>
      <div className='flex flex-col items-center sm:items-start sm:grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className="space-y-3">
          <h3 className="text-center sm:text-left text-xl font-semibold">Communication</h3>
          <p className="text-center sm:text-left text-muted-foreground">
            Clear, transparent communication across teams and stakeholders
          </p>
        </div>
        <div className='space-y-3'>
          <h3 className='text-center sm:text-left text-xl font-semibold'>Collaboration</h3>
          <p className='text-center sm:text-left text-muted-foreground'>
            Working effectively with diverse teams to achieve shared goals
          </p>
        </div>
        <div className='space-y-3'>
          <h3 className='text-center sm:text-left text-xl font-semibold'>Openness to Feedback</h3>
          <p className='text-center sm:text-left text-muted-foreground'>
            Actively seeking and incorporating constructive feedback for growth
          </p>
        </div>
        <div className='space-y-3'>
          <h3 className='text-center sm:text-left text-xl font-semibold'>Adaptability</h3>
          <p className='text-center sm:text-left text-muted-foreground'>
            Embracing change and adjusting approaches based on new requirements
          </p>
        </div>
        <div className='space-y-3'>
          <h3 className='text-center sm:text-left text-xl font-semibold'>Curiosity</h3>
          <p className='text-center sm:text-left text-muted-foreground'>
            Driven by genuine interest in understanding problems and solutions
          </p>
        </div>
        <div className='space-y-3'>
          <h3 className='text-center sm:text-left text-xl font-semibold'>Continuous Learning</h3>
          <p className='text-center sm:text-left text-muted-foreground'>
            Committed to staying current with technologies and best practices
          </p>
        </div>
        <div className='space-y-3'>
          <h3 className='text-center sm:text-left text-xl font-semibold'>Empathy</h3>
          <p className='text-center sm:text-left text-muted-foreground'>
            Understanding user needs and team perspectives to build better solutions
          </p>
        </div>
        <div className='space-y-3'>
          <h3 className='text-center sm:text-left text-xl font-semibold'>Accountability</h3>
          <p className='text-center sm:text-left text-muted-foreground'>
            Taking ownership of decisions, code quality, and project outcomes
          </p>
        </div>
      </div>
    </section>
  );
}