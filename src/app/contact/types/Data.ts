interface ContactMethod {
  name: string;
  description: string;
  url: string;
  icon: React.ElementType;
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
}

interface Availability {
  day: string;
  time: string;
}

interface ContactInfo {
  email: string;
  location: string;
  timezone: string;
  availability: Availability[];
}

interface ContactData {
  contactInfo: ContactInfo;
  contactMethods: ContactMethod[];
  socialLinks: SocialLink[];
}

export type {
  ContactMethod,
  SocialLink,
  ContactInfo,
  ContactData
}; 