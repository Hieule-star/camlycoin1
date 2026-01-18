import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/camly/Navigation';
import { DisclaimerFooter } from '@/components/camly/DisclaimerFooter';
import { Download, Smartphone, Apple, MonitorSmartphone, Check, Share, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const Install = () => {
  const { t } = useLanguage();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // Check if iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // Listen for install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
              <Download className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
              {t('install.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('install.subtitle')}
            </p>
          </div>

          {/* Install Status */}
          {isInstalled ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center mb-8">
              <Check className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h2 className="text-xl font-semibold text-green-500">
                {t('install.alreadyInstalled')}
              </h2>
              <p className="text-muted-foreground mt-2">
                {t('install.alreadyInstalledDesc')}
              </p>
            </div>
          ) : (
            <>
              {/* Install Button for Android/Desktop */}
              {deferredPrompt && (
                <div className="bg-card border border-border rounded-xl p-8 text-center mb-8">
                  <MonitorSmartphone className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-semibold text-foreground mb-3">
                    {t('install.readyToInstall')}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {t('install.clickToInstall')}
                  </p>
                  <Button onClick={handleInstall} size="lg" className="gap-2">
                    <Download className="w-5 h-5" />
                    {t('install.installButton')}
                  </Button>
                </div>
              )}

              {/* iOS Instructions */}
              {isIOS && (
                <div className="bg-card border border-border rounded-xl p-8 mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Apple className="w-8 h-8 text-foreground" />
                    <h2 className="text-2xl font-semibold text-foreground">
                      {t('install.iosTitle')}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0">
                        1
                      </div>
                      <div>
                        <p className="text-foreground font-medium">
                          {t('install.iosStep1')}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Share className="w-5 h-5 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {t('install.iosStep1Desc')}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0">
                        2
                      </div>
                      <div>
                        <p className="text-foreground font-medium">
                          {t('install.iosStep2')}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Plus className="w-5 h-5 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {t('install.iosStep2Desc')}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0">
                        3
                      </div>
                      <div>
                        <p className="text-foreground font-medium">
                          {t('install.iosStep3')}
                        </p>
                        <span className="text-sm text-muted-foreground">
                          {t('install.iosStep3Desc')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Android Instructions */}
              {!isIOS && !deferredPrompt && (
                <div className="bg-card border border-border rounded-xl p-8 mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Smartphone className="w-8 h-8 text-foreground" />
                    <h2 className="text-2xl font-semibold text-foreground">
                      {t('install.androidTitle')}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0">
                        1
                      </div>
                      <p className="text-foreground">
                        {t('install.androidStep1')}
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0">
                        2
                      </div>
                      <p className="text-foreground">
                        {t('install.androidStep2')}
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0">
                        3
                      </div>
                      <p className="text-foreground">
                        {t('install.androidStep3')}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Features */}
          <div className="grid gap-4 md:grid-cols-3 mt-8">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {t('install.feature1Title')}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t('install.feature1Desc')}
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {t('install.feature2Title')}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t('install.feature2Desc')}
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {t('install.feature3Title')}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t('install.feature3Desc')}
              </p>
            </div>
          </div>
        </div>
      </main>

      <DisclaimerFooter />
    </div>
  );
};

export default Install;
