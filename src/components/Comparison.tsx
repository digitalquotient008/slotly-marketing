import { COMPARISON_FEATURES } from '@/lib/constants';

export default function Comparison() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Slotly compares
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how Slotly stacks up against the competition
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Calendly</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Slotly</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {COMPARISON_FEATURES.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.feature}</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">
                    {item.calendly ? '✅' : '❌'}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">
                    {item.slotly ? '✅' : '❌'}
                    {item.note && (
                      <p className="text-xs text-gray-500 mt-1">{item.note}</p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
