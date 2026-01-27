import Link from 'next/link';

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: 'primary' | 'secondary';
}

export default function CTA({ 
  title = 'Ready to get started?',
  description = 'Join thousands of professionals who use Slotly to schedule smarter.',
  buttonText = 'Sign up for free',
  variant = 'primary'
}: CTAProps) {
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.slotly.com';

  return (
    <section className={`py-20 ${variant === 'primary' ? 'bg-gradient-to-br from-blue-600 to-indigo-700' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${variant === 'primary' ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h2>
        <p className={`text-xl md:text-2xl mb-10 ${variant === 'primary' ? 'text-blue-100' : 'text-gray-600'}`}>
          {description}
        </p>
        <Link
          href={`${APP_URL}/auth/signup`}
          className={`inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl ${
            variant === 'primary'
              ? 'bg-white text-blue-600 hover:bg-gray-100'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {buttonText}
        </Link>
        {variant === 'primary' && (
          <p className="text-sm text-blue-200 mt-6">No credit card required • Setup in 2 minutes</p>
        )}
      </div>
    </section>
  );
}
