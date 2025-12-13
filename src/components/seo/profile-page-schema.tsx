export default function ProfilePageSchema() {
  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    'dateCreated': '2025-07-01',
    'dateModified': new Date().toISOString(),
    'mainEntity': {
      '@type': 'Person',
      'name': 'James Reyes',
      'identifier': 'jamesleoreyes',
      'description': 'Full-Stack Product Engineer specializing in modern web development'
    }
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(profilePageSchema)
      }}
    />
  );
}