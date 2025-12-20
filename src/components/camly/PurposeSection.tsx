import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Layers, ArrowLeftRight, Award, AlertCircle } from 'lucide-react';

const purposeItems = [
  { key: 'use1', icon: Users },
  { key: 'use2', icon: Layers },
  { key: 'use3', icon: ArrowLeftRight },
  { key: 'use4', icon: Award },
];

export const PurposeSection = () => {
  const { t } = useLanguage();

  return (
    <section id="purpose" className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            {t('purpose.subtitle')}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
            {t('purpose.title')}
          </h2>
        </div>

        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          {t('purpose.intro')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {purposeItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.key}
                className="group text-center p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {t(`purpose.${item.key}`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`purpose.${item.key}Desc`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Important Note */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="flex items-start gap-3 p-4 bg-muted/50 border border-border rounded-lg">
            <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              {t('purpose.note')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
