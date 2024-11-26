// File: /components/Footer.tsx
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const socialLinks = [
    { icon: FaTwitter, href: '#', label: 'X' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <a 
              href="mailto:your.email@example.com" 
              className="text-zinc-400 hover:text-custom-cyan transition-colors"
            >
              your.email@example.com
            </a>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Social</h4>
            <div className="space-y-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-zinc-400 hover:text-custom-cyan transition-colors"
                >
                  <Icon className="mr-2" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/work" className="block text-zinc-400 hover:text-custom-cyan">
                My Work
              </Link>
              <Link href="/blog" className="block text-zinc-400 hover:text-custom-cyan">
                Blog
              </Link>
              <Link href="/projects" className="block text-zinc-400 hover:text-custom-cyan">
                Projects
              </Link>
            </div>
          </div>
        </div>

        <div className="text-zinc-400 border-t border-zinc-800 pt-8 text-center">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
