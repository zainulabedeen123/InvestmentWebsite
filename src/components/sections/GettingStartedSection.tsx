import { StepCardProps } from '@/types';

interface GettingStartedSectionProps {
  steps: StepCardProps[];
}

export default function GettingStartedSection({ steps }: GettingStartedSectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#D2964B]">
          Getting Started is Easy
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.stepNumber}
              className="p-6 bg-[#1D1D1D] rounded-lg hover:bg-[#1D1D1D]/70 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#D2964B] rounded-full flex items-center justify-center text-sm font-bold text-white">
                  {step.stepNumber}
                </div>
                <h3 className="text-xl font-semibold ml-3 text-white">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                {step.description}
              </p>
              <p className="text-sm text-[#D2964B]">
                Estimated time: {step.estimatedTime}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 