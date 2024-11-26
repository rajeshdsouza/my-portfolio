// File: /pages/contact.tsx
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const socialLinks = [
    { icon: FaTwitter, href: '#', label: 'X', username: '@yourusername' },
    { icon: FaInstagram, href: '#', label: 'Instagram', username: '@yourusername' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', username: 'Your Name' }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-zinc-400 mb-8">
            Feel free to reach out through any of these channels.
          </p>

          <div className="bg-zinc-800 rounded-lg p-8 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Email</h2>
            <a 
              href="mailto:your.email@example.com"
              className="text-custom-cyan hover:underline text-lg"
            >
              your.email@example.com
            </a>
          </div>

          <div className="bg-zinc-800 rounded-lg p-8">
            <h2 className="text-xl font-bold text-white mb-6">Social Media</h2>
            <div className="space-y-4">
              {socialLinks.map(({ icon: Icon, href, label, username }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-zinc-400 hover:text-custom-cyan transition-colors p-4 rounded-lg hover:bg-zinc-700"
                >
                  <Icon className="w-6 h-6 mr-3" />
                  <span className="text-lg">{username}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
