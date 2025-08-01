import { Link } from "wouter";
import { Linkedin } from "lucide-react";
import roqitLogoWhite from "@assets/ROQIT_solid_white_blue_horizontal_1753942131887.jpg";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img 
              src={roqitLogoWhite} 
              alt="ROQIT" 
              className="h-8 w-auto object-contain mb-4"
              data-testid="image-footer-logo"
            />
            <p className="text-gray-300 mb-6 max-w-md" data-testid="text-footer-description">
              AI-powered platform re-imagining how businesses manage and optimize assets to unlock operational efficiency and measurable ESG impact.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/roqit/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-linkedin">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-solutions-title">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/#solutions" data-testid="link-footer-fleet-management"><span className="text-gray-300 hover:text-primary transition-colors">Fleet Management</span></Link></li>
              <li><Link href="/#solutions" data-testid="link-footer-route-optimization"><span className="text-gray-300 hover:text-primary transition-colors">Route Optimization</span></Link></li>
              <li><Link href="/#sustainability" data-testid="link-footer-carbon-accounting"><span className="text-gray-300 hover:text-primary transition-colors">Carbon Accounting</span></Link></li>
              <li><Link href="/#platform" data-testid="link-footer-insurance-services"><span className="text-gray-300 hover:text-primary transition-colors">Insurance Services</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-company-title">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" data-testid="link-footer-about"><span className="text-gray-300 hover:text-primary transition-colors">About Us</span></Link></li>
              <li><Link href="/contact" data-testid="link-footer-contact"><span className="text-gray-300 hover:text-primary transition-colors">Contact</span></Link></li>
              <li><Link href="/privacy" data-testid="link-footer-privacy"><span className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</span></Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300" data-testid="text-footer-copyright">
          <p>&copy; 2024 ROQIT. All rights reserved. Built with sustainable technology principles.</p>
        </div>
      </div>
    </footer>
  );
}
