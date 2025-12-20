import { useLanguage } from '@/contexts/LanguageContext';
import { Ban, UserX, ShieldCheck, Eye } from 'lucide-react';

const transparencyItems = [
  { key: 'noIco', icon: Ban },
  { key: 'noVc', icon: UserX },
  { key: 'verified', icon: ShieldCheck },
  { key: 'distribution', icon: Eye },
];

export const TransparencySection = () => {
  const { t } = useLanguage();

  return (
    <section id="transparency" className="section-padding bg-card/50">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            {t('transparency.subtitle')}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
            {t('transparency.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {transparencyItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.key}
                className="group p-6 bg-background border border-border rounded-xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {t(`transparency.${item.key}`)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`transparency.${item.key}Desc`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
