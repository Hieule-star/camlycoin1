import { useLanguage } from '@/contexts/LanguageContext';
import { Users2, Trophy, Handshake } from 'lucide-react';

const ecosystemItems = [
  { key: 'platform1', icon: Users2 },
  { key: 'platform2', icon: Trophy },
  { key: 'platform3', icon: Handshake },
];

export const EcosystemSection = () => {
  const { t } = useLanguage();

  return (
    <section id="ecosystem" className="section-padding bg-card/50">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            {t('ecosystem.subtitle')}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
            {t('ecosystem.title')}
          </h2>
        </div>

        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          {t('ecosystem.intro')}
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {ecosystemItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.key}
                className="group text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 shadow-lg shadow-primary/5">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {t(`ecosystem.${item.key}`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`ecosystem.${item.key}Desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
