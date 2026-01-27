import { CALENDLY_STYLE_FEATURES } from '@/lib/constants';

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {CALENDLY_STYLE_FEATURES.map((feature, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-3xl">
                  {feature.icon}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
                  {feature.comingSoon && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">
                      Coming soon
                    </span>
                  )}
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
