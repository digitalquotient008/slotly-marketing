'use client';

import { useState } from 'react';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { MVP_FEATURES } from '@/lib/constants';

export const metadata = {
  title: 'Pricing - Slotly',
  description: 'Simple, transparent pricing for Slotly scheduling platform.',
};

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'yearly' | 'monthly'>('yearly');
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.slotly.com';

  const plans = [
    {
      name: 'Free',
      description: 'For personal use',
      price: 'Always free',
      priceSubtext: '',
      badge: null,
      recommended: false,
      buttonText: 'Get started',
      buttonStyle: 'bg-gray-900 text-white hover:bg-gray-800',
      features: [
        'Event types & availability',
        'Public booking pages',
        'Built-in CRM',
        'Email notifications',
        'Timezone support',
        'Custom branding',
      ],
    },
    {
      name: 'Standard',
      description: 'For professionals and small teams',
      price: billingPeriod === 'yearly' ? '$10' : '$12',
      priceSubtext: '/seat/mo',
      savings: billingPeriod === 'yearly' ? 'Save 16%' : null,
      badge: null,
      recommended: false,
      buttonText: 'Get started',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      features: [
        'Everything in Free',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'Team collaboration',
        'API access',
      ],
      comingSoon: true,
    },
    {
      name: 'Teams',
      description: 'For growing businesses',
      price: billingPeriod === 'yearly' ? '$16' : '$20',
      priceSubtext: '/seat/mo',
      savings: billingPeriod === 'yearly' ? 'Save 20%' : null,
      badge: 'Recommended plan',
      recommended: true,
      buttonText: 'Try for Free',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      features: [
        'Everything in Standard',
        'Advanced scheduling rules',
        'Meeting polls',
        'Round-robin scheduling',
        'Team management',
        'Advanced reporting',
      ],
      comingSoon: true,
    },
    {
      name: 'Enterprise',
      description: 'For large companies',
      price: 'Starts at',
      priceAmount: '$15k',
      priceSubtext: '/yr',
      badge: null,
      recommended: false,
      buttonText: 'Talk to sales',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      features: [
        'Everything in Teams',
        'Dedicated support',
        'Custom deployment',
        'SLA guarantee',
        'Advanced security',
        'Custom integrations',
      ],
      comingSoon: true,
    },
  ];

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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pick the perfect plan for your team
            </h1>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <label className={`flex items-center cursor-pointer ${billingPeriod === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                <input
                  type="radio"
                  name="billing"
                  value="yearly"
                  checked={billingPeriod === 'yearly'}
                  onChange={() => setBillingPeriod('yearly')}
                  className="mr-2 w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                Billed yearly
              </label>
              <label className={`flex items-center cursor-pointer ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                <input
                  type="radio"
                  name="billing"
                  value="monthly"
                  checked={billingPeriod === 'monthly'}
                  onChange={() => setBillingPeriod('monthly')}
                  className="mr-2 w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                Billed monthly
              </label>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg border-2 p-6 relative ${
                  plan.recommended
                    ? 'border-blue-600 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-2">
                    {plan.priceAmount ? (
                      <div>
                        <span className="text-sm text-gray-600">{plan.price}</span>
                        <span className="text-4xl font-bold text-gray-900 ml-2">{plan.priceAmount}</span>
                        <span className="text-sm text-gray-600 ml-1">{plan.priceSubtext}</span>
                      </div>
                    ) : (
                      <div>
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        {plan.priceSubtext && (
                          <span className="text-sm text-gray-600 ml-1">{plan.priceSubtext}</span>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {plan.savings && (
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                      {plan.savings}
                    </span>
                  )}
                </div>

                <Link
                  href={plan.comingSoon ? '#' : `${APP_URL}/auth/signup`}
                  className={`block w-full text-center px-4 py-3 rounded-lg font-semibold transition-colors mb-6 ${plan.buttonStyle} ${
                    plan.comingSoon ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={(e) => plan.comingSoon && e.preventDefault()}
                >
                  {plan.buttonText}
                </Link>

                {plan.comingSoon && (
                  <p className="text-xs text-gray-500 text-center mb-4">Coming soon</p>
                )}

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/pricing" className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center">
              Learn more on our pricing page
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
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
