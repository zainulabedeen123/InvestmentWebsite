'use client';

export default function ROISection() {
  const handleCTA = () => {
    // Handle CTA click
    console.log('ROI CTA clicked');
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-8xl sm:text-9xl font-bold mb-8">
            <span className="text-[#D2964B]">20%</span>
          </h2>
          <p className="text-2xl sm:text-3xl text-white mb-12">Projected ROI per year</p>
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
      </div>
      
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1D1D1D]/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl">
          <div className="absolute inset-0 bg-[#D2964B]/5 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
} 