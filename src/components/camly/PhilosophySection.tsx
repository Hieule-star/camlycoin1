import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, Eye, Clock, Heart } from 'lucide-react';

const philosophyItems = [
  { key: 'principle1', icon: Sparkles },
  { key: 'principle2', icon: Eye },
  { key: 'principle3', icon: Clock },
  { key: 'principle4', icon: Heart },
];

export const PhilosophySection = () => {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            {t('philosophy.subtitle')}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
            {t('philosophy.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {philosophyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.key}
                className="group relative pl-16"
              >
                {/* Number indicator */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {t(`philosophy.${item.key}`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`philosophy.${item.key}Desc`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
