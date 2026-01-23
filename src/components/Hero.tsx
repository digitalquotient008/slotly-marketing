import Link from 'next/link';

export default function Hero() {
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.slotly.com';

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Schedule meetings without<br />the back-and-forth
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Slotly makes scheduling simple. Create event types, set your availability, and let clients book time with you automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`${APP_URL}/auth/signup`}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get started for free
            </Link>
            <Link
              href="#how-it-works"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              See how it works
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">No credit card required • Free forever</p>
        </div>
      </div>
    </section>
  );
}
