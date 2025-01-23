'use client';

import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export function Footer() {
    return (
      <footer className="bg-background py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold dark:text-neutral-200 text-gray-800">About Us</h3>
            <p className="mt-2 text-sm dark:text-neutral-300 text-gray-600">
              We provide exceptional services to help your business grow. Contact us to learn more.
            </p>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold dark:text-neutral-200 text-gray-800">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm dark:text-neutral-300 text-gray-600 hover:text-gray-800"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold dark:text-neutral-200 text-gray-800">Contact Us</h3>
            <ul className="mt-2 space-y-2 text-sm dark:text-neutral-300 text-gray-600">
              <li>Email: info@example.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Business Road, City, Country</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm dark:text-neutral-300 text-gray-500">
          &copy; {new Date().getFullYear()} MyLogo. All rights reserved.
        </div>
      </footer>
    );
  }