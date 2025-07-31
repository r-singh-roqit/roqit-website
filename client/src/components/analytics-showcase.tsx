import { BarChart3, TrendingUp, Gauge, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardScreenshot from "@assets/Screenshot at Jul 31 11-27-30_1753941475513.png";

export default function AnalyticsShowcase() {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards with real-time vehicle and driver performance metrics"
    },
    {
      icon: TrendingUp,
      title: "Performance Insights",
      description: "Track efficiency trends, charging patterns, and operational optimization opportunities"
    },
    {
      icon: Gauge,
      title: "Energy Management",
      description: "Monitor energy consumption, charging efficiency, and sustainability metrics"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Live fleet tracking with instant alerts and performance notifications"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 overflow-hidden">
      {/* Dashboard Background */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={dashboardScreenshot}
          alt="Fleet analytics dashboard"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-white/10 text-white ring-1 ring-inset ring-white/20 mb-6 backdrop-blur-sm">
              📊 Advanced Fleet Analytics
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight" data-testid="text-analytics-title">
              Powerful insights at 
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> your fingertips</span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed" data-testid="text-analytics-description">
              Transform your fleet operations with comprehensive analytics that provide actionable insights into vehicle performance, energy efficiency, and operational optimization.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">99.7%</div>
                <div className="text-slate-300 text-sm">System Uptime</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-slate-300 text-sm">Real-time Monitoring</div>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/25" data-testid="button-explore-analytics">
              Explore Analytics
            </Button>
          </div>
          
          <div className="relative">
            <div className="grid gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                    data-testid={`analytics-feature-${index}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-slate-300">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}