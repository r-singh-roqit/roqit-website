import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Smartphone, Truck, Building2, TrendingUp, Shield, Leaf } from "lucide-react";

export default function RoqitArchitecture() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    {
      id: 0,
      title: "ROQIT Application",
      icon: <Smartphone className="w-8 h-8" />,
      description: "AI-powered mobile and web platform",
      details: [
        "Real-time fleet monitoring",
        "Predictive maintenance alerts",
        "Driver behavior analytics",
        "Route optimization"
      ],
      color: "from-blue-500 to-blue-600",
      position: { x: 10, y: 50 }
    },
    {
      id: 1,
      title: "Smart Devices",
      icon: <Shield className="w-8 h-8" />,
      description: "IoT sensors and telematics",
      details: [
        "GPS tracking modules",
        "Engine diagnostics sensors",
        "Fuel monitoring systems",
        "Driver safety cameras"
      ],
      color: "from-purple-500 to-purple-600",
      position: { x: 35, y: 30 }
    },
    {
      id: 2,
      title: "Fleet Operations",
      icon: <Truck className="w-8 h-8" />,
      description: "Connected vehicle ecosystem",
      details: [
        "Real-time vehicle status",
        "Automated compliance reporting",
        "Maintenance scheduling",
        "Carbon footprint tracking"
      ],
      color: "from-green-500 to-green-600",
      position: { x: 60, y: 50 }
    },
    {
      id: 3,
      title: "Business Intelligence",
      icon: <Building2 className="w-8 h-8" />,
      description: "Enterprise-grade insights",
      details: [
        "Cost reduction analytics",
        "Sustainability reporting",
        "ROI optimization",
        "Strategic planning tools"
      ],
      color: "from-orange-500 to-orange-600",
      position: { x: 85, y: 70 }
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: "30-40% Cost Reduction",
      description: "Optimize fuel consumption, reduce maintenance costs, and improve operational efficiency"
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-500" />,
      title: "Carbon Neutral Operations",
      description: "Track, reduce, and offset carbon emissions with AI-powered sustainability insights"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: "Enhanced Safety",
      description: "Real-time driver monitoring and predictive maintenance prevent accidents and breakdowns"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6" data-testid="text-architecture-title">
            How ROQIT Works
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto" data-testid="text-architecture-description">
            From smart devices to business intelligence - see how our integrated ecosystem transforms fleet operations
          </p>
        </div>

        {/* Architecture Flow Diagram */}
        <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 mb-16 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20"></div>
          
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {steps.slice(0, -1).map((step, index) => {
              const nextStep = steps[index + 1];
              return (
                <line
                  key={index}
                  x1={step.position.x + 5}
                  y1={step.position.y}
                  x2={nextStep.position.x - 5}
                  y2={nextStep.position.y}
                  stroke={activeStep >= index + 1 ? "#3b82f6" : "#e2e8f0"}
                  strokeWidth="0.5"
                  strokeDasharray={activeStep >= index + 1 ? "0" : "2,2"}
                  className="transition-all duration-1000"
                />
              );
            })}
          </svg>

          {/* Step Nodes */}
          <div className="relative h-96">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                  activeStep === index ? 'scale-110 z-10' : 'scale-100 z-0'
                }`}
                style={{ 
                  left: `${step.position.x}%`, 
                  top: `${step.position.y}%` 
                }}
                data-testid={`architecture-step-${index}`}
              >
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center text-white cursor-pointer transition-all duration-500 ${
                    activeStep === index ? 'ring-4 ring-blue-200 dark:ring-blue-600' : ''
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {step.icon}
                </div>
                <div className="text-center mt-4 max-w-32">
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden" data-testid="architecture-details">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center text-white mr-4`}>
                  {steps[activeStep].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {steps[activeStep].description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                {steps[activeStep].details.map((detail, index) => (
                  <div 
                    key={index}
                    className={`flex items-center space-x-3 transition-all duration-500 delay-${index * 100}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    <span className="text-slate-700 dark:text-slate-300">{detail}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Interactive Controls */}
          <Card data-testid="architecture-controls">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Explore Each Component
              </h3>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeStep === index
                        ? 'bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-600'
                        : 'bg-gray-50 dark:bg-slate-700 border-2 border-transparent hover:border-gray-200 dark:hover:border-slate-600'
                    }`}
                    data-testid={`button-step-${index}`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-sm`}>
                        {step.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">
                          {step.title}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                          {step.description}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Business Benefits */}
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4" data-testid="text-benefits-title">
            Business Impact
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300" data-testid="text-benefits-description">
            Measurable results that drive your business forward
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              data-testid={`benefit-card-${index}`}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-white dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {benefit.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}