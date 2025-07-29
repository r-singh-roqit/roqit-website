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
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight" data-testid="text-platform-title">
            ROQIT Integrated Platform
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="text-platform-description">
            Comprehensive features covering every aspect of fleet management and optimization
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="platform-features-grid">
          {platformFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
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
