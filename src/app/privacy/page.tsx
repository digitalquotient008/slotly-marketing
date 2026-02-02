import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - MeetVault',
  description: 'MeetVault Privacy Policy - How we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  const lastUpdated = 'Jan 28, 2026';

  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg prose-invert max-w-none space-y-6 text-slate-400">
          <p className="text-sm text-slate-500">Last updated: {lastUpdated}</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account information (name, email address, password)</li>
              <li>Booking information (event types, availability, bookings)</li>
              <li>Contact information (client names, emails, phone numbers)</li>
              <li>Payment information (processed securely through Stripe)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process bookings and send notifications</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data. 
              All data is encrypted in transit and at rest. We use industry-standard security practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Data Retention</h2>
            <p>
              We retain your personal data for as long as your account is active or as needed to provide services. 
              You can delete your account at any time, which will permanently delete your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and data</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Contact Us</h2>
            <p className="text-slate-400">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@meetvault.app" className="text-blue-400 hover:text-blue-300">
                privacy@meetvault.app
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
