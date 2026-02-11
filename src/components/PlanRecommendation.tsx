'use client';

import { useState } from 'react';
import Link from 'next/link';

type Size = 'solo' | 'team' | 'enterprise' | '';
type Need = 'scheduling' | 'crm' | 'full' | '';

const RECOMMENDATIONS: Record<string, { plan: string; blurb: string; planValue: string }> = {
  'solo-scheduling': { plan: 'Free / Solo', planValue: 'solo', blurb: 'Start with the free tier. Perfect for individual professionals who need simple scheduling.' },
  'solo-crm': { plan: 'Solo with CRM', planValue: 'solo', blurb: 'MeetVault includes built-in CRM on all plans. The free tier gives you contacts and activity tracking.' },
  'solo-full': { plan: 'Solo', planValue: 'solo', blurb: 'The free tier includes scheduling, CRM, and reminders. Upgrade to Teams when you need more seats.' },
  'team-scheduling': { plan: 'Teams', planValue: 'teams', blurb: 'Teams plan gives you multiple users and shared scheduling. Ideal for small teams.' },
  'team-crm': { plan: 'Teams', planValue: 'teams', blurb: 'Teams plan includes scheduling and CRM for the whole team. Book on behalf of others and share contacts.' },
  'team-full': { plan: 'Teams', planValue: 'teams', blurb: 'Teams plan is the best fit for small teams that need full scheduling, CRM, and collaboration.' },
  'enterprise-scheduling': { plan: 'Custom', planValue: 'custom', blurb: 'For larger organizations we recommend a custom solution. Contact us to discuss your needs.' },
  'enterprise-crm': { plan: 'Custom', planValue: 'custom', blurb: 'Enterprise needs often require a custom deployment. We can tailor MeetVault to your organization.' },
  'enterprise-full': { plan: 'Custom', planValue: 'custom', blurb: 'Custom solutions include SSO, dedicated support, and tailored features. Schedule a demo to learn more.' },
};

function getRecommendation(size: Size, need: Need) {
  if (!size || !need) return null;
  const key = `${size}-${need}`;
  return RECOMMENDATIONS[key] ?? RECOMMENDATIONS['solo-scheduling'];
}

export default function PlanRecommendation() {
  const [size, setSize] = useState<Size>('');
  const [need, setNeed] = useState<Need>('');
  const rec = getRecommendation(size, need);

  const applyToForm = () => {
    if (!rec) return;
    const planSelect = document.getElementById('plan') as HTMLSelectElement | null;
    if (planSelect) {
      planSelect.value = rec.planValue;
    }
  };

  return (
    <div className="mb-8 p-6 rounded-xl border border-slate-700 bg-slate-800/50">
      <h2 className="text-lg font-semibold text-white mb-3">Get a plan recommendation</h2>
      <p className="text-sm text-slate-400 mb-4">Answer two questions and we&apos;ll suggest the best plan for you.</p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">What best describes you?</label>
          <div className="flex flex-wrap gap-2">
            {(['solo', 'team', 'enterprise'] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  size === s
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {s === 'solo' ? 'Solo' : s === 'team' ? 'Small team' : 'Enterprise'}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Primary need?</label>
          <div className="flex flex-wrap gap-2">
            {(['scheduling', 'crm', 'full'] as const).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setNeed(n)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  need === n
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {n === 'scheduling' ? 'Scheduling only' : n === 'crm' ? 'Scheduling + CRM' : 'Full suite'}
              </button>
            ))}
          </div>
        </div>
      </div>
      {rec && (
        <div className="mt-4 p-4 rounded-lg bg-slate-900/80 border border-slate-600">
          <p className="font-medium text-white">{rec.plan}</p>
          <p className="text-sm text-slate-400 mt-1">{rec.blurb}</p>
          <button
            type="button"
            onClick={applyToForm}
            className="mt-3 text-sm text-blue-400 hover:text-blue-300 font-medium"
          >
            Use this plan in the form below →
          </button>
        </div>
      )}
    </div>
  );
}
