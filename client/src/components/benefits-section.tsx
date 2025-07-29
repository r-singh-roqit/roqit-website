import { DollarSign, MapPin, Rocket, Plug } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "30-40% lower than Global Platforms.",
      metric: "30-40%",
      color: "text-primary bg-primary/10"
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Built for India's compliance, routes, and driver behaviors.",
      metric: "🇮🇳",
      color: "text-secondary bg-secondary/10"
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "Go live in 30 days vs. 90+ days for competitors.",
      metric: "30 days",
      color: "text-accent bg-accent/10"
    },
    {
      icon: Plug,
      title: "Device Agnostic",
      description: "Seamlessly works with any hardware, software, or fleet type.",
      metric: "∞",
      color: "text-purple-600 bg-purple-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4" data-testid="text-benefits-title">
            An operating system for the world's <span className="text-primary">physical assets</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-benefits-description">
            Built for India's compliance, routes, and driver behaviors with rapid deployment and cost efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-light rounded-2xl p-8 hover:shadow-lg transition-shadow"
                data-testid={`card-benefit-${index}`}
              >
                <div className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3" data-testid={`text-benefit-title-${index}`}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4" data-testid={`text-benefit-description-${index}`}>
                  {benefit.description}
                </p>
                <div className="text-2xl font-bold text-primary" data-testid={`text-benefit-metric-${index}`}>
                  {benefit.metric}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
