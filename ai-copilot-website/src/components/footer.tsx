import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-12 pb-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">AI Copilot</h5>
            <p className="text-sm">
              Enhancing productivity with cutting-edge AI solutions.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-sky-400">About Us</Link></li>
              <li><Link href="/services" className="hover:text-sky-400">Services</Link></li>
              <li><Link href="/contact" className="hover:text-sky-400">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-sky-400">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Connect With Us</h5>
            <div className="flex justify-center space-x-4">
              {/* Replace with actual icons and links */}
              <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                X
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                LinkedIn
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                GitHub
              </Link>
            </div>
          </div>
        </div>
        <hr className="border-slate-700 my-8" />
        <p className="text-sm">&copy; {new Date().getFullYear()} AI Copilot. All rights reserved.</p>
        <p className="text-xs mt-1">
          Designed with Tailwind CSS by an AI.
        </p>
      </div>
    </footer>
  );
}
