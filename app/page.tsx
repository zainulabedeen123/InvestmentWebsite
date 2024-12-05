import HeroSection from '@/components/sections/HeroSection';
import Navbar from '@/components/layout/Navbar';
import MetricsSection from '@/components/sections/MetricsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ROISection from '@/components/sections/ROISection';
import GettingStartedSection from '@/components/sections/GettingStartedSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import PartnersSection from '@/components/sections/PartnersSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import AppDownloadSection from '@/components/sections/AppDownloadSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  const metrics = [
    { value: '50K+', label: 'User Accounts' },
    { value: '$19.8m', label: 'Total Value Locked' },
    { value: '113', label: 'Units' },
    { value: '31', label: 'Available Countries' },
    { value: '$600K+', label: 'Yields Distributed' },
  ];

  const features = [
    {
      title: 'Fully Managed Process',
      description: 'We handle all the paperwork and management process, making investing in real estate as easy as buying stocks.',
      icon: '🏢'
    },
    {
      title: 'Ease of Use',
      description: 'Simple and intuitive platform, from setup to portfolio management.',
      icon: '🎯'
    },
    {
      title: 'Portfolio Diversification',
      description: 'Invest across multiple properties and locations with minimal capital.',
      icon: '📊'
    },
    {
      title: 'Quarterly Exit Events',
      description: 'Regular opportunities to sell your tokens and realize gains.',
      icon: '📅'
    }
  ];

  const steps = [
    {
      title: 'Create Account',
      description: 'Create an account with your email and verify your identity.',
      estimatedTime: '5 minutes',
      stepNumber: 1
    },
    {
      title: 'Get Verified',
      description: 'Complete KYC/AML verification to start investing.',
      estimatedTime: '10 minutes',
      stepNumber: 2
    },
    {
      title: 'Browse Assets',
      description: 'Explore available properties and invest with as little as $100.',
      estimatedTime: '2 minutes',
      stepNumber: 3
    }
  ];

  const partners = [
    { name: 'Solana', logo: '/partners/solana.svg' },
    { name: 'Circle', logo: '/partners/circle.svg' },
    { name: 'AWS', logo: '/partners/aws.svg' }
  ];

  const testimonials = [
    {
      name: 'John D.',
      rating: 5,
      comment: 'MetaWealth has transformed how I invest in real estate. The platform is intuitive and the returns are great.',
      image: '/testimonials/john.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <main>
        <HeroSection />
        <div className="space-y-0">
          <MetricsSection metrics={metrics} />
          <FeaturesSection features={features} />
          <ROISection />
          <GettingStartedSection steps={steps} />
          <HowItWorksSection />
          <PartnersSection partners={partners} />
          <TestimonialsSection testimonials={testimonials} />
          <AppDownloadSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
