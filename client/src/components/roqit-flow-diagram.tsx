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
  const [viewMode, setViewMode] = useState<'timeline' | 'circular' | 'cards'>('timeline');
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
      borderColor: "border-purple-200 dark:border-purple-700",
      step: "01"
    },
    {
      id: "vehicle",
      title: "Connected Vehicle",
      subtitle: "Real-time Data Capture",
      description: "Vehicles transmit live operational data through secure connections to the cloud platform",
      icon: <Truck className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-700",
      step: "02"
    },
    {
      id: "cloud",
      title: "ROQIT Cloud Platform",
      subtitle: "AI Processing Engine",
      description: "Advanced AI algorithms process and analyze data to generate actionable fleet intelligence",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-700",
      step: "03"
    },
    {
      id: "apps",
      title: "Web & Mobile Apps",
      subtitle: "Fleet Manager Dashboard",
      description: "Intuitive interfaces provide real-time monitoring and control for fleet managers and drivers",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-700",
      step: "04"
    },
    {
      id: "insights",
      title: "Insights + Actions",
      subtitle: "Smart Recommendations",
      description: "Data-driven insights enable proactive decision-making and automated fleet optimization",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-700",
      step: "05"
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

  // Timeline View Component
  const TimelineView = () => (
    <div className="relative max-w-4xl mx-auto">
      {/* Central timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 via-green-500 via-orange-500 to-red-500 rounded-full" />
      
      <div className="space-y-16">
        {flowSteps.map((step, index) => (
          <div 
            key={step.id} 
            className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
          >
            {/* Step number circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold shadow-lg ${
                activeStep === index ? 'ring-4 ring-blue-200 scale-110 animate-pulse' : ''
              }`}>
                {step.step}
              </div>
            </div>
            
            {/* Content card */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
              <div 
                className={`p-6 rounded-xl ${step.bgColor} border-2 ${step.borderColor} shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  activeStep === index ? 'ring-2 ring-blue-300 scale-105' : ''
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${step.color} text-white`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{step.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Circular Flow Component
  const CircularView = () => {
    const radius = 180;
    const centerX = 200;
    const centerY = 200;
    
    return (
      <div className="flex justify-center">
        <div className="relative w-96 h-96">
          {/* Central hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl animate-pulse">
            ROQIT
          </div>
          
          {/* Circular flow steps */}
          {flowSteps.map((step, index) => {
            const angle = (index * 72 - 90) * (Math.PI / 180); // 72 degrees apart, starting from top
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            return (
              <div key={step.id}>
                {/* Connection line */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={x}
                    y2={y}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="text-gray-300 dark:text-gray-600"
                  />
                  {activeStep === index && (
                    <circle
                      cx={centerX + (x - centerX) * 0.5}
                      cy={centerY + (y - centerY) * 0.5}
                      r="4"
                      fill="currentColor"
                      className="text-blue-500 animate-ping"
                    />
                  )}
                </svg>
                
                {/* Step component */}
                <div
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ left: x, top: y }}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-xl transition-all duration-300 group-hover:scale-110 ${
                    activeStep === index ? 'ring-4 ring-blue-200 scale-110' : ''
                  }`}>
                    {step.icon}
                  </div>
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center min-w-32">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{step.title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{step.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Card Grid View Component
  const CardView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {flowSteps.map((step, index) => (
        <div 
          key={step.id}
          className={`relative p-6 rounded-xl ${step.bgColor} border-2 ${step.borderColor} shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl group ${
            activeStep === index ? 'ring-2 ring-blue-300 scale-105 z-10' : ''
          }`}
          onClick={() => setActiveStep(index)}
          style={{
            animationDelay: `${index * 100}ms`
          }}
        >
          {/* Step number badge */}
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
            {step.step}
          </div>
          
          {/* Icon */}
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {step.icon}
          </div>
          
          {/* Content */}
          <div className="text-center">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{step.subtitle}</p>
            <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{step.description}</p>
          </div>
          
          {/* Active indicator */}
          {activeStep === index && (
            <div className="absolute top-2 left-2 w-3 h-3 bg-green-400 rounded-full animate-ping" />
          )}
        </div>
      ))}
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

        {/* View Mode Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-full p-1 shadow-lg border border-gray-200 dark:border-gray-700">
            {[
              { mode: 'timeline' as const, label: 'Timeline', icon: '📅' },
              { mode: 'circular' as const, label: 'Circular', icon: '🔄' },
              { mode: 'cards' as const, label: 'Cards', icon: '📋' }
            ].map((option) => (
              <button
                key={option.mode}
                onClick={() => setViewMode(option.mode)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  viewMode === option.mode
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <span className="mr-2">{option.icon}</span>
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic View Renderer */}
        <div className="min-h-96">
          {viewMode === 'timeline' && <TimelineView />}
          {viewMode === 'circular' && <CircularView />}
          {viewMode === 'cards' && <CardView />}
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
            Click any component to explore different visualizations
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