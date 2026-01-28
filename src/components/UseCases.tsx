import Link from 'next/link';

const useCases = [
  {
    title: 'Consultants',
    subcategories: 'Business strategy, HR advisory',
    description:
      'Define event types for discovery calls, onboarding, and retainer check-ins. Share your booking link and track clients in one place.',
  },
  {
    title: 'Coaches',
    subcategories: 'Life coaches, career coaches',
    description:
      'Schedule sessions, manage your client base with built-in CRM, and automate reminders to reduce no-shows.',
  },
  {
    title: 'Therapists',
    subcategories: 'CBT, couples therapy',
    description:
      'Offer flexible recurring-style booking. Use buffers between sessions so you protect your time.',
  },
  {
    title: 'Tutors',
    subcategories: 'Private tutors, online educators',
    description:
      'Manage students via contacts, set availability by slot length, and keep lesson history in one place.',
  },
  {
    title: 'Service providers',
    subcategories: 'Freelancers, creatives',
    description:
      'Share a booking link anywhere. Reduce no-shows with reminders and keep client context in built-in CRM.',
  },
  {
    title: 'Accountants',
    subcategories: 'Tax advisors, bookkeepers',
    description:
      'Schedule reviews and compliance check-ins with ease. Use meeting polls to agree on times with clients.',
  },
  {
    title: 'Photographers',
    subcategories: 'Weddings, corporate shoots',
    description:
      'Create event types by shoot type, duration, and location. Let clients book slots that work.',
  },
  {
    title: 'Groomers',
    subcategories: 'Dog groomers, mobile vans',
    description:
      'Let pet owners book and rebook quickly. Cut no-shows with automatic email reminders.',
  },
];

export default function UseCases() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Designed for real-world services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From consultants to groomers — share your link, manage clients, and cut no-shows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {useCase.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{useCase.subcategories}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {useCase.description}
              </p>
              <Link
                href="/features"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View use case
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
