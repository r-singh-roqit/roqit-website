import { Smartphone, Shield, Brain, Users, Umbrella, Leaf, Check } from "lucide-react";

export default function PlatformMatrix() {
  const platformFeatures = [
    {
      icon: Smartphone,
      title: "Device Agnostic",
      items: [
        "Compatible with any Assets",
        "Multi OBU Capability OEM"
      ],
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Shield,
      title: "Fleet Safety",
      items: [
        "Driver Performance Monitoring",
        "Driver rewards & Incentives"
      ],
      color: "text-green-600 bg-green-50"
    },
    {
      icon: Brain,
      title: "AI / ML",
      items: [
        "Predictive vehicle maintenance",
        "Customized driver coaching",
        "Smart route optimizing"
      ],
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: Users,
      title: "3rd Party Integration",
      items: [
        "Payroll & HR Systems",
        "Digital Payments",
        "Workshops and Repairs"
      ],
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Umbrella,
      title: "Insurance as a Service",
      items: [
        "Usage based Insurance",
        "FNOL (First Notice of Loss)",
        "Road Side Assistance"
      ],
      color: "text-teal-600 bg-teal-50"
    },
    {
      icon: Leaf,
      title: "GHG Accounting",
      items: [
        "Carbon Credits",
        "GHG Quota trading",
        "Carbon trading marketplace"
      ],
      color: "text-green-600 bg-green-50"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/5 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-white/10 text-white ring-1 ring-inset ring-white/20 mb-8 backdrop-blur-sm">
            🎯 Platform Features
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight" data-testid="text-platform-title">
            Integrated 
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"> platform capabilities</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed" data-testid="text-platform-description">
            Advanced features and integrations designed to transform your fleet operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="platform-features-grid">
          {platformFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group relative overflow-hidden"
                data-testid={`platform-feature-${index}`}
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <IconComponent size={24} />
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300" data-testid={`platform-feature-title-${index}`}>
                  {feature.title}
                </h3>
                
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3" data-testid={`platform-feature-item-${index}-${itemIndex}`}>
                      <Check className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
