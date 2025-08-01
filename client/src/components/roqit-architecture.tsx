import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Smartphone, 
  Truck, 
  Cloud, 
  Cpu, 
  TrendingUp, 
  Shield, 
  Leaf,
  Zap,
  BarChart3,
  Bell,
  MapPin
} from "lucide-react";

export default function RoqitArchitecture() {
  const [animationStep, setAnimationStep] = useState(0);
  const [activeComponent, setActiveComponent] = useState(0);

  const flowSteps = [
    {
      id: 0,
      title: "Smart Device",
      subtitle: "OBD • GPS • Sensors",
      icon: <Cpu className="w-8 h-8" />,
      description: "IoT devices collect real-time vehicle data",
      details: [
        "OBD-II diagnostics",
        "GPS location tracking", 
        "Engine performance sensors",
        "Fuel consumption monitoring"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      id: 1,
      title: "Connected Vehicle", 
      subtitle: "Real-time Data Capture",
      icon: <Truck className="w-8 h-8" />,
      description: "Vehicles transmit live operational data",
      details: [
        "Engine diagnostics",
        "Driver behavior patterns",
        "Route and speed data",
        "Maintenance alerts"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      id: 2,
      title: "ROQIT Cloud Platform",
      subtitle: "AI Processing Engine", 
      icon: <Cloud className="w-8 h-8" />,
      description: "Cloud infrastructure processes and analyzes data",
      details: [
        "AI/ML data processing",
        "Predictive analytics",
        "Real-time computation",
        "Secure data storage"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      id: 3,
      title: "Web & Mobile Apps",
      subtitle: "Fleet Manager Dashboard",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Intuitive interfaces for fleet management",
      details: [
        "Real-time fleet monitoring",
        "Driver mobile app",
        "Fleet manager dashboard",
        "Custom reporting tools"
      ],
      color: "from-orange-500 to-orange-600", 
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      id: 4,
      title: "Insights + Actions",
      subtitle: "Smart Recommendations",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Actionable insights drive business decisions",
      details: [
        "Predictive maintenance alerts",
        "Cost optimization recommendations", 
        "Sustainability reporting",
        "Performance analytics"
      ],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % (flowSteps.length * 2));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const DataFlow = ({ isActive, stepIndex }: { isActive: boolean; stepIndex: number }) => {
    const flowTypes = [
      { color: 'bg-purple-500', label: 'Sensor Data' },
      { color: 'bg-blue-500', label: 'Vehicle Telemetry' },
      { color: 'bg-green-500', label: 'AI Processing' },
      { color: 'bg-orange-500', label: 'Dashboard Updates' }
    ];
    
    const currentFlow = flowTypes[stepIndex] || flowTypes[0];
    
    return (
      <div className={`flex items-center justify-center ${isActive ? 'opacity-100' : 'opacity-40'} transition-all duration-700`}>
        {/* Flowing Data Packets */}
        <div className="relative flex items-center">
          {/* Background Track */}
          <div className="w-16 h-1 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
            {isActive && (
              <div 
                className="h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full animate-pulse"
                style={{
                  animation: 'flowTrack 2s ease-in-out infinite'
                }}
              />
            )}
          </div>
          
          {/* Data Packets */}
          <div className="absolute inset-0 flex items-center justify-start">
            {[1, 2, 3].map((packet, index) => (
              <div
                key={packet}
                className={`w-3 h-3 rounded-full ${currentFlow.color} shadow-lg ${
                  isActive ? 'animate-bounce' : ''
                }`}
                style={{
                  animationDelay: `${index * 0.3}s`,
                  animationDuration: '1.5s',
                  transform: isActive ? `translateX(${index * 20 + Math.sin(Date.now() / 1000 + index) * 10}px)` : 'translateX(0)',
                  transition: 'transform 0.5s ease-in-out'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Enhanced Arrow */}
        <div className="ml-3 flex items-center space-x-1">
          <ArrowRight 
            className={`w-5 h-5 text-blue-500 transition-all duration-500 ${
              isActive ? 'animate-pulse scale-110' : 'scale-100'
            }`} 
          />
          {isActive && (
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
            </div>
          )}
        </div>
        
        {/* Data Type Label */}
        {isActive && (
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-700 px-2 py-1 rounded-full shadow-lg border border-gray-200 dark:border-gray-600">
            <span className="text-xs font-medium text-gray-600 dark:text-gray-300 whitespace-nowrap">
              {currentFlow.label}
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6" data-testid="text-flow-title">
            How ROQIT Works: Smart Flow from Device to Dashboard
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto" data-testid="text-flow-description">
            Discover how ROQIT seamlessly connects hardware, vehicles, and data to power real-time fleet intelligence
          </p>
        </div>

        {/* Horizontal Flow Diagram */}
        <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-12 mb-16 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
          
          {/* Desktop Flow - Horizontal */}
          <div className="hidden lg:block relative">
            <div className="flex items-center justify-between">
              {flowSteps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center">
                  {/* Enhanced Component Circle */}
                  <div
                    className={`flow-component w-24 h-24 rounded-full bg-gradient-to-br ${step.color} shadow-xl flex items-center justify-center text-white cursor-pointer transition-all duration-500 transform hover:scale-110 ${
                      activeComponent === index ? 'ring-4 ring-blue-200 dark:ring-blue-600 scale-110' : ''
                    } ${
                      Math.floor(animationStep / 2) === index ? 'animate-pulse ring-2 ring-white/50' : ''
                    }`}
                    onClick={() => setActiveComponent(index)}
                    data-testid={`flow-component-${index}`}
                  >
                    <div className="relative">
                      {step.icon}
                      {/* Active Data Indicator */}
                      {Math.floor(animationStep / 2) === index && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping" />
                      )}
                    </div>
                  </div>
                  
                  {/* Labels */}
                  <div className="text-center mt-4 max-w-36">
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Enhanced Animated Data Flow */}
                  {index < flowSteps.length - 1 && (
                    <div className="absolute top-12 flex items-center" style={{ left: `${(index + 1) * 20 - 10}%` }}>
                      <DataFlow 
                        isActive={Math.floor(animationStep / 2) === index} 
                        stepIndex={index}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Flow - Vertical */}
          <div className="lg:hidden space-y-8">
            {flowSteps.map((step, index) => (
              <div key={step.id} className="flex items-center space-x-4">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center text-white ${
                    activeComponent === index ? 'ring-4 ring-blue-200 dark:ring-blue-600' : ''
                  }`}
                  onClick={() => setActiveComponent(index)}
                >
                  {step.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {step.subtitle}
                  </p>
                </div>

                {index < flowSteps.length - 1 && (
                  <div className="ml-4">
                    <ArrowRight className="w-5 h-5 text-blue-500 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Active Component Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className={`overflow-hidden ${flowSteps[activeComponent].bgColor} border-2`} data-testid="flow-details">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${flowSteps[activeComponent].color} flex items-center justify-center text-white mr-4 shadow-lg`}>
                  {flowSteps[activeComponent].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {flowSteps[activeComponent].title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {flowSteps[activeComponent].description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                {flowSteps[activeComponent].details.map((detail, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white/60 dark:bg-slate-700/60 rounded-lg backdrop-blur-sm"
                    style={{ 
                      animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{detail}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Component Navigation */}
          <Card data-testid="flow-navigation">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Explore Each Component
              </h3>
              <div className="space-y-3">
                {flowSteps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveComponent(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeComponent === index
                        ? 'bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-600 shadow-md'
                        : 'bg-gray-50 dark:bg-slate-700 border-2 border-transparent hover:border-gray-200 dark:hover:border-slate-600'
                    }`}
                    data-testid={`button-component-${index}`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white`}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900 dark:text-white">
                          {step.title}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                          {step.subtitle}
                        </div>
                      </div>
                      {activeComponent === index && (
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Benefits Summary */}
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6" data-testid="text-benefits-title">
            Real-Time Fleet Intelligence Benefits
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8" data-testid="text-benefits-subtitle">
            ROQIT seamlessly connects hardware, vehicles, and data to power real-time fleet intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
              title: "30-40% Cost Reduction",
              description: "Optimize fuel consumption, reduce maintenance costs, and improve operational efficiency through predictive analytics"
            },
            {
              icon: <Zap className="w-6 h-6 text-purple-500" />,
              title: "Real-Time Monitoring",
              description: "Live vehicle tracking, instant alerts, and immediate response capabilities for enhanced fleet management"
            },
            {
              icon: <Leaf className="w-6 h-6 text-green-500" />,
              title: "Carbon Intelligence",
              description: "Track, reduce, and offset carbon emissions with AI-powered sustainability insights and automated reporting"
            }
          ].map((benefit, index) => (
            <Card 
              key={index}
              className="text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
              data-testid={`benefit-card-${index}`}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-white dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
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

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes flowTrack {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes dataPacketFlow {
          0% { transform: translateX(0px) scale(1); opacity: 0.8; }
          50% { transform: translateX(30px) scale(1.2); opacity: 1; }
          100% { transform: translateX(60px) scale(1); opacity: 0.8; }
        }
        
        .flow-component:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .data-flow-enhanced {
          position: relative;
          overflow: visible;
        }
        
        .data-flow-enhanced::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          transform: translateY(-50%);
          opacity: 0;
          animation: flowGlow 2s ease-in-out infinite;
        }
        
        @keyframes flowGlow {
          0%, 100% { opacity: 0; transform: translateY(-50%) translateX(-100%); }
          50% { opacity: 1; transform: translateY(-50%) translateX(0%); }
        }
      `}</style>
    </section>
  );
}