import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Statistics from '@/components/Statistics';
import Security from '@/components/Security';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-600 mb-8 uppercase tracking-wide">
            Trusted by professionals worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="text-gray-500 font-medium text-sm">Businesses</div>
            <div className="text-gray-500 font-medium text-sm">Consultants</div>
            <div className="text-gray-500 font-medium text-sm">Coaches</div>
            <div className="text-gray-500 font-medium text-sm">Service Providers</div>
            <div className="text-gray-500 font-medium text-sm">Freelancers</div>
          </div>
        </div>
      </section>

      <Features />
      
      <HowItWorks />
      
      <Statistics />
      
      <Testimonials />
      
      <Security />
      
      <CTA />
    </>
  );
}
