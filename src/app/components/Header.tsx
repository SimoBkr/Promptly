import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4 border-b border-border-rgb">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-extrabold text-primary-rgb">Promptly</h1>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/about" className="text-text-rgb hover:text-primary-rgb transition-colors duration-200">
                About
              </Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
}