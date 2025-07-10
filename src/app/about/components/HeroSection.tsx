import ProfileImage from "@/components/ProfileImage";

export default function HeroSection() {
  return (
    <section>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-10 text-center lg:text-left space-y-8 lg:space-y-0'>
        <ProfileImage
          width={300}
          height={300}
          priority={true}
          sizes='(max-width: 768px) 70vw, (max-width: 1200px) 280px, 300px'
          alt='James Reyes'
        />
        <div className='space-y-4'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight'>
            About Me
          </h1>
          <p className='text-xl text-muted-foreground max-w-2xl'>
            Hi, I&apos;m James Reyes, a Full-Stack Product Engineer who loves building meaningful software that makes a difference.
          </p>
        </div>
      </div>
    </section>
  );
}