'use client';

export default function Footer() {
  const socialLinks = [
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Discord', href: '#' }
  ];

  const legalLinks = [
    { name: 'Terms', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Cookies', href: '#' }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription submitted');
  };

  return (
    <footer className="bg-[#0A0F1C] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo and description */}
          <div className="md:col-span-4">
            <div className="text-[#D2964B] font-bold text-2xl mb-4">MetaWealth</div>
            <p className="text-gray-400 text-sm">
              The future of real estate investment is here. Join us in revolutionizing property ownership.
            </p>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold mb-4">Subscribe to our newsletter</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-[#1D1D1D] rounded-l px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D2964B]"
                />
                <button
                  type="submit"
                  className="bg-[#D2964B] hover:bg-[#c48a45] text-white px-6 py-2 rounded-r transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Social links */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold mb-4">Follow us</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-[#D2964B] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MetaWealth. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-[#D2964B] text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 