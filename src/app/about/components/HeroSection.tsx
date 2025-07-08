import Image from "next/image";
import { assets } from "@/configs/app";

export default function HeroSection() {
  return (
    <section>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-10 text-center lg:text-left space-y-8 lg:space-y-0' >
        <Image
          src={assets.images.profile.me}
          alt='James Reyes'
          width={300}
          height={300}
          className='shadow-2xl'
          draggable={false}
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