const raw = process.env.NEXT_PUBLIC_APP_URL || 'https://app.slotly.com';
export const APP_URL = raw.replace(/\/$/, '');

export const MVP_FEATURES = [
  {
    title: 'Google Calendar Sync',
    description:
      'Connect Google Calendar to block busy times automatically and create events when bookings are confirmed.',
    icon: '📅',
  },
  {
    title: 'Customize Your Booking Link',
    description: 'Create a personalized booking URL that matches your brand. Share your unique link anywhere.',
    icon: '🔗',
  },
  {
    title: 'Meeting Polls',
    description: 'Send a poll, let invitees vote on times, and lock in the best slot—no back-and-forth.',
    icon: '🗳️',
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


export const FUTURE_FEATURES = [
  'Built-in video conferencing',
  'Outlook & Apple calendar sync',
  'Invoicing',
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

