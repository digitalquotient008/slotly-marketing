import CTA from '@/components/CTA';

export const metadata = {
  title: 'About - MeetVault',
  description: 'Learn about MeetVault and our mission to simplify scheduling.',
};

export default function AboutPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About MeetVault
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Making scheduling simple for everyone
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-slate-400 mb-6 text-lg">
              MeetVault was born from a simple idea: scheduling meetings shouldn&apos;t require multiple tools, 
              complex integrations, or expensive subscriptions. We believe that professionals should have access 
              to powerful scheduling tools that are easy to use and affordable.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-6 mt-12">What Makes Us Different</h2>
            <p className="text-slate-400 mb-6 text-lg">
              Unlike other scheduling platforms, MeetVault includes essential features like contact management 
              (CRM) built right in. No need to connect external tools or pay for multiple subscriptions. 
              Everything you need is in one place.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-6 mt-12">Our Approach</h2>
            <p className="text-slate-400 mb-6 text-lg">
              We&apos;re starting with a focused MVP that covers the core scheduling needs. As we grow, 
              we&apos;ll add advanced features based on real user feedback. Your needs drive our roadmap.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-6 mt-12">Your Data, Your Control</h2>
            <p className="text-slate-400 mb-6 text-lg">
              MeetVault can be self-hosted. You own your data and have full control 
              over your scheduling platform. We believe in transparency and giving you the freedom to 
              choose how you use our tools.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
