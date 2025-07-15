import { assets, urlConfig } from "@/configs/app";

export default function PersonSchema() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'James Reyes',
    'alternateName': ['James Leo Reyes', 'James L. Reyes'],
    'url': urlConfig.app,
    'image': `${urlConfig.app}${assets.images.profile.me}`,
    'sameAs': [
      'https://github.com/jamesleoreyes',
      'https://linkedin.com/in/jamesleoreyes',
      'https://twitter.com/jamesleoreyes'
    ],
    'jobTitle': 'Full-Stack Product Engineer',
    'description': 'Full-Stack Product Engineer specializing in TypeScript, React, Next.js, and modern web development. Building scalable, user-focused applications.',
    'knowsAbout': [
      'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
      'Full-Stack Development', 'Web Development', 'Software Engineering',
      'Product Engineering', 'User Experience', 'Frontend Development',
      'Backend Development', 'Database Design', 'API Development'
    ],
    'worksFor': {
      '@type': 'Organization',
      'name': 'Cimplx HR, Inc.',
      'url': 'https://cimplx.com'
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema)
      }}
    />
  );
} 