import { useLanguage } from '@/contexts/LanguageContext';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-card/50">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            {t('about.subtitle')}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
            {t('about.title')}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('about.p1')}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('about.p2')}
          </p>
        </div>

        {/* Quote */}
        <div className="mt-12 max-w-2xl mx-auto">
          <blockquote className="relative">
            <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
            <p className="font-heading text-xl md:text-2xl text-foreground italic text-center leading-relaxed pl-8">
              {t('about.quote')}
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
