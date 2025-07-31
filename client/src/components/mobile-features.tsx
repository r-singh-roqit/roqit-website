import { Smartphone, Shield, Palette, Globe } from "lucide-react";

export default function MobileFeatures() {
  const features = [
    {
      icon: Smartphone,
      title: "Simplicity",
      description: "Designed with ease of use in mind, the ROQIT Fleet app streamlines fleet management with intuitive workflows.",
      color: "text-primary bg-primary/10"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Built with robust security measures, ensuring data privacy and compliance with industry standards.",
      color: "text-secondary bg-secondary/10"
    },
    {
      icon: Palette,
      title: "Design",
      description: "A clean and modern interface ensures seamless user experience and efficient task completion.",
      color: "text-accent bg-accent/10"
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Available on mobile and web, empowering fleet managers to oversee operations from anywhere.",
      color: "text-purple-600 bg-purple-100"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 text-primary ring-1 ring-inset ring-primary/20 mb-8 backdrop-blur-sm">
            📱 Mobile Excellence
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight" data-testid="text-mobile-features-title">
            Mobile-first 
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"> fleet management</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed" data-testid="text-mobile-features-description">
            Powerful mobile capabilities that keep you connected to your fleet operations anywhere, anytime
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const gradients = [
              "from-blue-500 to-indigo-600",
              "from-emerald-500 to-teal-600", 
              "from-purple-500 to-pink-600",
              "from-orange-500 to-red-600"
            ];
            const bgColors = [
              "bg-blue-50 dark:bg-blue-900/20",
              "bg-emerald-50 dark:bg-emerald-900/20",
              "bg-purple-50 dark:bg-purple-900/20", 
              "bg-orange-50 dark:bg-orange-900/20"
            ];
            return (
              <div 
                key={index} 
                className={`${bgColors[index]} border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group relative overflow-hidden`}
                data-testid={`mobile-feature-${index}`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                    <IconComponent className="text-3xl text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300" data-testid={`mobile-feature-title-${index}`}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed" data-testid={`mobile-feature-description-${index}`}>
                    {feature.description}
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
