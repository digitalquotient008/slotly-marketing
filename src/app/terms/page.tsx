import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - MeetVault',
  description: 'MeetVault Terms of Service - Terms and conditions for using MeetVault.',
};

export default function TermsPage() {
  const lastUpdated = 'Jan 28, 2026';

  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg prose-invert max-w-none space-y-6 text-slate-400">
          <p className="text-sm text-slate-500">Last updated: {lastUpdated}</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using MeetVault, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily use MeetVault for personal and commercial scheduling purposes. 
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose without explicit permission</li>
              <li>Attempt to reverse engineer any software contained in MeetVault</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account and password. 
              You agree to accept responsibility for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Acceptable Use</h2>
            <p>You agree not to use MeetVault to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit any harmful or malicious code</li>
              <li>Spam or harass other users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Payment Terms</h2>
            <p>
              Paid plans are billed monthly or annually. All fees are non-refundable unless required by law. 
              You may cancel your subscription at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              MeetVault shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
              resulting from your use or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Contact Us</h2>
            <p className="text-slate-400">
              If you have questions about these Terms, please contact us at{' '}
              <a href="mailto:legal@meetvault.app" className="text-blue-400 hover:text-blue-300">
                legal@meetvault.app
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
