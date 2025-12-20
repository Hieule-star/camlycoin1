import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import camlyLogo from '@/assets/camly-logo.png';

const CONTRACT_ADDRESS = '0x0910320181889fefde0bb1ca63962b0a8882e413';

export const HeroSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    toast({
      title: t('hero.copied'),
      duration: 2000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-40" />

      <div className="container-narrow relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={camlyLogo} 
            alt="Camly Coin Logo" 
            className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain drop-shadow-2xl mx-auto"
          />
        </div>

        {/* Title */}
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Camly Coin
        </h1>

        {/* Tagline */}
        <p className="font-heading text-xl md:text-2xl text-primary mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('hero.tagline')}
        </p>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {t('hero.description')}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">
            {t('hero.blockchain')}
          </span>
          <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">
            {t('hero.standard')}
          </span>
        </div>

        {/* Contract Address */}
        <div className="max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-sm text-muted-foreground mb-2">{t('hero.contract')}</p>
          <div className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg">
            <code className="flex-1 text-xs md:text-sm font-mono text-foreground/80 truncate">
              {CONTRACT_ADDRESS}
            </code>
            <Button
              variant="ghost"
              size="icon"
              onClick={copyAddress}
              className="shrink-0 hover:bg-primary/10"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
            <a
              href={`https://bscscan.com/token/${CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        {/* Launch Date */}
        <p className="mt-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {t('hero.launchDate')}
        </p>
      </div>
    </section>
  );
};
