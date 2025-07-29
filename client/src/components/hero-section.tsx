import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-light py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg">
            <h1 className="text-4xl lg:text-6xl font-bold text-dark leading-tight mb-6" data-testid="text-hero-title">
              The future of <span className="text-primary">sustainable asset intelligence</span> starts here
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-testid="text-hero-description">
              ROQIT is a modular, AI powered platform re-imagining how businesses manage and optimize assets - mobile or stationary - to unlock operational efficiency and measurable ESG impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" data-testid="button-contact-us">
                <Button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-colors transform hover:scale-105">
                  Contact Us Today
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors"
                data-testid="button-watch-demo"
              >
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* Hero dashboard mockup */}
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Fleet management dashboard interface" 
              className="rounded-2xl shadow-2xl" 
              data-testid="img-hero-dashboard"
            />
            
            {/* Floating metrics cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 transform rotate-3" data-testid="card-co2-metric">
              <div className="text-sm text-gray-500">CO2 Saved</div>
              <div className="text-2xl font-bold text-primary">3.6 <span className="text-sm">Kgs</span></div>
              <div className="text-xs text-primary">↑ 12% from last week</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 transform -rotate-2" data-testid="card-efficiency-metric">
              <div className="text-sm text-gray-500">Cost Efficiency</div>
              <div className="text-2xl font-bold text-secondary">30-40%</div>
              <div className="text-xs text-gray-500">lower than competitors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
