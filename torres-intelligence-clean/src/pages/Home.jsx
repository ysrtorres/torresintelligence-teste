import React from 'react';
import HeroSection from '@/components/landing/HeroSection';
import ProblemSection from '@/components/landing/ProblemSection';
import SolutionSection from '@/components/landing/SolutionSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import PlansSection from '@/components/landing/PlansSection';
import DifferentialsSection from '@/components/landing/DifferentialsSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import FloatingWhatsApp from '@/components/landing/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <PlansSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}