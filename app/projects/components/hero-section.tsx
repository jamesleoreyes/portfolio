export default function HeroSection() {
  return (
    <section className="border-b border-border/50 py-16 w-full px-4">
      <div className='max-w-4xl mx-auto text-center space-y-8'>
        <div className='space-y-4'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary'>
            My Projects
          </h1>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            A collection of applications and solutions I&apos;ve built.
            Each project represents a unique challenge and a learning opportunity.
          </p>
        </div>
      </div>
    </section>
  );
}