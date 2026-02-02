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
      answer: 'We\'re working on built-in video conferencing, Outlook & Apple calendar sync, invoicing, and website embedding widgets. Meeting polls are available now.',
    },
    {
      question: 'What is calendar sync?',
      answer: 'Calendar sync connects Slotly with your existing calendar to automatically block out busy times and prevent double bookings. Google Calendar sync is available now, and Outlook/Apple support is coming soon.',
    },
    {
      question: 'Can I self-host Slotly?',
      answer: 'Yes! Slotly can be self-hosted. You own your data and have full control over your deployment.',
    },
    {
      question: 'Is there a free tier?',
      answer: 'Yes, Slotly is free to start. No credit card required. You can begin scheduling immediately after signing up.',
    },
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pick the perfect plan for your team
            </h1>
            
            <PricingCards />
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800/80 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
