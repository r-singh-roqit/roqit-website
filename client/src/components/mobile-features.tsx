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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4" data-testid="text-mobile-features-title">
            Comprehensive Mobile Features
          </h2>
          <p className="text-xl text-gray-600" data-testid="text-mobile-features-description">
            Manage your fleet operations on the go with our powerful mobile applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center" data-testid={`mobile-feature-${index}`}>
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4" data-testid={`mobile-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600" data-testid={`mobile-feature-description-${index}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
