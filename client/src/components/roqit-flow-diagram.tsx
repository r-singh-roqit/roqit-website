import { useState, useEffect } from "react";
import { 
  Cpu, 
  Truck, 
  Cloud, 
  Smartphone, 
  BarChart3,
  Zap,
  Radio,
  Database
} from "lucide-react";

export default function RoqitFlowDiagram() {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const flowSteps = [
    {
      id: "device",
      title: "Smart Device",
      subtitle: "OBD • GPS • Sensors",
      description: "IoT devices collect real-time vehicle data including diagnostics, location, and performance metrics",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-700"
    },
    {
      id: "vehicle",
      title: "Connected Vehicle",
      subtitle: "Real-time Data Capture",
      description: "Vehicles transmit live operational data through secure connections to the cloud platform",
      icon: <Truck className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-700"
    },
    {
      id: "cloud",
      title: "ROQIT Cloud Platform",
      subtitle: "AI Processing Engine",
      description: "Advanced AI algorithms process and analyze data to generate actionable fleet intelligence",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-700"
    },
    {
      id: "apps",
      title: "Web & Mobile Apps",
      subtitle: "Fleet Manager Dashboard",
      description: "Intuitive interfaces provide real-time monitoring and control for fleet managers and drivers",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-700"
    },
    {
      id: "insights",
      title: "Insights + Actions",
      subtitle: "Smart Recommendations",
      description: "Data-driven insights enable proactive decision-making and automated fleet optimization",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-700"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 12);
      setActiveStep(prev => (prev + 1) % flowSteps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const DataFlowLine = ({ 
    isActive, 
    delay = 0 
  }: { 
    isActive: boolean; 
    delay?: number; 
  }) => {
    const [localPhase, setLocalPhase] = useState(0);

    useEffect(() => {
      if (isActive) {
        const timeout = setTimeout(() => {
          const interval = setInterval(() => {
            setLocalPhase(prev => (prev + 1) % 8);
          }, 150);
          
          return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
      }
    }, [isActive, delay]);

    return (
      <div className="flex items-center justify-center flex-1 px-4">
        <div className="relative w-full h-1">
          {/* Base line */}
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full" />
          
          {/* Animated dotted line */}
          <div className="absolute inset-0 flex items-center justify-between">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive && index === localPhase
                    ? 'bg-blue-500 scale-150 shadow-lg'
                    : isActive && Math.abs(index - localPhase) <= 1
                    ? 'bg-blue-400 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                style={{
                  opacity: isActive && Math.abs(index - localPhase) <= 2 ? 1 : 0.3,
                  animationDelay: `${index * 50}ms`
                }}
              />
            ))}
          </div>

          {/* Flow direction indicator */}
          {isActive && (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <div className="w-0 h-0 border-l-4 border-l-blue-500 border-y-2 border-y-transparent animate-pulse" />
            </div>
          )}
        </div>
      </div>
    );
  };

  const FlowComponent = ({ 
    step, 
    index, 
    isActive 
  }: { 
    step: typeof flowSteps[0]; 
    index: number; 
    isActive: boolean; 
  }) => (
    <div className="flex flex-col items-center space-y-4 group">
      {/* Component Circle */}
      <div
        className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${step.color} shadow-xl flex items-center justify-center text-white cursor-pointer transition-all duration-500 transform hover:scale-110 ${
          isActive ? 'ring-4 ring-blue-200 dark:ring-blue-600 scale-110 animate-pulse' : ''
        }`}
        onClick={() => setActiveStep(index)}
        data-testid={`flow-component-${step.id}`}
      >
        <div className="relative">
          {step.icon}
          
          {/* Active indicators */}
          {isActive && (
            <>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            </>
          )}

          {/* Data activity icons */}
          {isActive && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              {step.id === 'device' && <Radio className="w-3 h-3 text-green-400 animate-bounce" />}
              {step.id === 'vehicle' && <Zap className="w-3 h-3 text-blue-400 animate-bounce" />}
              {step.id === 'cloud' && <Database className="w-3 h-3 text-green-400 animate-bounce" />}
              {step.id === 'apps' && <Smartphone className="w-3 h-3 text-orange-400 animate-bounce" />}
              {step.id === 'insights' && <BarChart3 className="w-3 h-3 text-red-400 animate-bounce" />}
            </div>
          )}
        </div>
      </div>

      {/* Component Info */}
      <div className="text-center max-w-40">
        <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
          {step.title}
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
          {step.subtitle}
        </p>
        
        {/* Expandable description */}
        <div className={`transition-all duration-300 overflow-hidden ${
          isActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800/50" data-testid="roqit-flow-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How ROQIT Works: Smart Flow from Device to Dashboard
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ROQIT seamlessly connects hardware, vehicles, and data to power real-time fleet intelligence
          </p>
        </div>

        {/* Desktop Flow Diagram */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-center">
            {flowSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <FlowComponent 
                  step={step} 
                  index={index} 
                  isActive={activeStep === index} 
                />
                
                {/* Data flow line (except for last item) */}
                {index < flowSteps.length - 1 && (
                  <DataFlowLine 
                    isActive={activeStep === index} 
                    delay={index * 200}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Flow Diagram */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {flowSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <FlowComponent 
                  step={step} 
                  index={index} 
                  isActive={activeStep === index} 
                />
                
                {/* Vertical data flow line */}
                {index < flowSteps.length - 1 && (
                  <div className="py-4">
                    <div className="flex flex-col items-center space-y-1">
                      {[...Array(6)].map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            activeStep === index && dotIndex === (animationPhase % 6)
                              ? 'bg-blue-500 scale-150'
                              : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        />
                      ))}
                      <div className="w-0 h-0 border-t-4 border-t-blue-500 border-x-2 border-x-transparent" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="mt-12 text-center">
          <div className="flex justify-center space-x-2 mb-4">
            {flowSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                }`}
                data-testid={`flow-control-${index}`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Click any component or dot to explore the flow
          </p>
        </div>
      </div>

      <style>{`
        @keyframes dataFlow {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
        }
        
        .animate-data-flow {
          animation: dataFlow 2s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}