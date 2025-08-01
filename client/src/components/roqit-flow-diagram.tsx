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
  const [activeFlow, setActiveFlow] = useState(0);

  const flowSteps = [
    {
      id: "device",
      title: "Smart Device",
      subtitle: "OBD • GPS • Sensors",
      description: "IoT devices collect real-time vehicle data",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-700"
    },
    {
      id: "vehicle",
      title: "Connected Vehicle",
      subtitle: "Real-time Data Capture",
      description: "Vehicles transmit live operational data",
      icon: <Truck className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-700"
    },
    {
      id: "cloud",
      title: "ROQIT Cloud Platform",
      subtitle: "AI Processing Engine",
      description: "Advanced AI algorithms process data",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-700"
    },
    {
      id: "apps",
      title: "Web & Mobile Apps",
      subtitle: "Fleet Manager Dashboard",
      description: "Intuitive interfaces for monitoring",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-700"
    },
    {
      id: "insights",
      title: "Insights + Actions",
      subtitle: "Smart Recommendations",
      description: "Data-driven insights and automation",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-700"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFlow(prev => (prev + 1) % flowSteps.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const AnimatedConnector = ({ 
    isActive, 
    delay = 0 
  }: { 
    isActive: boolean; 
    delay?: number; 
  }) => (
    <div className="flex-1 flex items-center justify-center px-8">
      <div className="relative w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        {/* Animated dot */}
        <div
          className={`absolute top-0 w-3 h-3 -mt-1 bg-blue-500 rounded-full shadow-lg transition-all duration-1000 ${
            isActive ? 'animate-pulse' : ''
          }`}
          style={{
            left: isActive ? '100%' : '-12px',
            transition: 'left 2s ease-in-out',
            transitionDelay: `${delay}ms`,
            opacity: isActive ? 1 : 0.3
          }}
        />
        
        {/* Flow direction arrow */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2">
          <div className="w-0 h-0 border-l-4 border-l-blue-400 border-y-2 border-y-transparent" />
        </div>
      </div>
    </div>
  );

  const FlowComponent = ({ 
    step, 
    index, 
    isActive 
  }: { 
    step: typeof flowSteps[0]; 
    index: number; 
    isActive: boolean; 
  }) => (
    <div className="flex flex-col items-center space-y-4 group cursor-pointer" onClick={() => setActiveFlow(index)}>
      {/* Component Circle */}
      <div
        className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${step.color} shadow-xl flex items-center justify-center text-white transition-all duration-500 transform hover:scale-110 ${
          isActive ? 'ring-4 ring-blue-200 dark:ring-blue-400 scale-110' : ''
        }`}
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
              {step.id === 'device' && <Radio className="w-3 h-3 text-green-300 animate-bounce" />}
              {step.id === 'vehicle' && <Zap className="w-3 h-3 text-blue-300 animate-bounce" />}
              {step.id === 'cloud' && <Database className="w-3 h-3 text-green-300 animate-bounce" />}
              {step.id === 'apps' && <Smartphone className="w-3 h-3 text-orange-300 animate-bounce" />}
              {step.id === 'insights' && <BarChart3 className="w-3 h-3 text-red-300 animate-bounce" />}
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
        
        {/* Description */}
        <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed opacity-75 group-hover:opacity-100 transition-opacity duration-300">
          {step.description}
        </p>
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

        {/* Desktop Horizontal Flow */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-center max-w-6xl mx-auto">
            {flowSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <FlowComponent 
                  step={step} 
                  index={index} 
                  isActive={activeFlow === index} 
                />
                
                {/* Animated connector (except for last item) */}
                {index < flowSteps.length - 1 && (
                  <AnimatedConnector 
                    isActive={activeFlow === index} 
                    delay={index * 300}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Flow */}
        <div className="lg:hidden">
          <div className="space-y-8 max-w-md mx-auto">
            {flowSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <FlowComponent 
                  step={step} 
                  index={index} 
                  isActive={activeFlow === index} 
                />
                
                {/* Vertical connector */}
                {index < flowSteps.length - 1 && (
                  <div className="py-6">
                    <div className="relative w-1 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto">
                      <div
                        className={`absolute w-3 h-3 bg-blue-500 rounded-full -ml-1 transition-all duration-1000 ${
                          activeFlow === index ? 'animate-pulse' : ''
                        }`}
                        style={{
                          top: activeFlow === index ? '100%' : '0%',
                          transition: 'top 2s ease-in-out',
                          opacity: activeFlow === index ? 1 : 0.3
                        }}
                      />
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                        <div className="w-0 h-0 border-t-4 border-t-blue-400 border-x-2 border-x-transparent" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-3 mb-4">
            {flowSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveFlow(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeFlow === index 
                    ? 'bg-blue-500 scale-125 ring-2 ring-blue-200' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                }`}
                data-testid={`flow-control-${index}`}
                title={step.title}
              />
            ))}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Click any component or dot to focus on a specific step
          </p>
        </div>
      </div>

      <style>{`
        @keyframes flowMove {
          0% { left: -12px; opacity: 0.3; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { left: 100%; opacity: 0.3; }
        }
        
        @keyframes verticalFlow {
          0% { top: 0%; opacity: 0.3; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 100%; opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}