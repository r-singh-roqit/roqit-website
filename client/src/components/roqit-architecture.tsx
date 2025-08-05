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
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <div className="relative">
            <div className="w-6 h-6 bg-white/90 rounded-sm flex items-center justify-center">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
                <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
                <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
                <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
              </div>
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      ),
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
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <div className="relative">
            <div className="w-7 h-4 bg-white/90 rounded-sm flex items-center justify-between px-1">
              <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
              <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
            </div>
            <div className="absolute -bottom-1 left-0 w-2 h-2 bg-gray-700 rounded-full"></div>
            <div className="absolute -bottom-1 right-0 w-2 h-2 bg-gray-700 rounded-full"></div>
            <div className="absolute -top-1 right-0 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      ),
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
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <div className="relative">
            <div className="w-6 h-4 bg-white/90 rounded-full flex items-center justify-center">
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-green-600 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-green-600 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1 h-1 bg-green-600 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        </div>
      ),
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
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <div className="relative">
            <div className="w-5 h-7 bg-white/90 rounded-sm flex flex-col items-center justify-center space-y-1">
              <div className="w-3 h-2 bg-orange-600 rounded-sm opacity-70"></div>
              <div className="w-1 h-1 bg-orange-600 rounded-full"></div>
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
          </div>
        </div>
      ),
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
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <div className="relative">
            <div className="w-6 h-5 bg-white/90 rounded-sm flex items-end justify-center space-x-1 p-1">
              <div className="w-1 h-2 bg-red-600 rounded-sm"></div>
              <div className="w-1 h-3 bg-red-600 rounded-sm"></div>
              <div className="w-1 h-4 bg-red-600 rounded-sm"></div>
            </div>
          </div>
        </div>
      ),
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
    const [blinkState, setBlinkState] = useState(0);
    
    useEffect(() => {
      if (isActive) {
        const blinkInterval = setInterval(() => {
          setBlinkState(prev => (prev + 1) % 4);
        }, 200);
        return () => clearInterval(blinkInterval);
      }
    }, [isActive]);

    const flowTypes = [
      { color: 'purple', label: 'Sensor Data', icon: '📡' },
      { color: 'blue', label: 'Vehicle Data', icon: '🚛' },
      { color: 'green', label: 'AI Processing', icon: '🧠' },
      { color: 'orange', label: 'Live Updates', icon: '📊' }
    ];
    
    const currentFlow = flowTypes[stepIndex] || flowTypes[0];
    
    const getBlinkClass = (position: number) => {
      if (!isActive) return 'opacity-20';
      
      // Create a wave effect across the 5 positions
      const activePosition = blinkState;
      const distance = Math.abs(position - activePosition);
      
      if (distance === 0) return 'opacity-100 scale-125';
      if (distance === 1) return 'opacity-80 scale-110';
      if (distance === 2) return 'opacity-60 scale-105';
      return 'opacity-30 scale-100';
    };

    return (
      <div className="relative flex items-center justify-center py-4">
        {/* Connection Line */}
        <div className="relative w-20 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          {isActive && (
            <div 
              className={`absolute inset-0 h-full bg-gradient-to-r from-${currentFlow.color}-400 via-${currentFlow.color}-500 to-${currentFlow.color}-400 rounded-full transition-all duration-300`}
              style={{
                animation: isActive ? 'pulseGlow 1s ease-in-out infinite' : 'none'
              }}
            />
          )}
        </div>

        {/* Blinking Data Points */}
        <div className="absolute inset-0 flex items-center justify-between px-1">
          {[0, 1, 2, 3, 4].map((position) => (
            <div
              key={position}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${getBlinkClass(position)}`}
              style={{
                backgroundColor: isActive ? 
                  (position === blinkState ? `rgb(var(--${currentFlow.color}-500))` : `rgb(var(--${currentFlow.color}-300))`) 
                  : 'rgb(156, 163, 175)',
                boxShadow: isActive && position === blinkState ? 
                  `0 0 8px rgb(var(--${currentFlow.color}-400))` : 'none'
              }}
            />
          ))}
        </div>



        {/* Data Type Indicator */}
        {isActive && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className={`text-sm transition-all duration-300 ${
              isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              {currentFlow.icon}
            </div>
            <div className="mt-1 bg-white dark:bg-slate-800 px-2 py-1 rounded-full shadow-lg border border-gray-200 dark:border-gray-600">
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                {currentFlow.label}
              </span>
            </div>
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
                    className={`flow-component w-24 h-24 rounded-full bg-gradient-to-br ${step.color} shadow-xl flex items-center justify-center text-white cursor-pointer ${
                      activeComponent === index ? 'ring-4 ring-blue-200 dark:ring-blue-600 scale-110' : ''
                    } ${
                      Math.floor(animationStep / 2) === index ? 'active ring-2 ring-white/70' : ''
                    }`}
                    onClick={() => setActiveComponent(index)}
                    data-testid={`flow-component-${index}`}
                  >
                    <div className="relative">
                      {step.icon}
                      {/* Multi-level Status Indicators */}
                      {Math.floor(animationStep / 2) === index && (
                        <>
                          {/* Primary indicator - fast blink */}
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full blink-fast" />
                          {/* Secondary indicator - medium blink */}
                          <div className="absolute -top-2 -right-2 w-4 h-4 border-2 border-green-300 rounded-full blink-medium" />
                          {/* Tertiary indicator - slow blink */}
                          <div className="absolute -top-3 -right-3 w-5 h-5 border border-green-200 rounded-full blink-slow" />
                        </>
                      )}
                      
                      {/* Processing indicator for active component */}
                      {activeComponent === index && Math.floor(animationStep / 2) !== index && (
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
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
              description: "Track, reduce, and offset carbon emissions with intelligent sustainability insights and automated reporting"
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
        
        @keyframes pulseGlow {
          0%, 100% { 
            opacity: 0.6; 
            transform: scaleX(1);
            filter: brightness(1);
          }
          50% { 
            opacity: 1; 
            transform: scaleX(1.05);
            filter: brightness(1.2);
          }
        }
        
        @keyframes componentPulse {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          }
          50% { 
            transform: scale(1.02);
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
          }
        }
        
        .flow-component {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .flow-component:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .flow-component.active {
          animation: componentPulse 2s ease-in-out infinite;
        }
        
        .blink-fast {
          animation: fastBlink 0.5s ease-in-out infinite;
        }
        
        .blink-medium {
          animation: mediumBlink 1s ease-in-out infinite;
        }
        
        .blink-slow {
          animation: slowBlink 1.5s ease-in-out infinite;
        }
        
        @keyframes fastBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes mediumBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes slowBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        /* Custom CSS variables for colors */
        :root {
          --purple-300: 196, 181, 253;
          --purple-400: 167, 139, 250;
          --purple-500: 139, 92, 246;
          --blue-300: 147, 197, 253;
          --blue-400: 96, 165, 250;
          --blue-500: 59, 130, 246;
          --green-300: 134, 239, 172;
          --green-400: 74, 222, 128;
          --green-500: 34, 197, 94;
          --orange-300: 253, 186, 116;
          --orange-400: 251, 146, 60;
          --orange-500: 249, 115, 22;
        }
      `}</style>
    </section>
  );
}