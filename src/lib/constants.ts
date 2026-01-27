export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.slotly.com';

export const MVP_FEATURES = [
  {
    title: 'Customize Your Booking Link',
    description: 'Create a personalized booking URL that matches your brand. Share your unique link anywhere.',
    icon: '🔗',
  },
  {
    title: 'View Contact Profiles & Activity',
    description: 'Track all interactions with your contacts. See booking history, notes, and scheduling activity in one place.',
    icon: '👥',
  },
  {
    title: 'Control Your Availability',
    description: 'Only get booked when you want to be. Set meeting limits, buffers, and advanced scheduling rules.',
    icon: '⏰',
  },
  {
    title: 'Book on Behalf of Others',
    description: 'Schedule meetings for team members or colleagues. Perfect for assistants managing multiple calendars.',
    icon: '📋',
  },
  {
    title: 'Automate Meeting Reminders',
    description: 'Never miss a meeting with customizable email reminders. Set reminders for 48h, 24h, 2h, or 1h before.',
    icon: '🔔',
  },
];

export const CALENDLY_STYLE_FEATURES = [
  {
    title: 'Connect your calendars',
    description: 'Slotly connects to your calendars to automate scheduling with real-time availability. Calendar sync coming soon.',
    icon: '📅',
    comingSoon: true,
  },
  {
    title: 'Add your availability',
    description: 'Keep invitees informed of your availability. Take control of your calendar with detailed availability settings, scheduling rules, buffers, and more.',
    icon: '⏰',
    comingSoon: false,
  },
  {
    title: 'Connect conferencing tools',
    description: 'Sync your video conferencing tools and set preferences for in-person meetings or calls. Built-in video coming soon.',
    icon: '🎥',
    comingSoon: true,
  },
  {
    title: 'Customize your event types',
    description: 'Choose from pre-built templates or quickly create custom event types for any meeting you need to schedule.',
    icon: '🎯',
    comingSoon: false,
  },
  {
    title: 'Share your scheduling link',
    description: 'Easily book meetings by sharing your scheduling link on your website, landing pages, or emails.',
    icon: '🔗',
    comingSoon: false,
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
