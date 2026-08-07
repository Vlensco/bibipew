import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import PenguinMascot from './PenguinMascot';

export default function Navbar() {
  const { url } = usePage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Videos', href: '/videos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Travel', href: '/travel-guides' },
    { name: 'Merch', href: '/merch' },
    { name: 'Collab', href: '/collaborate' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/' && url === '/') return true;
    if (href !== '/' && url.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center overflow-hidden border-2 border-sky-300 shadow-xs">
              <PenguinMascot pose="default" className="w-9 h-9" animated={false} />
            </div>
            <span className="font-black text-2xl tracking-tight text-slate-900">
              Bibipew
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold transition-all duration-150 ${
                    active
                      ? 'text-sky-500 font-extrabold'
                      : 'text-slate-600 hover:text-sky-500'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Work With Me Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/collaborate"
              className="px-6 py-2.5 rounded-full bg-[#00a8ff] hover:bg-sky-500 text-white font-bold text-sm shadow-sm transition-all duration-150"
            >
              Work With Me
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="/collaborate"
              className="px-3.5 py-1.5 rounded-full bg-[#00a8ff] text-white font-bold text-xs"
            >
              Work With Me
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                  active
                    ? 'text-sky-500 font-extrabold bg-sky-50'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
