import { 
  Cpu, 
  Truck, 
  Cloud, 
  Smartphone, 
  BarChart3
} from "lucide-react";

export default function RoqitFlowDiagram() {
  const flowSteps = [
    {
      id: "device",
      title: "Smart Device",
      subtitle: "OBD • GPS • Sensors",
      description: "IoT devices collect real-time vehicle data",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "vehicle",
      title: "Connected Vehicle",
      subtitle: "Real-time Data Capture",
      description: "Vehicles transmit live operational data",
      icon: <Truck className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "cloud",
      title: "ROQIT Cloud Platform",
      subtitle: "AI Processing Engine",
      description: "Advanced AI algorithms process data",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      id: "apps",
      title: "Web & Mobile Apps",
      subtitle: "Fleet Manager Dashboard",
      description: "Intuitive interfaces for monitoring",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      id: "insights",
      title: "Insights + Actions",
      subtitle: "Smart Recommendations",
      description: "Data-driven insights and automation",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-red-500 to-red-600"
    }
  ];

  const StaticConnector = () => (
    <div className="flex-1 flex items-center justify-center px-8">
      <div className="relative w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
        {/* Flow direction arrow */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2">
          <div className="w-0 h-0 border-l-4 border-l-blue-400 border-y-2 border-y-transparent" />
        </div>
      </div>
    </div>
  );

  const FlowComponent = ({ 
    step
  }: { 
    step: typeof flowSteps[0];
  }) => (
    <div className="flex flex-col items-center space-y-4">
      {/* Component Circle */}
      <div
        className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${step.color} shadow-xl flex items-center justify-center text-white`}
        data-testid={`flow-component-${step.id}`}
      >
        {step.icon}
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
        <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
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
                <FlowComponent step={step} />
                
                {/* Static connector (except for last item) */}
                {index < flowSteps.length - 1 && <StaticConnector />}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Flow */}
        <div className="lg:hidden">
          <div className="space-y-8 max-w-md mx-auto">
            {flowSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <FlowComponent step={step} />
                
                {/* Vertical connector */}
                {index < flowSteps.length - 1 && (
                  <div className="py-6">
                    <div className="relative w-1 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto">
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
      </div>
    </section>
  );
}