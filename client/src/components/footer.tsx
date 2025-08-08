import { Link } from "wouter";
import { Linkedin } from "lucide-react";
import roqitLogoWhite from "@assets/ROQIT_solid_white_blue_horizontal_1753942131887.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer 
      ref={ref}
      className={`bg-dark text-white py-20 lg:py-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <img 
              src={roqitLogoWhite} 
              alt="ROQIT" 
              className="h-8 w-auto object-contain mb-4"
              data-testid="image-footer-logo"
            />
            <p className="text-gray-300 mb-6 max-w-md" data-testid="text-footer-description">
              Platform re-imagining how businesses manage and optimize assets to unlock operational efficiency and measurable ESG impact.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/roqit/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-linkedin">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:text-right">
            <h4 className="font-semibold mb-4" data-testid="text-footer-links-title">Quick Links</h4>
            <div className="flex flex-col gap-3 md:items-end">
              <Link href="/about" data-testid="link-footer-about"><span className="text-gray-300 hover:text-primary transition-colors">About Us</span></Link>
              <a href="#contact" data-testid="link-footer-contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a>
              <Link href="/privacy" data-testid="link-footer-privacy"><span className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</span></Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300" data-testid="text-footer-copyright">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-sm">
            <p>&copy; 2025 ROQIT™. All rights reserved.</p>
            <p>ROQIT® is a registered trademark.</p>
            <p>Built with sustainable technology principles.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
