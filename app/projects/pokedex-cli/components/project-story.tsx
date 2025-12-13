export default function ProjectStory() {
  return (
    <section className="py-16 w-full px-4 border-t border-border/50">
      <div className='max-w-4xl mx-auto space-y-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-primary mb-4'>The Story Behind This Project</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            From concept to deployment, here&apos;s the journey of building a portfolio that represents
            both technical expertise and design sensibility.
          </p>
        </div>

        <div className='space-y-4'>
          <div className='bg-accent/30 p-8 border border-border'>
            <h3 className='text-xl font-semibold text-primary mb-4'>Design Philosophy</h3>
            <p className='text-foreground leading-relaxed mb-4'>
              This portfolio was built with a clear vision: create a digital presence that not only showcases
              my work but also demonstrates my technical capabilities. Every design decision was intentional,
              from the carefully chosen color palette that works seamlessly across light and dark modes
              to the typography system that ensures excellent readability.
            </p>
            <p className='text-foreground leading-relaxed'>
              The layout follows a mobile-first approach, ensuring that the experience is optimized for
              every device. The component architecture is modular and reusable, making the codebase
              maintainable and scalable for future enhancements.
            </p>
          </div>

          <div className='bg-primary/5 p-8 border border-border'>
            <h3 className='text-xl font-semibold text-primary mb-4'>Technical Approach</h3>
            <p className='text-foreground leading-relaxed mb-4'>
              Leveraging some of the latest features of Next.js 15 and React 19, this portfolio showcases
              modern web development practices. The use of Server Components where appropriate,
              combined with strategic client-side interactivity, results in an application that
              loads fast and feels responsive.
            </p>
            <p className='text-foreground leading-relaxed'>
              The development process emphasized performance from the ground up. Every image is
              optimized and every component is designed to minimize re-renders. The result is a
              portfolio that achieves a seamless user experience without sacrificing functionality
              or visual appeal.
            </p>
          </div>

          <div className='bg-secondary/50 p-8 border border-border'>
            <h3 className='text-xl font-semibold text-primary mb-4'>Continuous Improvement</h3>
            <p className='text-foreground leading-relaxed'>
              This portfolio is a living project that evolves with my skills and the web platform itself.
              Regular updates ensure compatibility with the latest browser features and web standards.
              The codebase serves as both a showcase and a testing ground for new technologies and
              development patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}