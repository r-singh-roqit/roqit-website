import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import dashboardBackground from "@assets/Screenshot at Jul 31 11-27-30_1753941475513.png";
import roqitLogoSmall from "@assets/ROQIT_solid_black_blue_horizontal_1753942131887.jpg";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20 lg:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 mb-6">
              🚀 AI-Powered Fleet Intelligence
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6 tracking-tight" data-testid="text-hero-title">
              The future of 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> sustainable asset intelligence </span> 
              starts here
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-xl" data-testid="text-hero-description">
              ROQIT is a modular, AI powered platform re-imagining how businesses manage and optimize assets - mobile or stationary - to unlock operational efficiency and measurable ESG impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact" data-testid="button-contact-us">
                <Button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-primary/25">
                  Contact Us
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
                data-testid="button-watch-demo"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l7-5z"/>
                </svg>
                Watch Demo
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                30-40% Cost Reduction
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                30 Day Deployment
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                AI-Powered
              </div>
            </div>
          </div>
          
          <div className="relative lg:ml-8">
            {/* Modern dashboard mockup */}
            <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl p-6" data-testid="dashboard-mockup">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <img 
                    src={roqitLogoSmall} 
                    alt="ROQIT" 
                    className="h-6 w-auto object-contain"
                  />
                  <span className="font-semibold text-slate-900 dark:text-white">Dashboard</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Dashboard content */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-300/20 rounded-xl p-4">
                  <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">Active Vehicles</div>
                  <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">847</div>
                  <div className="text-xs text-blue-600 dark:text-blue-400">↑ 12% this week</div>
                </div>
                <div className="bg-green-500/10 backdrop-blur-sm border border-green-300/20 rounded-xl p-4">
                  <div className="text-sm text-green-600 dark:text-green-400 mb-1">CO2 Saved</div>
                  <div className="text-2xl font-bold text-green-900 dark:text-green-100">3.6t</div>
                  <div className="text-xs text-green-600 dark:text-green-400">↑ 8% this week</div>
                </div>
              </div>
              
              {/* Chart simulation */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Fleet Performance</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Real-time</span>
                </div>
                <div className="h-20 flex items-end gap-1">
                  {[65, 78, 45, 88, 67, 92, 55, 83, 77, 90, 68, 85].map((height, i) => (
                    <div 
                      key={i} 
                      className="bg-gradient-to-t from-primary/60 to-accent/60 backdrop-blur-sm rounded-t flex-1"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Bottom stats */}
              <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Efficiency: 94.2%</span>
                <span>Cost Savings: $127k</span>
              </div>
            </div>
            
            {/* Floating metrics cards with modern design */}
            <div className="absolute -top-6 -left-6 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-xl p-4 transform rotate-3" data-testid="card-ai-insights">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">AI Insights</span>
              </div>
              <div className="text-lg font-bold text-slate-900 dark:text-white">Route optimized</div>
              <div className="text-xs text-purple-600 dark:text-purple-400">+15% efficiency</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-xl p-4 transform -rotate-2" data-testid="card-carbon-credits">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Carbon Credits</span>
              </div>
              <div className="text-lg font-bold text-slate-900 dark:text-white">1,240</div>
              <div className="text-xs text-green-600 dark:text-green-400">Generated this month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
