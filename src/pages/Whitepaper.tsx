import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/camly/Navigation';
import { DisclaimerFooter } from '@/components/camly/DisclaimerFooter';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

const CONTRACT_ADDRESS = '0x0910320181889fefde0bb1ca63962b0a8882e413';

const Whitepaper = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sections = [
    { id: 'section1', title: t('whitepaper.section1.title') },
    { id: 'section2', title: t('whitepaper.section2.title') },
    { id: 'section3', title: t('whitepaper.section3.title') },
    { id: 'section4', title: t('whitepaper.section4.title') },
    { id: 'section5', title: t('whitepaper.section5.title') },
    { id: 'section6', title: t('whitepaper.section6.title') },
    { id: 'section7', title: t('whitepaper.section7.title') },
    { id: 'section8', title: t('whitepaper.section8.title') },
    { id: 'section9', title: t('whitepaper.section9.title') },
    { id: 'section10', title: t('whitepaper.section10.title') },
    { id: 'section11', title: t('whitepaper.section11.title') },
    { id: 'section12', title: t('whitepaper.section12.title') },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTocOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 border-b border-border">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              {t('whitepaper.title')}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">
              {t('whitepaper.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Table of Contents - Sidebar */}
            <aside className="lg:w-72 flex-shrink-0">
              {/* Mobile TOC Toggle */}
              <div className="lg:hidden mb-6">
                <button
                  onClick={() => setTocOpen(!tocOpen)}
                  className="w-full flex items-center justify-between bg-card border border-border rounded-xl p-4"
                >
                  <span className="font-heading font-semibold text-foreground">
                    {t('whitepaper.toc')}
                  </span>
                  {tocOpen ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
                {tocOpen && (
                  <nav className="mt-2 bg-card border border-border rounded-xl p-4">
                    <ul className="space-y-2">
                      {sections.map((section) => (
                        <li key={section.id}>
                          <button
                            onClick={() => scrollToSection(section.id)}
                            className="text-left w-full text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                          >
                            {section.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </div>

              {/* Desktop TOC */}
              <div className="hidden lg:block sticky top-24">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-4">
                    {t('whitepaper.toc')}
                  </h3>
                  <nav>
                    <ul className="space-y-2">
                      {sections.map((section) => (
                        <li key={section.id}>
                          <button
                            onClick={() => scrollToSection(section.id)}
                            className="text-left w-full text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                          >
                            {section.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </aside>

            {/* Content */}
            <main className="flex-1 max-w-3xl">
              <div className="space-y-12">
                
                {/* Section 1: Abstract */}
                <article id="section1" className="scroll-mt-24">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {t('whitepaper.section1.title')}
                  </h2>
                  <div className="prose prose-lg text-muted-foreground">
                    {t('whitepaper.section1.content').split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </article>

                {/* Section 2: Introduction */}
                <article id="section2" className="scroll-mt-24">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {t('whitepaper.section2.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t('whitepaper.section2.content')}
                  </p>
                  <blockquote className="border-l-4 border-primary bg-primary/5 pl-6 py-4 my-6 rounded-r-xl">
                    <p className="text-foreground font-medium italic text-lg">
                      "{t('whitepaper.section2.quote')}"
                    </p>
                  </blockquote>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('whitepaper.section2.closing')}
                  </p>
                </article>

                {/* Section 3: Core Principles */}
                <article id="section3" className="scroll-mt-24">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {t('whitepaper.section3.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t('whitepaper.section3.intro')}
                  </p>
                  <ul className="space-y-4">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <li key={num} className="flex gap-4">
                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                        <div>
                          <span className="font-semibold text-foreground">
                            {t(`whitepaper.section3.principle${num}.title`)}:
                          </span>{' '}
                          <span className="text-muted-foreground">
                            {t(`whitepaper.section3.principle${num}.desc`)}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>

                {/* Section 4: Token Overview */}
                <article id="section4" className="scroll-mt-24">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                    {t('whitepaper.section4.title')}
                  </h2>
                  <div className="bg-card border border-border rounded-2xl overflow-hidden mb-6">
                    <div className="divide-y divide-border">
                      {[
                        { label: t('whitepaper.section4.tokenName'), value: t('whitepaper.section4.tokenNameValue') },
                        { label: t('whitepaper.section4.symbol'), value: t('whitepaper.section4.symbolValue') },
                        { label: t('whitepaper.section4.blockchain'), value: t('whitepaper.section4.blockchainValue') },
                        { label: t('whitepaper.section4.standard'), value: t('whitepaper.section4.standardValue') },
                        { label: t('whitepaper.section4.launchDate'), value: t('whitepaper.section4.launchDateValue') },
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-4">
                          <span className="text-muted-foreground">{item.label}</span>
                          <span className="font-medium text-foreground">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Contract Address Box */}
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h4 className="font-heading font-semibold text-foreground mb-3">
                      {t('whitepaper.section4.contractTitle')}
                    </h4>
                    <div className="flex items-center gap-3 bg-background border border-border rounded-xl p-4">
                      <code className="flex-1 text-sm md:text-base font-mono text-primary break-all">
                        {CONTRACT_ADDRESS}
                      </code>
                      <button
                        onClick={copyToClipboard}
                        className="flex-shrink-0 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                        title={t('whitepaper.copyContract')}
                      >
                        {copied ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : (
                          <Copy className="h-5 w-5 text-primary" />
                        )}
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      {t('whitepaper.section4.contractNote')}
                    </p>
                  </div>
                </article>

                {/* Section 5: Distribution */}
                <article id="section5" className="scroll-mt-24">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {t('whitepaper.section5.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('whitepaper.section5.intro')}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[1, 2, 3].map((num) => (
                      <li key={num} className="flex gap-4">
                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">
                          {t(`whitepaper.section5.item${num}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="prose prose-lg text-muted-foreground">
                    {t('whitepaper.section5.closing').split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </article>

                {/* Section 6: Utility */}
                <article id="section6" className="scroll-mt-24">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {t('whitepaper.section6.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('whitepaper.section6.intro')}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[1, 2, 3, 4].map((num) => (
                      <li key={num} className="flex gap-4">
                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">
                          {t(`whitepaper.section6.item${num}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('whitepaper.section6.closing')}
                  </p>
                </article>

                {/* Section 7: Ecosystem */}
                <article id="section7" className="scroll-mt-24">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {t('whitepaper.section7.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('whitepaper.section7.intro')}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[1, 2, 3, 4].map((num) => (
                      <li key={num} className="flex gap-4">
                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">
                          {t(`whitepaper.section7.item${num}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('whitepaper.section7.closing')}
                  </p>
                </article>

                {/* Section 8: Governance */}
                <article id="section8" className="scroll-mt-24">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {t('whitepaper.section8.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('whitepaper.section8.intro')}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[1, 2, 3].map((num) => (
                      <li key={num} className="flex gap-4">
                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">
                          {t(`whitepaper.section8.item${num}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('whitepaper.section8.closing')}
                  </p>
                </article>

                {/* Section 9: Security */}
                <article id="section9" className="scroll-mt-24">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {t('whitepaper.section9.title')}
                  </h2>
                  <ul className="space-y-3 mb-6">
                    {[1, 2, 3].map((num) => (
                      <li key={num} className="flex gap-4">
                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">
                          {t(`whitepaper.section9.item${num}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {t('whitepaper.section9.closing') && (
                    <p className="text-muted-foreground leading-relaxed">
                      {t('whitepaper.section9.closing')}
                    </p>
                  )}
                </article>

                {/* Section 10: Risk Awareness */}
                <article id="section10" className="scroll-mt-24">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {t('whitepaper.section10.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('whitepaper.section10.content')}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[1, 2, 3].map((num) => (
                      <li key={num} className="flex gap-4">
                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">
                          {t(`whitepaper.section10.item${num}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('whitepaper.section10.closing')}
                  </p>
                </article>

                {/* Section 11: Legal Disclaimer */}
                <article id="section11" className="scroll-mt-24">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {t('whitepaper.section11.title')}
                  </h2>
                  <div className="bg-muted/30 border border-border rounded-2xl p-6">
                    <div className="prose prose-lg text-muted-foreground">
                      {t('whitepaper.section11.content').split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 last:mb-0 leading-relaxed">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </article>

                {/* Section 12: Conclusion */}
                <article id="section12" className="scroll-mt-24">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {t('whitepaper.section12.title')}
                  </h2>
                  <div className="prose prose-lg text-muted-foreground">
                    {t('whitepaper.section12.content').split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </article>

                {/* Footer */}
                <div className="pt-8 border-t border-border text-center">
                  <p className="text-muted-foreground font-medium">
                    {t('whitepaper.footer')}
                  </p>
                </div>

              </div>
            </main>
          </div>
        </div>
      </section>

      <DisclaimerFooter />
    </div>
  );
};

export default Whitepaper;
