interface ValueProps {
  title: string;
  description: string;
}

function Value({ title, description }: ValueProps) {
  return (
    <div className='space-y-3'>
      <h3 className='text-center sm:text-left text-xl font-semibold'>{title}</h3>
      <p className='text-center sm:text-left text-muted-foreground leading-relaxed'>{description}</p>
    </div>
  )
}

export default function ValuesSection() {
  return (
    <section className='space-y-6'>
      <h2 className='text-center sm:text-left text-3xl font-bold tracking-tight'>My Approach</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Value title="User-Centered Design" description="Every technical decision I make is informed by how it will impact the end user. Great software should be intuitive and delightful to use." />
        <Value title="Clean Code" description="I believe in writing code that is not just functional, but readable, maintainable, and scalable. Future developers (including myself) will thank me later." />
        <Value title="Continuous Learning" description="Technology evolves rapidly, and I&apos;m committed to staying current with best practices, new tools, and emerging patterns in software development." />
        <Value title="Collaboration" description="The best products are built by teams. I value clear communication, empathy, and the diverse perspectives that make great software possible." />
      </div>
    </section>
  );
}