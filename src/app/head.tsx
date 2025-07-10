import { assets, urlConfig } from "@/configs/app";

export default function Head() {
  return (
    <head>
      <link
        rel="preload"
        href={assets.images.profile.me}
        as="image"
        type="image/jpeg"
        fetchPriority="high"
      />

      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            'name': 'James Reyes',
            'url': urlConfig.app,
            'image': `${urlConfig.app}${assets.images.og}`,
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