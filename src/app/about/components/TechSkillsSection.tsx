import Link from "next/link";
import type { TechnicalSkills } from "@/app/about/data";

export default function TechSkills({ techSkills }: { techSkills: TechnicalSkills }) {
  return (
    <section className='space-y-6'>
      <h2 className='text-center sm:text-left text-3xl font-bold tracking-tight'>Technical Skills</h2>
      <div className='flex flex-col gap-6'>
        <div className="space-y-3">
          <h3 className="text-center sm:text-left text-xl font-semibold">Languages</h3>
          <ul className="flex justify-center sm:justify-start text-center sm:text-left gap-3 text-foreground">
            {techSkills.languages.map(({ name, icon: IconComponent, url }) => {
              return (
                <li key={name} className="flex items-center gap-2" title={name} aria-label={name}>
                  <Link href={url} target='_blank' rel='noopener noreferrer'>
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" title={name} aria-label={name} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='space-y-3'>
          <h3 className='text-center sm:text-left text-xl font-semibold'>Frontend Development</h3>
          <ul className="flex justify-center sm:justify-start text-center sm:text-left gap-3 text-foreground">
            {techSkills.frontend.map(({ name, icon: IconComponent, url }) => {
              return (
                <li key={name} className="flex items-center gap-2" title={name} aria-label={name}>
                  <Link href={url} target='_blank' rel='noopener noreferrer'>
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" title={name} aria-label={name} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='space-y-3'>
          <h3 className='text-center sm:text-left text-xl font-semibold'>Backend Development</h3>
          <ul className="flex justify-center sm:justify-start text-center sm:text-left gap-3 text-foreground">
            {techSkills.backend.map(({ name, icon: IconComponent, url }) => {
              return (
                <li key={name} className="flex items-center gap-2" title={name} aria-label={name}>
                  <Link href={url} target='_blank' rel='noopener noreferrer'>
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" title={name} aria-label={name} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='space-y-3'>
          <h3 className='text-center sm:text-left text-xl font-semibold'>Tooling & DevOps</h3>
          <ul className='flex justify-center sm:justify-start text-center sm:text-left gap-3 text-foreground'>
            {techSkills.devops.map(({ name, icon: IconComponent, url }) => {
              return (
                <li key={name} className="flex items-center gap-2" title={name} aria-label={name}>
                  <Link href={url} target='_blank' rel='noopener noreferrer'>
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" title={name} aria-label={name} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='space-y-3'>
          <h3 className='text-center sm:text-left text-xl font-semibold'>Cloud & Infrastructure</h3>
          <ul className='flex justify-center sm:justify-start text-center sm:text-left gap-3 text-foreground'>
            {techSkills.cloud.map(({ name, icon: IconComponent, url }) => {
              return (
                <li key={name} className="flex items-center gap-2" title={name} aria-label={name} >
                  <Link href={url} target='_blank' rel='noopener noreferrer'>
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" title={name} aria-label={name} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}