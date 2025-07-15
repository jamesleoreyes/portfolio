import { Mail, Calendar } from 'lucide-react';
import { ContactData } from '@/types/Contact';
import * as Icons from '@/components/icons';

const contactData: ContactData = {
  contactInfo: {
    email: 'jamesleoreyes@gmail.com',
    location: 'Charlotte, NC',
    availability: [
      { day: 'Sunday & Saturday', time: '2 PM - 5 PM' },
      { day: 'Monday - Friday', time: '5 PM - 8 PM' },
    ],
  },
  contactMethods: [
    {
      name: 'Schedule a Call',
      description: 'Book a 30-minute call to discuss opportunities, projects, or just to connect.',
      url: 'https://cal.com/jamesleoreyes',
      icon: Calendar,
    },
    {
      name: 'Send an Email',
      description: 'Reach out directly via email for any inquiries or collaboration opportunities.',
      url: 'mailto:jamesleoreyes@gmail.com',
      icon: Mail,
    },
  ],
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/jamesleoreyes',
      icon: Icons.GitHub
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jamesleoreyes',
      icon: Icons.LinkedIn
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/jamesleoreyes',
      icon: Icons.Twitter
    }
  ]
};

export { contactData };
export type { ContactData };