import Link from 'next/link';

export default function Hero() {
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.slotly.com';

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Slotly makes scheduling simple
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto font-light">
            Slotly&apos;s easy enough for individual users, and powerful enough to meet the needs of growing businesses — all with built-in CRM and self-hosted options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href={`${APP_URL}/auth/signup`}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Sign up for free
            </Link>
            <Link
              href="#how-it-works"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-300 hover:border-blue-600 hover:bg-gray-50 transition-colors"
            >
              See how it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
