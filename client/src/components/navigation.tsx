import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import roqitLogo from "@/assets/roqit-logo-light.svg";
import roqitLogoWhite from "@/assets/roqit-logo-dark.svg";
import ThemeToggle from "./theme-toggle";
import { useTheme } from "@/contexts/theme-context";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => location === path;

  return (
    <nav className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-700/60 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" data-testid="link-home">
                <img 
                  src={theme === 'dark' ? roqitLogoWhite : roqitLogo} 
                  alt="ROQIT" 
                  className="h-14 w-auto object-contain"
                />
              </Link>
            </div>

          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/about" data-testid="link-about-us">
              <span className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium">
                About Us
              </span>
            </Link>
            <ThemeToggle />
            <Link href="/contact" data-testid="button-contact-us">
              <Button className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-xl px-6 py-2 font-medium">
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700" data-testid="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/about" data-testid="mobile-link-about-us">
              <div className="block px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium">
                About Us
              </div>
            </Link>
            <Link href="/contact" data-testid="mobile-button-contact-us">
              <Button className="w-full bg-gradient-to-r from-primary to-accent text-white mt-2 rounded-xl font-medium">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
