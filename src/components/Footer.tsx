import Link from 'next/link';

export default function Footer() {
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.meeteasy.com';

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">MeetEasy</h3>
            <p className="text-sm">The simple scheduling platform for professionals.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="hover:text-white">Features</Link></li>
              <Link href="/pricing" className="hover:text-white">Pricing</Link>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Get Started</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`${APP_URL}/auth/signup`} className="hover:text-white">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href={`${APP_URL}/auth/login`} className="hover:text-white">
                  Log In
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MeetEasy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
