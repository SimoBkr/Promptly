import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-primary-rgb">Promptly</h1>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/about" className="text-gray-600 hover:text-primary-rgb transition-colors duration-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-primary-rgb transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}