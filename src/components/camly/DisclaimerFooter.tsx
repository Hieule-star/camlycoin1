import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle } from 'lucide-react';

export const DisclaimerFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container-wide">
        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-background/80" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-background mb-2">
                {t('disclaimer.title')}
              </h3>
              <p className="text-sm text-background/70 leading-relaxed">
                {t('disclaimer.text')}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <div className="font-heading text-xl font-semibold">
              CAMLY
            </div>

            {/* Copyright */}
            <p className="text-sm text-background/60">
              {t('disclaimer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
