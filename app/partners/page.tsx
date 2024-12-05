'use client';

import Navbar from '@/components/Navbar';

export default function PartnersPage() {
  const partnerCategories = [
    {
      name: 'Technology',
      description: 'Powering our platform with cutting-edge blockchain solutions',
      icon: (
        <svg className="w-8 h-8 text-[#D2964B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      name: 'Finance',
      description: 'Secure payment and transaction infrastructure',
      icon: (
        <svg className="w-8 h-8 text-[#D2964B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: 'Infrastructure',
      description: 'Reliable cloud and hosting solutions',
      icon: (
        <svg className="w-8 h-8 text-[#D2964B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  const partners = [
    {
      name: 'Solana',
      description: 'Blockchain infrastructure powering our tokenization platform.',
      category: 'Technology',
      features: [
        'High-speed transactions',
        'Low gas fees',
        'Smart contract support'
      ]
    },
    {
      name: 'Circle',
      description: 'Providing secure and compliant payment solutions.',
      category: 'Finance',
      features: [
        'USDC integration',
        'Payment processing',
        'Regulatory compliance'
      ]
    },
    {
      name: 'AWS',
      description: 'Cloud infrastructure ensuring platform reliability and scalability.',
      category: 'Infrastructure',
      features: [
        'High availability',
        'Global CDN',
        'Data security'
      ]
    },
    {
      name: 'Chainlink',
      description: 'Decentralized oracle network for real-world data.',
      category: 'Technology',
      features: [
        'Price feeds',
        'Real estate data',
        'Market analytics'
      ]
    },
    {
      name: 'Stripe',
      description: 'Advanced payment processing solutions.',
      category: 'Finance',
      features: [
        'Fiat onramp',
        'KYC verification',
        'Automated billing'
      ]
    },
    {
      name: 'Microsoft Azure',
      description: 'Additional cloud services and enterprise solutions.',
      category: 'Infrastructure',
      features: [
        'Backup systems',
        'AI integration',
        'Analytics tools'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Global Reach',
      description: 'Access to worldwide markets and investors'
    },
    {
      title: 'Technical Support',
      description: 'Dedicated technical assistance and resources'
    },
    {
      title: 'Marketing Exposure',
      description: 'Joint marketing and promotional opportunities'
    },
    {
      title: 'Innovation Access',
      description: 'Early access to new features and technologies'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#D2964B] mb-4">Our Partners</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We collaborate with industry leaders to provide the most secure, efficient, and innovative real estate investment platform.
            </p>
          </div>

          {/* Partner Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {partnerCategories.map((category, index) => (
              <div
                key={index}
                className="bg-[#1D1D1D] rounded-lg p-6 hover:bg-[#1D1D1D]/70 transition-all duration-300"
              >
                <div className="mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300">{category.description}</p>
              </div>
            ))}
          </div>

          {/* Featured Partners */}
          <h2 className="text-2xl font-bold text-white mb-8">Featured Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-[#1D1D1D] rounded-lg p-6 hover:bg-[#1D1D1D]/70 transition-all duration-300"
              >
                <div className="mb-4">
                  <svg className="w-12 h-12 text-[#D2964B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 mb-4">{partner.description}</p>
                <div className="flex items-center text-sm mb-4">
                  <span className="flex items-center text-[#D2964B]">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {partner.category}
                  </span>
                </div>
                <div className="border-t border-gray-800 pt-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {partner.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-[#D2964B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership Benefits */}
          <div className="bg-[#1D1D1D] rounded-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Partnership Benefits</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Join our ecosystem and unlock exclusive benefits for your organization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg font-semibold text-[#D2964B] mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership CTA */}
          <div className="bg-[#1D1D1D] rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Become a Partner</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Interested in partnering with MetaWealth? We're always looking for innovative companies to join our ecosystem.
            </p>
            <button className="bg-[#D2964B] hover:bg-[#c48a45] text-white px-8 py-3 rounded transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </main>
    </>
  );
} 