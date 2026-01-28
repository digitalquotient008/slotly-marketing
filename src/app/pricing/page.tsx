import Link from 'next/link';
import CTA from '@/components/CTA';
import PricingCards from '@/components/PricingCards';

export const metadata = {
  title: 'Pricing - Slotly',
  description: 'Simple, transparent pricing for Slotly scheduling platform.',
};

export default function PricingPage() {

  const faqs = [
    {
      question: 'How do I get started?',
      answer: 'Simply sign up with your email and password. No credit card required. You can start creating event types and setting your availability immediately.',
    },
    {
      question: 'What\'s included in the MVP?',
      answer: 'The MVP includes event type creation, availability management, public booking pages, meeting polls, contact management (CRM), booking management, email notifications, timezone support, and custom branding.',
    },
    {
      question: 'What features are coming soon?',
      answer: 'We\'re working on built-in video conferencing, calendar sync (sync with Google Calendar, Outlook, and Apple Calendar to avoid double bookings), invoicing, and website embedding widgets. Meeting polls are available now.',
    },
    {
      question: 'What is calendar sync?',
      answer: 'Calendar sync allows Slotly to connect with your existing calendar (Google Calendar, Outlook, or Apple Calendar) to automatically block out busy times and prevent double bookings. When someone books a time slot in Slotly, it will check your connected calendar to ensure you\'re available.',
    },
    {
      question: 'Can I self-host Slotly?',
      answer: 'Yes! Slotly is open-source and can be self-hosted. You own your data and have full control over your deployment.',
    },
    {
      question: 'Is there a free tier?',
      answer: 'Yes, Slotly is free to start. No credit card required. You can begin scheduling immediately after signing up.',
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pick the perfect plan for your team
            </h1>
            
            <PricingCards />

            <div className="text-center">
              <Link href="/pricing" className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center">
                Learn more on our pricing page
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
