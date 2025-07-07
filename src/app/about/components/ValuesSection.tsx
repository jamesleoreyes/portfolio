export default function ValuesSection() {
  return (
    <section className='space-y-6'>
      <h2 className='text-center sm:text-left text-3xl font-bold tracking-tight'>My Approach</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='space-y-3'>
          <h3 className='text-center sm:text-left text-xl font-semibold'>User-Centered Design</h3>
          <p className='text-center sm:text-left text-muted-foreground leading-relaxed'>
            Every technical decision I make is informed by how it will impact the end user.
            Great software should be intuitive and delightful to use.
          </p>
        </div>
        <div className='space-y-3'>
          <h3 className='text-center sm:text-left text-xl font-semibold'>Clean Code</h3>
          <p className='text-center sm:text-left text-muted-foreground leading-relaxed'>
            I believe in writing code that is not just functional, but readable, maintainable,
            and scalable. Future developers (including myself) will thank me later.
          </p>
        </div>
        <div className='space-y-3'>
          <h3 className='text-center sm:text-left text-xl font-semibold'>Continuous Learning</h3>
          <p className='text-center sm:text-left text-muted-foreground leading-relaxed'>
            Technology evolves rapidly, and I&apos;m committed to staying current with best practices,
            new tools, and emerging patterns in software development.
          </p>
        </div>
        <div className='space-y-3'>
          <h3 className='text-center sm:text-left text-xl font-semibold'>Collaboration</h3>
          <p className='text-center sm:text-left text-muted-foreground leading-relaxed'>
            The best products are built by teams. I value clear communication, empathy,
            and the diverse perspectives that make great software possible.
          </p>
        </div>
      </div>
    </section>
  );
}