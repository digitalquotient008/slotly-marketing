import { MVP_FEATURES, FUTURE_FEATURES } from '@/lib/constants';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Features - MeetVault',
  description: 'Discover all the features MeetVault offers for scheduling and managing appointments.',
};

export default function FeaturesPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful features, simple setup
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Everything you need to manage your schedule and bookings in one place — including Meeting Polls.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MVP_FEATURES.map((feature, index) => (
              <div key={index} className="bg-slate-800/80 border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition-colors">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">Consultants</h3>
              <p className="text-slate-400">
                Manage client consultations, track booking history, and maintain professional relationships all in one platform.
              </p>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">Coaches</h3>
              <p className="text-slate-400">
                Schedule coaching sessions, build your client base with built-in CRM, and focus on what you do best.
              </p>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">Service Providers</h3>
              <p className="text-slate-400">
                Streamline appointment booking, reduce no-shows with automatic confirmations, and grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/80 rounded-2xl p-8 md:p-12 border border-slate-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Roadmap
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Advanced features coming soon
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {FUTURE_FEATURES.map((feature, index) => (
                <div key={index} className="bg-slate-900/80 rounded-lg p-4 flex items-center border border-slate-700">
                  <svg className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
