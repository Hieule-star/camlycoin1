import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface NavItem {
  key: string;
  href: string;
  isPage?: boolean;
  isExternal?: boolean;
}
const navItems: NavItem[] = [{
  key: 'about',
  href: '#about'
}, {
  key: 'tokenInfo',
  href: '#token-info'
}, {
  key: 'transparency',
  href: '#transparency'
}, {
  key: 'purpose',
  href: '#purpose'
}, {
  key: 'ecosystem',
  href: '#ecosystem'
}, {
  key: 'philosophy',
  href: '#philosophy'
}, {
  key: 'whitepaper',
  href: '/whitepaper',
  isPage: true
}, {
  key: 'funRich',
  href: 'https://fun.rich',
  isExternal: true
}, {
  key: 'contact',
  href: '#contact'
}];
export const Navigation = () => {
  const {
    t
  } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = (item: NavItem) => {
    setIsMobileMenuOpen(false);
    if (item.isExternal) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
    } else if (item.isPage) {
      navigate(item.href);
    } else {
      // If we're not on home page, navigate there first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.querySelector(item.href);
          element?.scrollIntoView({
            behavior: 'smooth'
          });
        }, 100);
      } else {
        const element = document.querySelector(item.href);
        element?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50' : 'bg-transparent'}`}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" onClick={e => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }} className="font-heading text-xl font-semibold text-primary hover:text-primary/80 transition-colors md:text-lg text-center">
            CAMLY COIN  
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(item => <button key={item.key} onClick={() => handleNavClick(item)} className={`px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-primary/5 ${item.isPage && location.pathname === item.href ? 'text-primary' : 'text-foreground/70 hover:text-primary'}`}>
                {t(`nav.${item.key}`)}
              </button>)}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="lg:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-1">
              {navItems.map(item => <button key={item.key} onClick={() => handleNavClick(item)} className={`px-4 py-3 text-left text-sm font-medium transition-colors rounded-md hover:bg-primary/5 ${item.isPage && location.pathname === item.href ? 'text-primary' : 'text-foreground/70 hover:text-primary'}`}>
                  {t(`nav.${item.key}`)}
                </button>)}
            </div>
          </div>}
      </div>
    </nav>;
};