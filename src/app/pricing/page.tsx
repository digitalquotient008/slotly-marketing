import Link from 'next/link';
import CTA from '@/components/CTA';
import { MVP_FEATURES } from '@/lib/constants';

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
      answer: 'The MVP includes event type creation, availability management, public booking pages, contact management (CRM), booking management, email notifications, timezone support, and custom branding.',
    },
    {
      question: 'What features are coming soon?',
      answer: 'We\'re working on built-in video conferencing, calendar sync, invoicing, meeting polls, and website embedding widgets. These features exist in the codebase and will be enabled based on user feedback.',
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started for free. No credit card required.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full mb-4">
                Always free
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Free</h2>
              <p className="text-xl text-gray-600 mb-1">For personal use</p>
              <p className="text-gray-500">All MVP features included</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">What&apos;s Included:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {MVP_FEATURES.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL || 'https://app.slotly.com'}/auth/signup`}
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
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
