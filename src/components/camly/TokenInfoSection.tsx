import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const CONTRACT_ADDRESS = '0x0910320181889fefde0bb1ca63962b0a8882e413';

const tokenData = [
  { key: 'name', value: 'Camly Coin' },
  { key: 'symbol', value: 'CAMLY' },
  { key: 'blockchain', value: 'BNB Chain (BSC)' },
  { key: 'standard', value: 'BEP-20' },
  { key: 'launch', value: 'September 10, 2022' },
];

export const TokenInfoSection = () => {
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
    <section id="token-info" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            {t('tokenInfo.subtitle')}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
            {t('tokenInfo.title')}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="divide-y divide-border">
              {tokenData.map((item) => (
                <div key={item.key} className="flex justify-between items-center px-6 py-4">
                  <span className="text-muted-foreground">{t(`tokenInfo.${item.key}`)}</span>
                  <span className="font-medium text-foreground">{item.value}</span>
                </div>
              ))}

              {/* Contract Address Row */}
              <div className="px-6 py-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">{t('tokenInfo.contract')}</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <code className="flex-1 text-xs md:text-sm font-mono text-foreground/80 truncate">
                    {CONTRACT_ADDRESS}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyAddress}
                    className="shrink-0 hover:bg-primary/10 h-8 w-8"
                  >
                    {copied ? (
                      <Check className="h-3.5 w-3.5 text-green-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Explorer Link */}
          <div className="mt-6 text-center">
            <a
              href={`https://bscscan.com/token/${CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              {t('tokenInfo.explorer')}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
