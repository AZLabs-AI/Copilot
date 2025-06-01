import Link from 'next/link';

export default function Header() {
  // TODO: Add a real logo component or SVG here
  const Logo = () => <span className="text-2xl font-bold">AI Copilot</span>;

  return (
    <header className="bg-slate-900 text-white shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4 md:p-6">
        <Link href="/">
          <Logo />
        </Link>
        {/* Basic mobile menu toggle - functionality would require JS */}
        <button className="md:hidden p-2 rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <nav className="hidden md:flex md:items-center w-full md:w-auto">
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 text-lg">
            <li>
              <Link href="/" className="block py-2 px-3 hover:text-sky-400 rounded-md hover:bg-slate-700 md:hover:bg-transparent">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 px-3 hover:text-sky-400 rounded-md hover:bg-slate-700 md:hover:bg-transparent">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="block py-2 px-3 hover:text-sky-400 rounded-md hover:bg-slate-700 md:hover:bg-transparent">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-3 hover:text-sky-400 rounded-md hover:bg-slate-700 md:hover:bg-transparent">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
