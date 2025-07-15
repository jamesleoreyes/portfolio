export default function FAQPageSchema() {
  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Who is James Reyes?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'James Reyes is a Full-Stack Product Engineer specializing in TypeScript, React, Next.js, and modern web development. He builds scalable, user-focused applications and is currently seeking full-stack engineering opportunities.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What does James Reyes do?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'James Reyes is a Full-Stack Product Engineer who builds web applications using modern technologies like React, Next.js, TypeScript, and Node.js. He focuses on creating scalable, maintainable software solutions.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Where is James Reyes located?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'James Reyes is based in South Carolina and is available for remote work opportunities.'
        }
      }
    ]
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqPageSchema)
      }}
    />
  );
} 