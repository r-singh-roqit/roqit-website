import { Button } from "@/components/ui/button";
import { Leaf, Coins, BarChart3 } from "lucide-react";

export default function SustainabilitySection() {
  const features = [
    {
      icon: Leaf,
      title: "Real-time Emissions Tracking",
      description: "Monitor CO2 emissions across your entire fleet with precise measurements",
      color: "bg-primary text-white"
    },
    {
      icon: Coins,
      title: "Carbon Credit Management",
      description: "Generate and trade carbon credits from your sustainability initiatives",
      color: "bg-accent text-white"
    },
    {
      icon: BarChart3,
      title: "ESG Reporting",
      description: "Comprehensive environmental impact reports for stakeholders",
      color: "bg-secondary text-white"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6" data-testid="text-sustainability-title">
              Compliance & Carbon Accounting
            </h2>
            <p className="text-xl text-gray-600 mb-8" data-testid="text-sustainability-description">
              Measure and monetize fleet emissions with intelligent carbon credit tracking and automated reporting.
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4" data-testid={`sustainability-feature-${index}`}>
                    <div className={`w-8 h-8 ${feature.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                      <IconComponent size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <Button className="bg-primary text-white px-8 py-4 hover:bg-accent" data-testid="button-explore-sustainability">
              Explore Sustainability Features
            </Button>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Sustainable technology with wind turbines and green energy systems" 
              className="rounded-2xl shadow-xl" 
              data-testid="img-sustainability"
            />
            
            {/* Floating sustainability metrics */}
            <div className="bg-white rounded-xl shadow-lg p-6 -mt-16 ml-8 max-w-sm relative z-10" data-testid="sustainability-metrics">
              <h4 className="font-semibold text-dark mb-4">Sustainability Impact</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">CO2 Reduced</span>
                  <span className="font-semibold text-primary">847 tons</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Carbon Credits</span>
                  <span className="font-semibold text-accent">1,240</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ESG Score</span>
                  <span className="font-semibold text-secondary">A+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
