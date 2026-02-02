'use client';

import { useState } from 'react';
import Link from 'next/link';
import { APP_URL } from '@/lib/constants';

export default function PricingCards() {
  const [billingPeriod, setBillingPeriod] = useState<'yearly' | 'monthly'>('yearly');

  const plans: Array<{
    name: string;
    description: string;
    price: string | null;
    priceSubtext: string;
    priceAmount?: string;
    savings?: string | null;
    badge: string | null;
    recommended: boolean;
    buttonText: string;
    buttonStyle: string;
    features: string[];
    comingSoon?: boolean;
  }> = [
    {
      name: 'Free',
      description: 'For personal use',
      price: 'Free',
      priceSubtext: '',
      badge: null,
      recommended: false,
      buttonText: 'Get started',
      buttonStyle: 'bg-slate-700 text-white hover:bg-slate-600',
      features: [
        'Event types & availability',
        'Public booking pages',
        'Meeting polls',
        'Built-in CRM',
        'Google Calendar sync',
        'Email notifications',
        'Timezone support',
        'Custom branding',
        '50 bookings per month',
      ],
    },
    {
      name: 'Standard',
      description: 'For professionals and small teams',
      price: billingPeriod === 'yearly' ? '$10' : '$12',
      priceSubtext: '/user per month',
      savings: billingPeriod === 'yearly' ? 'Save 16%' : null,
      badge: 'Recommended plan',
      recommended: true,
      buttonText: 'Get started',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      features: [
        'Everything in Free',
        'Meeting polls',
        'Unlimited bookings',
        'Advanced analytics',
        'Priority tech support',
        'Custom integrations',
        'Team collaboration',
        'API access',
      ],
      comingSoon: true,
    },
    {
      name: 'Teams',
      description: 'For growing businesses',
      price: null,
      priceSubtext: '',
      savings: null,
      badge: null,
      recommended: false,
      buttonText: 'Talk to sales',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      features: [
        'Everything in Standard',
        'Advanced scheduling rules',
        'Round-robin scheduling',
        'Team management',
        'Advanced reporting',
      ],
      comingSoon: false,
    },
  ];

  return (
    <>
      {/* Billing Toggle */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <label className={`flex items-center cursor-pointer ${billingPeriod === 'yearly' ? 'text-white' : 'text-slate-500'}`}>
          <input
            type="radio"
            name="billing"
            value="yearly"
            checked={billingPeriod === 'yearly'}
            onChange={() => setBillingPeriod('yearly')}
            className="mr-2 w-4 h-4 text-blue-500 focus:ring-blue-500 bg-slate-800 border-slate-600"
          />
          Billed yearly
        </label>
        <label className={`flex items-center cursor-pointer ${billingPeriod === 'monthly' ? 'text-white' : 'text-slate-500'}`}>
          <input
            type="radio"
            name="billing"
            value="monthly"
            checked={billingPeriod === 'monthly'}
            onChange={() => setBillingPeriod('monthly')}
            className="mr-2 w-4 h-4 text-blue-500 focus:ring-blue-500 bg-slate-800 border-slate-600"
          />
          Billed monthly
        </label>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-slate-800/80 rounded-lg border-2 p-6 relative ${
              plan.recommended
                ? 'border-blue-500 shadow-lg'
                : 'border-slate-700 hover:border-slate-600'
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {plan.badge}
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-slate-400 mb-4">{plan.description}</p>
              
              {plan.price !== null && (
                <div className="mb-2">
                  {plan.priceAmount ? (
                    <div>
                      <span className="text-sm text-slate-400">{plan.price}</span>
                      <span className="text-4xl font-bold text-white ml-2">{plan.priceAmount}</span>
                      <span className="text-sm text-slate-400 ml-1">{plan.priceSubtext}</span>
                    </div>
                  ) : (
                    <div>
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      {plan.priceSubtext && (
                        <span className="text-sm text-slate-400 ml-1">{plan.priceSubtext}</span>
                      )}
                    </div>
                  )}
                </div>
              )}
              
              {plan.savings && (
                <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-medium px-2 py-1 rounded">
                  {plan.savings}
                </span>
              )}
            </div>

            {plan.name === 'Teams' ? (
              <Link
                href="/contact"
                className={`block w-full text-center px-4 py-3 rounded-lg font-semibold transition-colors mb-6 ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </Link>
            ) : (
              <>
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
                  <p className="text-xs text-slate-500 text-center mb-4">Coming soon</p>
                )}
              </>
            )}

            <ul className="space-y-3">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
