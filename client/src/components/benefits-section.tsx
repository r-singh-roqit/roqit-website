import { IndianRupee, MapPin, Rocket, Plug } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: IndianRupee,
      title: "Cost Efficiency",
      description: "Reduce operational costs by up to 40% with optimized fleet management and intelligent resource allocation.",
      metric: "40%",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20"
    },
    {
      icon: MapPin,
      title: "Smart Analytics",
      description: "AI-powered insights provide real-time visibility into fleet performance and operational metrics.",
      metric: "24/7",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "Quick implementation with minimal disruption to your existing operations and workflows.",
      metric: "30 Days",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: Plug,
      title: "Universal Integration",
      description: "Seamlessly integrate with any hardware, software, or existing fleet management systems.",
      metric: "100%",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    }
  ];

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className={`py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 lg:mb-24">
          <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 text-primary ring-1 ring-inset ring-primary/20 mb-8 backdrop-blur-sm">
            ⚡ Platform Advantages
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight" data-testid="text-benefits-title">
            Why choose 
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"> ROQIT</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed" data-testid="text-benefits-description">
            Experience the next generation of fleet management with our intelligent platform designed for modern operational excellence and sustainable growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className={`${benefit.bgColor} border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group relative overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                data-testid={`card-benefit-${index}`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                    <IconComponent className="text-2xl text-white" />
                  </div>
                  
                  <div className={`text-3xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-3 transition-transform duration-300 group-hover:scale-110`} data-testid={`text-benefit-metric-${index}`}>
                    {benefit.metric}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300" data-testid={`text-benefit-title-${index}`}>
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed" data-testid={`text-benefit-description-${index}`}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
