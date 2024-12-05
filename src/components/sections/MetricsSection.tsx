import { MetricCardProps } from '@/types';

interface MetricsSectionProps {
  metrics: MetricCardProps[];
}

export default function MetricsSection({ metrics }: MetricsSectionProps) {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#333333] rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-700">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="px-8 py-6 text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-1/4 w-1/2 bg-primary/5 blur-2xl rounded-full" />
      </div>
    </section>
  );
} 