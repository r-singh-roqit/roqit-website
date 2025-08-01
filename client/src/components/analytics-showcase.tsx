import { BarChart3, TrendingUp, Gauge, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import dashboardMain from "@assets/Page 1_1753947836204.jpg";
import tripDetails from "@assets/Page 2_1753947836203.jpg"; 
import vehicleDetails from "@assets/Page 3_1753947836203.jpg";
import driverView from "@assets/Page 4_1754029511260.jpg";

export default function AnalyticsShowcase() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  
  const screenshots = [
    {
      src: dashboardMain,
      title: "Fleet Overview Dashboard",
      description: "Comprehensive analytics with vehicle operations, driver metrics, and real-time insights"
    },
    {
      src: tripDetails,
      title: "Trip Management System",
      description: "Detailed trip tracking, assignment management, and operational workflow control"
    },
    {
      src: vehicleDetails,
      title: "Vehicle Fleet Monitoring",
      description: "Real-time vehicle tracking, maintenance scheduling, and fleet optimization tools"
    },
    {
      src: driverView,
      title: "Driver Performance Analytics",
      description: "Individual driver insights, trip scoring, and performance optimization metrics"
    }
  ];

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

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/5 -z-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-white/10 text-white ring-1 ring-inset ring-white/20 mb-8 backdrop-blur-sm">
            📊 Live Dashboard Views
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight" data-testid="text-analytics-title">
            Powerful insights at 
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"> your fingertips</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12" data-testid="text-analytics-description">
            See our fleet management platform in action with real dashboard views showing comprehensive analytics, vehicle tracking, and operational insights.
          </p>
        </div>

        {/* Screenshots Showcase */}
        <div className="mb-20">
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            {/* Current Screenshot Display */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
              <img 
                src={screenshots[currentScreenshot].src}
                alt={screenshots[currentScreenshot].title}
                className="w-full h-auto transition-all duration-500"
                data-testid={`screenshot-${currentScreenshot}`}
              />
            </div>
            
            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevScreenshot}
                className="bg-white/20 hover:bg-white/30 border border-white/30 rounded-xl p-3 transition-all duration-300 backdrop-blur-sm"
                data-testid="button-prev-screenshot"
              >
                <ChevronLeft className="text-white" size={24} />
              </button>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2" data-testid={`screenshot-title-${currentScreenshot}`}>
                  {screenshots[currentScreenshot].title}
                </h3>
                <p className="text-slate-300 max-w-md" data-testid={`screenshot-description-${currentScreenshot}`}>
                  {screenshots[currentScreenshot].description}
                </p>
              </div>
              
              <button
                onClick={nextScreenshot}
                className="bg-white/20 hover:bg-white/30 border border-white/30 rounded-xl p-3 transition-all duration-300 backdrop-blur-sm"
                data-testid="button-next-screenshot"
              >
                <ChevronRight className="text-white" size={24} />
              </button>
            </div>
            
            {/* Screenshot Indicators */}
            <div className="flex justify-center gap-3 mt-6">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentScreenshot(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentScreenshot 
                      ? 'bg-blue-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  data-testid={`screenshot-indicator-${index}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group relative overflow-hidden"
                data-testid={`analytics-feature-${index}`}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                    <IconComponent className="text-2xl text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">{feature.title}</h3>
                  
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}