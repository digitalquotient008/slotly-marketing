import Link from 'next/link';

export default function Hero() {
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.slotly.com';

  return (
    <section className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-5 sm:mb-6 leading-[1.1] tracking-tight">
            Slotly makes scheduling simple
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
            Slotly&apos;s easy enough for individual users, and powerful enough to meet the needs of growing businesses — all with built-in CRM and self-hosted options.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link
              href={`${APP_URL}/auth/signup`}
              className="bg-blue-600 text-white px-8 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 w-full sm:w-auto text-center min-w-[200px]"
            >
              Sign up for free
            </Link>
            <Link
              href="#how-it-works"
              className="bg-white text-blue-600 px-8 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold border-2 border-gray-300 hover:border-blue-600 hover:bg-gray-50 transition-all focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 w-full sm:w-auto text-center min-w-[200px]"
            >
              See how it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
