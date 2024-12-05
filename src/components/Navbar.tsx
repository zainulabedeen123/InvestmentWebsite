'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#292929] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/MetaWealth.png"
                alt="MetaWealth Logo"
                width={140}
                height={32}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/assets" className="text-white hover:text-[#D2964B] transition-colors text-sm font-medium">
              Assets
            </Link>
            <Link href="/learn" className="text-white hover:text-[#D2964B] transition-colors text-sm font-medium">
              Learn
            </Link>
            <Link href="/about" className="text-white hover:text-[#D2964B] transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/partners" className="text-white hover:text-[#D2964B] transition-colors text-sm font-medium">
              Partners
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-white hover:text-[#D2964B] transition-colors text-sm font-medium"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-[#D2964B] hover:bg-[#c48a45] text-white px-4 py-2 rounded text-sm font-medium transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 