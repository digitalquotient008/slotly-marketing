import Link from 'next/link';
import CTA from '@/components/CTA';
import { APP_URL } from '@/lib/constants';

export const metadata = {
  title: 'Integrations - Slotly',
  description: 'Connect Slotly with the tools you already use, starting with Google Calendar.',
};

type Integration = {
  name: string;
  description: string;
  status: 'Available' | 'ComingSoon';
  cta?: { label: string; href: string };
};

const integrations: Integration[] = [
  {
    name: 'Google Calendar',
    description:
      'Block busy times automatically and create calendar events for new bookings.',
    status: 'Available',
    cta: {
      label: 'Connect Google Calendar',
      href: `${APP_URL}/integrations/google/start`,
    },
  },
  {
    name: 'Microsoft Outlook',
    description: 'Sync availability and avoid double-bookings with Outlook.',
    status: 'ComingSoon',
  },
  {
    name: 'Apple Calendar',
    description: 'Keep your Apple Calendar in sync with your Slotly bookings.',
    status: 'ComingSoon',
  },
];

export default function IntegrationsPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Integrations
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Connect Slotly to your calendar so availability stays accurate and
              bookings create events automatically.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {integrations.map((i) => (
              <div
                key={i.name}
                className="bg-slate-800/80 rounded-xl border border-slate-700 p-6 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="text-xl font-semibold text-white">
                    {i.name}
                  </h2>
                  {i.status === 'Available' ? (
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">
                      Available
                    </span>
                  ) : (
                    <span className="text-xs bg-slate-600/50 text-slate-400 px-2 py-1 rounded">
                      Coming soon
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-400 mb-5">{i.description}</p>

                {i.cta ? (
                  <Link
                    href={i.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-500 transition-colors"
                  >
                    {i.cta.label}
                  </Link>
                ) : (
                  <div className="text-sm text-slate-500">
                    Join the waitlist by creating a Slotly account.
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-sm text-slate-400">
            Prefer to connect from inside the app? Go to{' '}
            <Link
              href={`${APP_URL}/dashboard/settings`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Settings → Calendar Integrations
            </Link>
            .
          </div>
        </div>
      </section>

      <CTA
        title="Keep availability accurate"
        description="Connect Google Calendar in minutes and let Slotly prevent double bookings automatically."
        buttonText="Create your free account"
      />
    </div>
  );
}

