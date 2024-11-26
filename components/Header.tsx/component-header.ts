// File: /components/Header.tsx
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();
  
  const navItems = [
    { path: '/work', label: 'My Work' },
    { path: '/blog', label: 'Blog' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full bg-zinc-900/80 backdrop-blur-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-custom-cyan text-xl font-bold">
          Your Name
        </Link>

        <div className="flex gap-8 items-center">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={`${
                router.pathname === path
                  ? 'text-custom-cyan border-b-2 border-custom-cyan'
                  : 'text-white hover:text-custom-cyan'
              } transition-colors`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
