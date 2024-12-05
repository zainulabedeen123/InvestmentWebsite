'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const navLinks = ['Assets', 'Learn', 'About', 'Partners'];

  const handleLogin = () => {
    // Handle login
    console.log('Login clicked');
  };

  const handleSignUp = () => {
    // Handle sign up
    console.log('Sign up clicked');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="MetaWealth Logo"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            
            <div className="hidden md:block">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase()}`}
                    className="text-white hover:text-primary text-sm font-medium transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleLogin}
              className="text-white hover:text-primary text-sm font-medium transition-colors"
            >
              Log In
            </button>
            <button
              onClick={handleSignUp}
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 