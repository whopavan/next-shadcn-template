'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { ModeToggle } from './mode-toggle';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-sm border-b dark:border-neutral-900 border-neutral-100 bg-background/80 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex items-center p-4">
        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden flex-shrink-0">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <nav className="space-y-4 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-small dark:text-gray-300 dark:hover:text-white text-gray-700 hover:text-black"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div className='md:w-0 w-4'></div>
        <Link href="/" className="text-xl font-bold">
          Logo
        </Link>

        <div className='md:w-full'></div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium dark:text-gray-400 dark:hover:text-white text-gray-500 hover:text-black"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className='md:w-auto w-full'></div>
        <div className='md:w-full'></div>
        <ModeToggle></ModeToggle>
      </div>
    </header>
  );
}