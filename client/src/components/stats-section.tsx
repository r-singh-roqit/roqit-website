export default function StatsSection() {
  const stats = [
    {
      value: "1,000+",
      label: "Active Vehicles",
      description: "Monitored in real-time",
      color: "from-blue-400 to-cyan-400"
    },
    {
      value: "30-40%",
      label: "Operational Efficiency", 
      description: "Average operational improvements",
      color: "from-emerald-400 to-teal-400"
    },
    {
      value: "25M+",
      label: "Kilometers Tracked",
      description: "Data-driven insights",
      color: "from-purple-400 to-pink-400"
    },
    {
      value: "99.9%",
      label: "System Uptime",
      description: "Enterprise reliability",
      color: "from-orange-400 to-red-400"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/5 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-white/10 text-white ring-1 ring-inset ring-white/20 mb-8 backdrop-blur-sm">
            🚀 Real Impact
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight" data-testid="text-stats-title">
            Driving 
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"> measurable results</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed" data-testid="text-stats-description">
            Numbers that speak to our commitment to transforming fleet operations worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:bg-white/20 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group relative overflow-hidden"
              data-testid={`stat-card-${index}`}
            >
              {/* Animated glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative z-10">
                <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4 transition-transform duration-500 group-hover:scale-110`} data-testid={`stat-value-${index}`}>
                  {stat.value}
                </div>
                <div className="text-lg font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300" data-testid={`stat-label-${index}`}>
                  {stat.label}
                </div>
                <div className="text-sm text-slate-300 leading-relaxed" data-testid={`stat-description-${index}`}>
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}