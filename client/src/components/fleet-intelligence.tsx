import { useState, useEffect } from "react";
import { TrendingUp, Calendar, MapPin, AlertTriangle, Truck } from "lucide-react";

export default function FleetIntelligence() {
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

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight" data-testid="text-fleet-intelligence-title">
            Real-time Fleet Intelligence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="text-fleet-intelligence-description">
            Comprehensive dashboards providing actionable insights into your fleet performance and efficiency
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 max-w-6xl mx-auto" data-testid="fleet-operations-dashboard">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Fleet Operations Dashboard</h3>
              <p className="text-slate-600">Real-time monitoring and analytics</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
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
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Calendar size={16} />
                <span>Date: {currentDate}</span>
              </div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Trips */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200" data-testid="metric-total-trips">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Total Trips</span>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <TrendingUp size={12} />
                  {metrics.totalTrips.change}%
                </div>
              </div>
              <div className="text-3xl font-bold text-green-900">
                {metrics.totalTrips.value.toLocaleString()}
              </div>
              <div className="text-xs text-slate-500 mt-1">from last week</div>
            </div>

            {/* Distance */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200" data-testid="metric-distance">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Distance (Km)</span>
                <div className="flex items-center gap-1 text-xs text-blue-600">
                  <TrendingUp size={12} />
                  {metrics.distance.change}%
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-900">
                {metrics.distance.value.toLocaleString()}
              </div>
              <div className="text-xs text-slate-500 mt-1">from last week</div>
            </div>

            {/* Driving Efficiency */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200" data-testid="metric-driving-efficiency">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Driving Efficiency</span>
                <div className="flex items-center gap-1 text-xs text-yellow-600">
                  <TrendingUp size={12} />
                  {metrics.drivingEfficiency.change}%
                </div>
              </div>
              <div className="text-3xl font-bold text-yellow-900">
                {metrics.drivingEfficiency.value}
                <span className="text-lg ml-1">{metrics.drivingEfficiency.unit}</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">from last week</div>
            </div>

            {/* CO2 Saved */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200" data-testid="metric-co2-saved">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">CO2 Saved</span>
                <div className="flex items-center gap-1 text-xs text-emerald-600">
                  <TrendingUp size={12} />
                  {metrics.co2Saved.change}%
                </div>
              </div>
              <div className="text-3xl font-bold text-emerald-900">
                {metrics.co2Saved.value}
                <span className="text-lg ml-1">{metrics.co2Saved.unit}</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">from last week</div>
            </div>
          </div>

          {/* Operations Metrics Row */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Vehicle Operations */}
            <div className="bg-slate-50 rounded-xl p-6" data-testid="vehicle-operation-metrics">
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
                      className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${vehicleMetrics.allocatedPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Driver Operations */}
            <div className="bg-slate-50 rounded-xl p-6" data-testid="driver-operation-metrics">
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
                
                {/* Driver Performance Chart */}
                <div className="mt-6">
                  <div className="flex items-center justify-center h-32 bg-slate-100 rounded-lg border border-slate-200">
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
          <div className="bg-slate-50 rounded-xl p-6" data-testid="recent-fleet-activity">
            <h4 className="font-semibold text-slate-900 mb-6">Recent Fleet Activity</h4>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.type === 'success' ? 'bg-green-100' : 'bg-yellow-100'
                    }`}>
                      {activity.type === 'success' ? 
                        <Truck className="text-green-600" size={20} /> : 
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