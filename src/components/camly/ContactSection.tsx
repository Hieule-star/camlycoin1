import { useLanguage } from '@/contexts/LanguageContext';
import { Mail } from 'lucide-react';

const EMAIL = 'contact@camly.co';

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            {t('contact.subtitle')}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
            {t('contact.title')}
          </h2>
        </div>

        <p className="text-lg text-muted-foreground text-center max-w-xl mx-auto mb-10">
          {t('contact.intro')}
        </p>

        <div className="max-w-md mx-auto text-center">
          <div className="inline-flex items-center gap-3 p-4 bg-background border border-border rounded-xl">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">{t('contact.email')}</p>
              <a
                href={`mailto:${EMAIL}`}
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            {t('contact.response')}
          </p>
        </div>
      </div>
    </section>
  );
};
