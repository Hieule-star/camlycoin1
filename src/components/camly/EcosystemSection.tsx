import { useLanguage } from '@/contexts/LanguageContext';
import { Users2, Trophy, Handshake, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
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

        {/* Fun Ecosystem CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 border border-primary/10">
            <div className="flex items-center gap-2 text-primary">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">
                {t('ecosystem.funLabel')}
              </span>
              <Sparkles className="h-5 w-5" />
            </div>
            <p className="text-muted-foreground max-w-md">
              {t('ecosystem.funDesc')}
            </p>
            <Button
              asChild
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
            >
              <a href="https://fun.rich" target="_blank" rel="noopener noreferrer">
                {t('ecosystem.funBtn')}
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
