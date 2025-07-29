export default function DashboardPreview() {
  return (
    <section id="platform" className="py-20 bg-gradient-to-br from-gray-50 to-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4" data-testid="text-dashboard-title">
            Real-time Analytics Dashboard
          </h2>
          <p className="text-xl text-gray-600" data-testid="text-dashboard-description">
            Monitor your fleet operations with comprehensive data visualization and insights
          </p>
        </div>
        
        {/* Dashboard mockup with real data */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12" data-testid="dashboard-container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left sidebar - metrics */}
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-primary/5 rounded-xl p-6" data-testid="metric-trips">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Total Trips</span>
                  <span className="text-primary text-sm">↑ 12% from last week</span>
                </div>
                <div className="text-3xl font-bold text-dark">40,689</div>
              </div>
              
              <div className="bg-secondary/5 rounded-xl p-6" data-testid="metric-distance">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Distance (Km)</span>
                  <span className="text-secondary text-sm">↑ 05% from last week</span>
                </div>
                <div className="text-3xl font-bold text-dark">14,908</div>
              </div>
              
              <div className="bg-accent/5 rounded-xl p-6" data-testid="metric-co2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">CO2 Saved</span>
                  <span className="text-accent text-sm">↑ 12% from last week</span>
                </div>
                <div className="text-3xl font-bold text-dark">3.6 <span className="text-lg">Kgs</span></div>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-6" data-testid="metric-efficiency">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Driving Efficiency</span>
                  <span className="text-purple-600 text-sm">↑ 07% from last week</span>
                </div>
                <div className="text-3xl font-bold text-dark">4.98 <span className="text-lg">Km/kWh</span></div>
              </div>
            </div>
            
            {/* Right side - charts and data visualization */}
            <div className="lg:w-2/3">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Analytics dashboard with charts and metrics" 
                className="rounded-xl mb-6 w-full" 
                data-testid="img-analytics-dashboard"
              />
              
              {/* Vehicle allocation chart */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6" data-testid="chart-vehicle-metrics">
                  <h4 className="font-semibold text-dark mb-4">Vehicle Operation Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Vehicles</span>
                      <span className="font-semibold">600</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Allocated</span>
                      <span className="font-semibold text-primary">300</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Maintenance</span>
                      <span className="font-semibold text-orange-500">100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: "50%"}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6" data-testid="chart-driver-metrics">
                  <h4 className="font-semibold text-dark mb-4">Driver Operation Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Active Drivers</span>
                      <span className="font-semibold">400</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Allocated</span>
                      <span className="font-semibold text-secondary">300</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Efficiency Rate</span>
                      <span className="font-semibold text-accent">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{width: "75%"}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
