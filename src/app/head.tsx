import { urlConfig } from "@/configs/app";


export default function Head() {
  return (
    <head>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            'name': 'James Reyes',
            'url': urlConfig.app,
            'image': `${urlConfig.app}/og-image.png`,
            'sameAs': [
              'https://github.com/jamesleoreyes',
              'https://linkedin.com/in/jamesleoreyes'
            ],
            'jobTitle': 'Full-Stack Product Engineer',
            'worksFor': {
              '@type': 'Organization',
              'name': 'Cimplx HR, Inc.',
              'url': 'https://cimplx.com'
            }
          })
        }}
      />
    </head>
  );
}