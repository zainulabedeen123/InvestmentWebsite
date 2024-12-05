export default function HowItWorksSection() {
  const steps = [
    {
      title: 'Connect your wallet',
      description: 'Connect your digital wallet and fund it with USDC to start investing.'
    },
    {
      title: 'Choose your property',
      description: 'Browse our curated selection of high-quality real estate assets.'
    },
    {
      title: 'Purchase tokens',
      description: 'Buy tokens representing fractional ownership in your chosen property.'
    },
    {
      title: 'Earn returns',
      description: 'Receive regular rental income and potential capital appreciation.'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#D2964B]">
          How it Works
        </h2>
        
        <div className="relative">
          {/* Connection lines */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#D2964B]/20 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="p-6 bg-[#1D1D1D] rounded-lg hover:bg-[#1D1D1D]/70 transition-colors">
                  <div className="w-10 h-10 bg-[#D2964B] rounded-full flex items-center justify-center text-lg font-bold mb-4 mx-auto text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 