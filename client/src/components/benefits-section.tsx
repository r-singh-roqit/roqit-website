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
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 mb-6">
            🌟 Platform Advantages
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight" data-testid="text-benefits-title">
            An operating system for the world's <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">physical assets</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto" data-testid="text-benefits-description">
            Built for India's compliance, routes, and driver behaviors with rapid deployment and cost efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 rounded-2xl p-8 hover:shadow-xl hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-2 group"
                data-testid={`card-benefit-${index}`}
              >
                <div className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <IconComponent className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300" data-testid={`text-benefit-title-${index}`}>
                  {benefit.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4" data-testid={`text-benefit-description-${index}`}>
                  {benefit.description}
                </p>
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-testid={`text-benefit-metric-${index}`}>
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
