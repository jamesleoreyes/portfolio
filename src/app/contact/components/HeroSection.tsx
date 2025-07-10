import ProfileImage from "@/components/ProfileImage";

export default function HeroSection() {
  return (
    <section>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-10 text-center lg:text-left space-y-8 lg:space-y-0'>
        <ProfileImage
          width={300}
          height={300}
          priority={true}
          alt='James Reyes'
        />
        <div className='space-y-4'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight'>
            Let&apos;s Connect
          </h1>
          <p className='text-xl text-muted-foreground max-w-2xl'>
            I&apos;m always interested in new opportunities, meaningful projects, and connecting with fellow developers. Let&apos;s start a conversation!
          </p>
        </div>
      </div>
    </section>
  );
} 