import { Button } from "@/components/ui/button";
import { MapPin, UserCheck, Wrench, Smartphone, Route, Truck, Battery, BarChart3 } from "lucide-react";

export default function SolutionsSection() {
  const fleetFeatures = [
    {
      icon: MapPin,
      title: "GPS Tracking",
      description: "Real-time location tracking with geofencing capabilities"
    },
    {
      icon: UserCheck,
      title: "Driver Behavior Analytics", 
      description: "Monitor and improve driver performance with detailed scorecards"
    },
    {
      icon: Wrench,
      title: "Predictive Maintenance",
      description: "AI-powered maintenance scheduling to prevent breakdowns"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native apps for drivers and fleet managers"
    }
  ];

  const operationalFeatures = [
    {
      icon: Route,
      title: "Route Planning",
      description: "AI-optimized routing for maximum efficiency"
    },
    {
      icon: Truck,
      title: "Delivery Assignment",
      description: "Smart allocation of deliveries to optimize resources"
    },
    {
      icon: Battery,
      title: "Fuel/EV Charge Optimization",
      description: "Optimize energy consumption and reduce costs"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboards",
      description: "Comprehensive insights and reporting tools"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4" data-testid="text-solutions-title">
            Comprehensive Solutions
          </h2>
          <p className="text-xl text-gray-600" data-testid="text-solutions-description">
            Everything you need to manage and optimize your fleet operations
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-dark mb-6" data-testid="text-fleet-management-title">Fleet Management</h3>
            <div className="space-y-4 mb-8">
              {fleetFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3" data-testid={`feature-fleet-${index}`}>
                    <IconComponent className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-dark">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button className="bg-primary text-white hover:bg-accent" data-testid="button-learn-more-fleet">
              Learn More
            </Button>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1565728744382-61accd4aa148?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Fleet management vehicles and technology interface" 
              className="rounded-2xl shadow-xl" 
              data-testid="img-fleet-management"
            />
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <h3 className="text-2xl font-bold text-dark mb-6" data-testid="text-operational-title">Operational Optimization</h3>
            <div className="space-y-4 mb-8">
              {operationalFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3" data-testid={`feature-operational-${index}`}>
                    <IconComponent className="text-secondary mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-dark">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button className="bg-secondary text-white hover:bg-blue-600" data-testid="button-learn-more-operational">
              Learn More
            </Button>
          </div>
          <div className="lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Logistics analytics and optimization dashboard" 
              className="rounded-2xl shadow-xl" 
              data-testid="img-operational-optimization"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
