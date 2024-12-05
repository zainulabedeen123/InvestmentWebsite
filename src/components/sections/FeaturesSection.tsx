import { FeatureCardProps } from '@/types';

interface FeaturesSectionProps {
  features: FeatureCardProps[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-[#D2964B]">
          The Stability of Real Estate Meets the Speed & Security of Blockchain
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 bg-[#1D1D1D] rounded-xl border border-gray-800/50 hover:border-[#D2964B]/50 transition-all duration-300"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-[#D2964B]">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-3/4 h-1/2 bg-[#D2964B]/5 blur-2xl rounded-full" />
      </div>
    </section>
  );
} 