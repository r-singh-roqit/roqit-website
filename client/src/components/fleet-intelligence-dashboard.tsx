import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown, Calendar, MapPin, AlertTriangle, CheckCircle } from "lucide-react";

export default function FleetIntelligenceDashboard() {
  const [selectedHub, setSelectedHub] = useState("City Hub");
  const [currentDate, setCurrentDate] = useState("08/05/2025");

  // Simulated real-time data that updates
  const [metrics, setMetrics] = useState({
    totalTrips: { value: 40689, change: 12, trend: "up" },
    distance: { value: 14908, change: 5, trend: "up", unit: "Km" },
    drivingEfficiency: { value: 4.98, change: 7, trend: "up", unit: "Km/kWh" },
    co2Saved: { value: 3.6, change: 12, trend: "up", unit: "Kgs" }
  });

  const [vehicleMetrics, setVehicleMetrics] = useState({
    total: 600,
    allocated: 300,
    unallocated: 200,
    maintenance: 100,
    allocatedPercentage: 80
  });

  const [driverMetrics, setDriverMetrics] = useState({
    active: 400,
    allocated: 300
  });

  const [recentActivity, setRecentActivity] = useState([
    {
      id: 1,
      type: "success",
      vehicle: "MH-01-AB-1234",
      action: "completed delivery",
      location: "Mumbai → Pune",
      time: "2 hours ago",
      status: "Efficient Route",
      efficiency: "42 km/kWh"
    },
    {
      id: 2,
      type: "warning",
      vehicle: "KA-05-CD-5678",
      action: "Hard braking detected",
      location: "Vehicle KA-05-CD-5678",
      time: "1 hour ago",
      status: "Action Required",
      efficiency: "Driver coaching"
    }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly update metrics slightly
      setMetrics(prev => ({
        ...prev,
        totalTrips: {
          ...prev.totalTrips,
          value: prev.totalTrips.value + Math.floor(Math.random() * 5)
        }
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const MetricCard = ({ title, value, change, trend, unit = "", color = "green" }: {
    title: string;
    value: number;
    change: number;
    trend: string;
    unit?: string;
    color?: string;
  }) => (
    <div className={`bg-gradient-to-br ${color === 'green' ? 'from-green-50 to-green-100' : 
                                       color === 'blue' ? 'from-blue-50 to-blue-100' :
                                       color === 'yellow' ? 'from-yellow-50 to-yellow-100' :
                                       'from-emerald-50 to-emerald-100'} rounded-xl p-6 border border-slate-200`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-slate-600">{title}</span>
        <div className={`flex items-center gap-1 text-xs ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {change}%
        </div>
      </div>
      <div className={`text-3xl font-bold ${color === 'green' ? 'text-green-900' : 
                                           color === 'blue' ? 'text-blue-900' :
                                           color === 'yellow' ? 'text-yellow-900' :
                                           'text-emerald-900'}`}>
        {typeof value === 'number' ? value.toLocaleString() : value}
        {unit && <span className="text-lg ml-1">{unit}</span>}
      </div>
      <div className="text-xs text-slate-500 mt-1">from last week</div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 mb-6">
            📊 Real-time Intelligence
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight" data-testid="text-dashboard-title">
            Real-time Fleet Intelligence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="text-dashboard-description">
            Monitor and optimize your fleet operations with comprehensive real-time analytics and insights
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8" data-testid="fleet-dashboard">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Fleet Operations Dashboard</h3>
              <p className="text-slate-600">Real-time monitoring and analytics</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <select 
                  value={selectedHub} 
                  onChange={(e) => setSelectedHub(e.target.value)}
                  className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  data-testid="select-hub"
                >
                  <option value="City Hub">City Hub</option>
                  <option value="Regional Hub">Regional Hub</option>
                  <option value="Main Hub">Main Hub</option>
                </select>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Calendar size={16} />
                <span>Date: {currentDate}</span>
              </div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Total Trips"
              value={metrics.totalTrips.value}
              change={metrics.totalTrips.change}
              trend={metrics.totalTrips.trend}
              color="green"
            />
            <MetricCard
              title="Distance (Km)"
              value={metrics.distance.value}
              change={metrics.distance.change}
              trend={metrics.distance.trend}
              color="blue"
            />
            <MetricCard
              title="Driving Efficiency"
              value={metrics.drivingEfficiency.value}
              change={metrics.drivingEfficiency.change}
              trend={metrics.drivingEfficiency.trend}
              unit={metrics.drivingEfficiency.unit}
              color="yellow"
            />
            <MetricCard
              title="CO2 Saved"
              value={metrics.co2Saved.value}
              change={metrics.co2Saved.change}
              trend={metrics.co2Saved.trend}
              unit={metrics.co2Saved.unit}
              color="emerald"
            />
          </div>

          {/* Operations Metrics Row */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Vehicle Operations */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 mb-4">Vehicle Operation Metrics</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Total Vehicles:</span>
                  <span className="font-semibold text-slate-900">{vehicleMetrics.total}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Allocated Vehicles:</span>
                  <span className="font-semibold text-green-600">{vehicleMetrics.allocated}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Unallocated Vehicles:</span>
                  <span className="font-semibold text-orange-600">{vehicleMetrics.unallocated}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Maintenance Vehicles:</span>
                  <span className="font-semibold text-red-600">{vehicleMetrics.maintenance}</span>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Allocated %</span>
                    <span>{vehicleMetrics.allocatedPercentage}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500"
                      style={{ width: `${vehicleMetrics.allocatedPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Driver Operations */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 mb-4">Driver Operation Metrics</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Active Drivers:</span>
                  <span className="font-semibold text-slate-900">{driverMetrics.active}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Allocated Drivers:</span>
                  <span className="font-semibold text-blue-600">{driverMetrics.allocated}</span>
                </div>
                
                {/* Driver Performance Chart Placeholder */}
                <div className="mt-6">
                  <div className="flex items-center justify-center h-32 bg-slate-100 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl mb-2">📈</div>
                      <span className="text-sm text-slate-600">Driver Performance Chart</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Fleet Activity */}
          <div className="bg-slate-50 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 mb-6">Recent Fleet Activity</h4>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.type === 'success' ? 'bg-green-100' : 'bg-yellow-100'
                    }`}>
                      {activity.type === 'success' ? 
                        <CheckCircle className="text-green-600" size={20} /> : 
                        <AlertTriangle className="text-yellow-600" size={20} />
                      }
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">
                        Vehicle {activity.vehicle} {activity.action}
                      </div>
                      <div className="text-sm text-slate-600 flex items-center gap-1">
                        <MapPin size={12} />
                        {activity.location} • {activity.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${
                      activity.type === 'success' ? 'text-green-600' : 'text-yellow-600'
                    }`}>
                      {activity.status}
                    </div>
                    <div className="text-xs text-slate-500">{activity.efficiency}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}