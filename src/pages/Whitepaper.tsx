import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/camly/Navigation';
import { DisclaimerFooter } from '@/components/camly/DisclaimerFooter';

const Whitepaper = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t('whitepaper.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t('whitepaper.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
              <p className="text-muted-foreground text-lg">
                {t('whitepaper.placeholder')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerFooter />
    </div>
  );
};

export default Whitepaper;
