export default function StatsSection() {
  const stats = [
    {
      value: "500+",
      label: "Active Fleets",
      description: "Managed across India"
    },
    {
      value: "30-40%",
      label: "Cost Reduction",
      description: "Average savings achieved"
    },
    {
      value: "10M+",
      label: "Kilometers Tracked",
      description: "Real-time monitoring"
    },
    {
      value: "99.9%",
      label: "Uptime",
      description: "Platform reliability"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight" data-testid="text-stats-title">
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto" data-testid="text-stats-description">
            Join hundreds of companies already transforming their operations with ROQIT
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              data-testid={`stat-card-${index}`}
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2" data-testid={`stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-slate-200 mb-2" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
              <div className="text-sm text-slate-400" data-testid={`stat-description-${index}`}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>
        
        {/* Company logos section */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-8 text-sm uppercase tracking-wider">Trusted by industry leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              "Olectra Greentech",
              "Tata Motors",
              "Mahindra",
              "Ashok Leyland",
              "Hero MotoCorp",
              "TVS Motors"
            ].map((company, index) => (
              <div 
                key={index}
                className="text-white font-medium text-sm hover:opacity-100 transition-opacity duration-300"
                data-testid={`company-${index}`}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}