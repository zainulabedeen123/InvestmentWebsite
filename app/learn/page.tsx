'use client';

import Navbar from '@/components/Navbar';

export default function LearnPage() {
  const categories = [
    {
      name: 'Basics',
      description: 'Foundation knowledge for real estate investment',
      icon: (
        <svg className="w-8 h-8 text-[#D2964B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      name: 'Technology',
      description: 'Blockchain and tokenization in real estate',
      icon: (
        <svg className="w-8 h-8 text-[#D2964B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      name: 'Strategy',
      description: 'Investment strategies and portfolio management',
      icon: (
        <svg className="w-8 h-8 text-[#D2964B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const articles = [
    {
      title: 'Getting Started with Real Estate Investment',
      description: 'Learn the basics of real estate investment and how to build your portfolio.',
      category: 'Basics',
      readTime: '5 min',
      author: 'Sarah Johnson',
      date: 'Mar 15, 2024'
    },
    {
      title: 'Understanding Tokenization',
      description: 'Discover how blockchain technology is revolutionizing real estate investment.',
      category: 'Technology',
      readTime: '8 min',
      author: 'Michael Chen',
      date: 'Mar 14, 2024'
    },
    {
      title: 'Investment Strategies',
      description: 'Explore different strategies for maximizing your real estate investment returns.',
      category: 'Strategy',
      readTime: '10 min',
      author: 'David Wilson',
      date: 'Mar 13, 2024'
    },
    {
      title: 'Real Estate Market Analysis',
      description: 'Learn how to analyze real estate markets and identify opportunities.',
      category: 'Strategy',
      readTime: '12 min',
      author: 'Emma Thompson',
      date: 'Mar 12, 2024'
    },
    {
      title: 'Smart Contracts in Real Estate',
      description: 'Understanding how smart contracts are transforming property transactions.',
      category: 'Technology',
      readTime: '7 min',
      author: 'Alex Rivera',
      date: 'Mar 11, 2024'
    },
    {
      title: 'Risk Management in Real Estate',
      description: 'Essential strategies for managing investment risks in real estate.',
      category: 'Basics',
      readTime: '9 min',
      author: 'Rachel Kim',
      date: 'Mar 10, 2024'
    }
  ];

  const BookIcon = () => (
    <svg className="w-12 h-12 text-[#D2964B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#D2964B] mb-4">Learn About Real Estate Investment</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Expand your knowledge about real estate investment with our comprehensive learning resources.
              From basics to advanced strategies, we've got you covered.
            </p>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
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

          {/* Featured Article */}
          <div className="bg-[#1D1D1D] rounded-lg p-8 mb-16">
            <div className="max-w-3xl mx-auto">
              <span className="text-[#D2964B] text-sm font-semibold">Featured Article</span>
              <h2 className="text-2xl font-bold text-white mt-2 mb-4">
                The Complete Guide to Real Estate Tokenization
              </h2>
              <p className="text-gray-300 mb-6">
                Dive deep into the world of real estate tokenization. Learn how this revolutionary technology
                is making real estate investment more accessible, liquid, and efficient than ever before.
              </p>
              <button className="bg-[#D2964B] hover:bg-[#c48a45] text-white px-6 py-3 rounded transition-colors">
                Read Full Guide
              </button>
            </div>
          </div>

          {/* Latest Articles */}
          <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div 
                key={index}
                className="bg-[#1D1D1D] rounded-lg p-6 hover:bg-[#1D1D1D]/70 transition-all duration-300"
              >
                <div className="mb-4">
                  <BookIcon />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{article.title}</h3>
                <p className="text-gray-300 mb-4">{article.description}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="flex items-center text-[#D2964B]">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {article.category}
                  </span>
                  <span className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {article.readTime}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400 border-t border-gray-800 pt-4">
                  <span>{article.author}</span>
                  <span>{article.date}</span>
                </div>
                <button className="w-full mt-6 bg-[#D2964B] hover:bg-[#c48a45] text-white py-2 rounded transition-colors">
                  Read Article
                </button>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-16 bg-[#1D1D1D] rounded-lg p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter to receive the latest insights and updates about real estate investment.
              </p>
              <div className="flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-[#292929] text-white rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2964B]"
                />
                <button className="bg-[#D2964B] hover:bg-[#c48a45] text-white px-6 py-2 rounded-r transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 