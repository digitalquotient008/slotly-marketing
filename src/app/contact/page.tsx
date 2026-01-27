import Link from 'next/link';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Contact Sales - Slotly',
  description: 'Get in touch with our sales team to discuss enterprise plans and custom solutions.',
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Sales
            </h1>
            <p className="text-xl text-gray-600">
              Interested in Teams or Enterprise plans? Let&apos;s discuss how Slotly can help your organization.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <form action="mailto:sales@slotly.com" method="post" encType="text/plain" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-2">
                  Interested Plan
                </label>
                <select
                  id="plan"
                  name="plan"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border"
                >
                  <option value="">Select a plan</option>
                  <option value="teams">Teams</option>
                  <option value="enterprise">Enterprise</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border"
                  placeholder="Tell us about your scheduling needs..."
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Send Message
                </button>
                <Link
                  href="/pricing"
                  className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition font-semibold text-center"
                >
                  Back to Pricing
                </Link>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                Or email us directly at{' '}
                <a href="mailto:sales@slotly.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  sales@slotly.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
