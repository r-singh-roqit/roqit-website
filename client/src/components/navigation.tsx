import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => location === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" data-testid="link-home">
                <div className="text-2xl font-bold text-primary">ROQIT</div>
              </Link>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-8">
                <Link href="/#solutions" data-testid="link-solutions">
                  <span className={`transition-colors ${isActive('/#solutions') ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
                    Solutions
                  </span>
                </Link>
                <Link href="/#platform" data-testid="link-platform">
                  <span className={`transition-colors ${isActive('/#platform') ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
                    Platform
                  </span>
                </Link>
                <Link href="/about" data-testid="link-about">
                  <span className={`transition-colors ${isActive('/about') ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
                    About
                  </span>
                </Link>
                <Link href="/contact" data-testid="link-contact">
                  <span className={`transition-colors ${isActive('/contact') ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
                    Contact
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="/contact" data-testid="button-get-started">
              <Button className="bg-primary text-white hover:bg-accent">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="md:hidden">
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
        <div className="md:hidden bg-white border-t border-gray-200" data-testid="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/#solutions" data-testid="mobile-link-solutions">
              <div className="block px-3 py-2 text-gray-600 hover:text-primary">Solutions</div>
            </Link>
            <Link href="/#platform" data-testid="mobile-link-platform">
              <div className="block px-3 py-2 text-gray-600 hover:text-primary">Platform</div>
            </Link>
            <Link href="/about" data-testid="mobile-link-about">
              <div className="block px-3 py-2 text-gray-600 hover:text-primary">About</div>
            </Link>
            <Link href="/contact" data-testid="mobile-link-contact">
              <div className="block px-3 py-2 text-gray-600 hover:text-primary">Contact</div>
            </Link>
            <Link href="/contact" data-testid="mobile-button-get-started">
              <Button className="w-full text-left bg-primary text-white mt-2">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
