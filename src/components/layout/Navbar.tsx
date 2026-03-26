import { Menu, Phone, Smartphone, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { siteConfig } from '../../config/site';
import { navLinks } from '../../data/siteData';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-lg bg-blue-600 p-2">
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              {siteConfig.businessName}
            </span>
          </Link>

          <div className="hidden items-center space-x-6 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `font-medium transition-colors hover:text-blue-600 ${
                    isActive ? 'text-blue-600' : 'text-gray-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.ctaLabels.callNow}
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="space-y-1 border-t border-gray-100 bg-white px-4 pt-2 pb-4 shadow-lg md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block rounded-md px-3 py-3 text-base font-medium hover:bg-gray-50 hover:text-blue-600 ${
                  isActive ? 'text-blue-600' : 'text-gray-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={siteConfig.phoneHref}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-3 font-semibold text-white"
          >
            <Phone className="h-5 w-5" />
            {siteConfig.ctaLabels.callNow}
          </a>
        </div>
      )}
    </nav>
  );
}
