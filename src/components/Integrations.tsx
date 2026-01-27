export default function Integrations() {
  const currentIntegrations = [
    { name: 'Email (Resend)', icon: '📧', status: 'active' },
    { name: 'Stripe', icon: '💳', status: 'active' },
  ];

  const comingSoonIntegrations = [
    { name: 'Google Calendar', icon: '📅' },
    { name: 'Outlook', icon: '📆' },
    { name: 'Zoom', icon: '🎥' },
    { name: 'Google Meet', icon: '💻' },
    { name: 'Microsoft Teams', icon: '👥' },
    { name: 'Slack', icon: '💬' },
    { name: 'HubSpot', icon: '🔗' },
    { name: 'Salesforce', icon: '☁️' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connect Slotly to the tools you already use
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Boost productivity with integrations
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Now</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {currentIntegrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center">
                <div className="text-3xl mb-2">{integration.icon}</div>
                <div className="text-sm font-medium text-gray-700">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Coming Soon</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {comingSoonIntegrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 opacity-60 hover:opacity-80 transition-opacity text-center relative">
                <div className="text-3xl mb-2">{integration.icon}</div>
                <div className="text-sm font-medium text-gray-700">{integration.name}</div>
                <span className="absolute top-2 right-2 px-1.5 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">
                  Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
