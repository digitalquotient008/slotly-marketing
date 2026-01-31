export default function Security() {
  const securityFeatures = [
    {
      title: 'Self-hosted Option',
      description: 'Deploy Slotly on your own infrastructure and maintain full control over your data.',
      icon: '🏠',
    },
    {
      title: 'Data Ownership',
      description: 'You own all your scheduling data. No vendor lock-in, complete data portability.',
      icon: '🔐',
    },
    {
      title: 'Secure Authentication',
      description: 'Email/password authentication with secure password hashing and session management.',
      icon: '🛡️',
    },
    {
      title: 'Open Source',
      description: 'Transparent codebase you can audit, modify, and extend to meet your needs.',
      icon: '📖',
    },
  ];

  return (
    <section id="security" className="scroll-mt-24 py-16 sm:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
            Built to keep your organization secure
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Keep your scheduling data secure with self-hosted options, data ownership, secure authentication, and transparent open-source code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-slate-800/80 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
