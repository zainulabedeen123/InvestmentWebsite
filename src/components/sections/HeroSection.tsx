'use client';

import Image from 'next/image';

export default function HeroSection() {
  const handleCTA = () => {
    // Handle CTA click
    console.log('CTA clicked');
  };

  return (
    <div className="relative bg-background pt-24 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D2964B] leading-tight mb-6">
              Build Your Real Estate Portfolio in Minutes, not Months
            </h1>
            <p className="text-lg sm:text-xl text-white mb-8">
              Use a fully compliant ecosystem real estate platform to gain fractional access to quality real estate assets.
            </p>
            <button
              onClick={handleCTA}
              className="bg-[#D2964B] hover:bg-[#c48a45] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
            >
              Start Building from $100
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right side - PiggyBank Image */}
          <div className="mt-12 lg:mt-0 relative flex justify-center items-center">
            <div className="relative w-[400px] h-[400px]">
              <div className="animate-gentle-float w-full h-full">
                <Image
                  src="/PiggyBank.png"
                  alt="Investment Piggy Bank"
                  width={400}
                  height={400}
                  className="object-contain"
                  priority
                />
                {/* Glowing effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D2964B]/10 to-[#D2964B]/10 blur-3xl -z-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#D2964B]/20 blur-2xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#D2964B]/20 blur-2xl opacity-20" />
      </div>

      <style jsx global>{`
        @keyframes gentle-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-gentle-float {
          animation: gentle-float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 