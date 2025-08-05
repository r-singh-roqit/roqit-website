import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import tripDetails from "@assets/Page 2_1753947836203.jpg"; 
import vehicleDetails from "@assets/Page 3_1754032093043.jpg";
import driverView from "@assets/Page 4_1754032093046.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AnalyticsShowcase() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  
  const screenshots = [
    {
      src: tripDetails,
      title: "Trip Management System",
      description: "Detailed trip tracking, assignment management, and operational workflow control"
    },
    {
      src: vehicleDetails,
      title: "Vehicle Details",
      description: "Access comprehensive data about your vehicles with real-time tracking and status monitoring"
    },
    {
      src: driverView,
      title: "Driver View",
      description: "Individual driver view with detailed performance metrics, trip history, and scoring system"
    }
  ];



  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className={`relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/5 -z-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20 lg:mb-24">

          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight" data-testid="text-analytics-title">
            Powerful insights at 
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"> your fingertips</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12" data-testid="text-analytics-description">
            See our fleet management platform in action with real dashboard views showing comprehensive analytics, vehicle tracking, and operational insights.
          </p>
        </div>

        {/* Screenshots Showcase */}
        <div className="mb-20 lg:mb-24">
          <div className="relative glassmorphism rounded-3xl p-8 lg:p-12 shadow-2xl">
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


      </div>
    </section>
  );
}