import { Check } from "lucide-react";

export default function PlatformMatrix() {
  const features = [
    {
      category: "Device Agnostic Compatible",
      core: true,
      pro: true,
      enterprise: true
    },
    {
      category: "Fleet Safety & Driver Performance",
      core: true,
      pro: true,
      enterprise: true
    },
    {
      category: "AI/ML Predictive Maintenance",
      core: false,
      pro: true,
      enterprise: true
    },
    {
      category: "Smart Route Optimization",
      core: false,
      pro: true,
      enterprise: true
    },
    {
      category: "GHG Accounting & Carbon Credits",
      core: false,
      pro: false,
      enterprise: true
    },
    {
      category: "Insurance as a Service",
      core: false,
      pro: false,
      enterprise: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4" data-testid="text-platform-title">
            ROQIT Integrated Platform
          </h2>
          <p className="text-xl text-gray-600" data-testid="text-platform-description">
            Comprehensive platform capabilities across all business functions
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 overflow-x-auto" data-testid="platform-matrix-table">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-dark">Feature Category</th>
                <th className="text-center py-4 px-4 font-semibold text-dark">Core</th>
                <th className="text-center py-4 px-4 font-semibold text-dark">Pro</th>
                <th className="text-center py-4 px-4 font-semibold text-dark">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50" data-testid={`feature-row-${index}`}>
                  <td className="py-4 px-4 font-medium" data-testid={`feature-name-${index}`}>
                    {feature.category}
                  </td>
                  <td className="py-4 px-4 text-center" data-testid={`feature-core-${index}`}>
                    {feature.core ? <Check className="text-primary mx-auto" size={20} /> : "-"}
                  </td>
                  <td className="py-4 px-4 text-center" data-testid={`feature-pro-${index}`}>
                    {feature.pro ? <Check className="text-secondary mx-auto" size={20} /> : "-"}
                  </td>
                  <td className="py-4 px-4 text-center" data-testid={`feature-enterprise-${index}`}>
                    {feature.enterprise ? <Check className="text-accent mx-auto" size={20} /> : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
