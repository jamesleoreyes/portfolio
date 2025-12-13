type ContactMethod = {
  name: string;
  description: string;
  url: string;
  icon: React.ElementType;
}

type SocialLink = {
  name: string;
  url: string;
  color: string;
  icon: React.ElementType;
}

type Availability = {
  day: string;
  time: string;
}

type ContactInfo = {
  email: string;
  location: string;
  availability: Availability[];
}

type ContactData = {
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