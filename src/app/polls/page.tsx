import Link from 'next/link';
import CTA from '@/components/CTA';
import { APP_URL } from '@/lib/constants';

export const metadata = {
  title: 'Meeting Polls - Slotly',
  description: 'Let invitees vote on the best meeting time and schedule faster with Slotly Meeting Polls.',
};

export default function PollsPage() {
  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meeting Polls
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Share a poll, let invitees vote, and lock in the best slot—without endless back-and-forth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={`${APP_URL}/dashboard/polls`}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-center"
              >
                Create a Poll
              </Link>
              <Link
                href="/features"
                className="bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition font-semibold text-center"
              >
                See all features
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🗳️</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Collect votes</h2>
              <p className="text-gray-600 text-lg">
                Offer multiple time options and let participants mark what works for them.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🔗</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Share one link</h2>
              <p className="text-gray-600 text-lg">
                Send a single poll link via email, Slack, or anywhere—invitees can vote instantly.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl mb-4">✅</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Pick the best time</h2>
              <p className="text-gray-600 text-lg">
                See responses clearly and choose the best option to finalize the meeting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="text-sm font-semibold text-blue-600 mb-2">Step 1</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Create a poll</h3>
              <p className="text-gray-600">Add a title, duration, and a few time options.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="text-sm font-semibold text-blue-600 mb-2">Step 2</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Invite people</h3>
              <p className="text-gray-600">Share the poll link with participants.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="text-sm font-semibold text-blue-600 mb-2">Step 3</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collect votes</h3>
              <p className="text-gray-600">Participants vote on each option in seconds.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="text-sm font-semibold text-blue-600 mb-2">Step 4</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Finalize</h3>
              <p className="text-gray-600">Choose the best time and schedule the meeting.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href={`${APP_URL}/dashboard/polls/new`}
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Start a poll now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}

