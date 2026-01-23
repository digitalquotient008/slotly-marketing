export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.slotly.com';

export const MVP_FEATURES = [
  {
    title: 'Simple Scheduling',
    description: 'Create event types and set availability in minutes',
    icon: '📅',
  },
  {
    title: 'Public Booking Pages',
    description: 'Shareable links for clients to book appointments',
    icon: '🔗',
  },
  {
    title: 'Built-in CRM',
    description: 'Auto-capture contacts and track booking history',
    icon: '👥',
  },
  {
    title: 'Booking Management',
    description: 'View, cancel, reschedule, and add notes to bookings',
    icon: '✏️',
  },
  {
    title: 'Email Notifications',
    description: 'Automatic confirmations for hosts and clients',
    icon: '📧',
  },
  {
    title: 'Timezone Support',
    description: 'Automatic timezone conversion for everyone',
    icon: '🌍',
  },
  {
    title: 'Custom Branding',
    description: 'Personalize your booking page with colors and profile',
    icon: '🎨',
  },
  {
    title: 'Easy Setup',
    description: 'Get started in minutes with email/password signup',
    icon: '⚡',
  },
];

export const FUTURE_FEATURES = [
  'Built-in video conferencing',
  'Calendar sync',
  'Invoicing',
  'Meeting polls',
  'Website embedding widgets',
];

export const VALUE_PROPOSITIONS = [
  {
    title: 'Simplicity',
    description: 'Get started in 2 minutes',
  },
  {
    title: 'Built-in CRM',
    description: 'No need for external tools',
  },
  {
    title: 'Self-hosted',
    description: 'Own your data',
  },
  {
    title: 'Free to Start',
    description: 'No credit card required',
  },
  {
    title: 'Professional',
    description: 'Trusted by consultants, coaches, and service providers',
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Sign Up',
    description: 'Create your account in seconds with email and password',
  },
  {
    step: 2,
    title: 'Set Availability',
    description: 'Define your event types and weekly schedule',
  },
  {
    step: 3,
    title: 'Share Your Link',
    description: 'Send your booking page link to clients and let them book automatically',
  },
];

export const COMPARISON_FEATURES = [
  {
    feature: 'Core Scheduling',
    calendly: true,
    slotly: true,
  },
  {
    feature: 'Contact Management',
    calendly: false,
    slotly: true,
    note: 'External for Calendly, Built-in for Slotly',
  },
  {
    feature: 'Booking Management',
    calendly: true,
    slotly: true,
  },
  {
    feature: 'Self-hosted',
    calendly: false,
    slotly: true,
  },
  {
    feature: 'Email/Password Auth',
    calendly: true,
    slotly: true,
  },
];
