import { Navigation } from '@/components/camly/Navigation';
import { HeroSection } from '@/components/camly/HeroSection';
import { AboutSection } from '@/components/camly/AboutSection';
import { TokenInfoSection } from '@/components/camly/TokenInfoSection';
import { TransparencySection } from '@/components/camly/TransparencySection';
import { PurposeSection } from '@/components/camly/PurposeSection';
import { EcosystemSection } from '@/components/camly/EcosystemSection';
import { PhilosophySection } from '@/components/camly/PhilosophySection';
import { ContactSection } from '@/components/camly/ContactSection';
import { DisclaimerFooter } from '@/components/camly/DisclaimerFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <TokenInfoSection />
        <TransparencySection />
        <PurposeSection />
        <EcosystemSection />
        <PhilosophySection />
        <ContactSection />
      </main>
      <DisclaimerFooter />
    </div>
  );
};

export default Index;
