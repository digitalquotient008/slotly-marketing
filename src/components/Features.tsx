import { MVP_FEATURES } from '@/lib/constants';

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Powerful Features</h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to manage your schedule and grow your business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MVP_FEATURES.map((feature, index) => (
            <div key={index} className="bg-slate-800/80 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-2xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
