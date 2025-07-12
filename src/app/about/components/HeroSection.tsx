import ProfileImage from "@/components/ProfileImage";

export default function HeroSection() {
  return (
    <section className="border-b border-foreground/10 pb-16">
      <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-10 text-center lg:text-left space-y-8 lg:space-y-0'>
        <ProfileImage
          width={300}
          height={300}
          priority={true}
          alt='James Reyes'
        />
        <div className='space-y-4'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight'>
            My Story
          </h1>
          <p className='text-xl text-muted-foreground max-w-2xl'>
            From childhood curiosity to creative exploration, unexpected detours to discovering my calling — here&apos;s the winding path that led me to become a Full-Stack Product Engineer.
          </p>
          <p className='text-lg text-primary'>
            It&apos;s been a circular journey, but every detour taught me something valuable.
          </p>
        </div>
      </div>
    </section>
  );
}