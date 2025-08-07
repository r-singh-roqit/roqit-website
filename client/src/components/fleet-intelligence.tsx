import { useState, useEffect } from "react";
import { TrendingUp, Calendar, MapPin, AlertTriangle, Truck } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Activity {
  id: number;
  type: string;
  vehicle: string;
  action: string;
  location: string;
  time: Date;
  timeString: string;
  status: string;
  efficiency: string;
}

interface VehicleMetrics {
  total: number;
  allocated: number;
  unallocated: number;
  maintenance: number;
  allocatedPercentage: number;
}

export default function FleetIntelligence() {
  const [selectedHub, setSelectedHub] = useState("City Hub");
  const [currentDate, setCurrentDate] = useState("");

  // Set current date when component mounts
  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit', 
      year: 'numeric'
    });
    setCurrentDate(formattedDate);
  }, []);

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

  const [recentActivity, setRecentActivity] = useState<Activity[]>([]);

  // Generate dynamic recent activity with real timestamps
  useEffect(() => {
    const generateRecentActivity = () => {
      const now = new Date();
      const activities = [
        {
          id: 1,
          type: "success",
          vehicle: "MH-01-AB-1234",
          action: "completed delivery",
          location: "Mumbai → Pune",
          time: new Date(now.getTime() - 2 * 60 * 60 * 1000), // 2 hours ago
          status: "Efficient Route",
          efficiency: "42 km/kWh"
        },
        {
          id: 2,
          type: "warning", 
          vehicle: "KA-05-CD-5678",
          action: "Hard braking detected",
          location: "Vehicle KA-05-CD-5678",
          time: new Date(now.getTime() - 1 * 60 * 60 * 1000), // 1 hour ago
          status: "Action Required",
          efficiency: "Driver coaching"
        },
        {
          id: 3,
          type: "success",
          vehicle: "DL-03-EF-9012",
          action: "route optimization",
          location: "Delhi → Gurgaon",
          time: new Date(now.getTime() - 30 * 60 * 1000), // 30 minutes ago
          status: "Optimized",
          efficiency: "38 km/kWh"
        }
      ];

      // Format time as relative string
      const formattedActivities = activities.map(activity => ({
        ...activity,
        timeString: formatTimeAgo(activity.time)
      }));

      setRecentActivity(formattedActivities);
    };

    generateRecentActivity();
    
    // Update activity times every minute
    const interval = setInterval(generateRecentActivity, 60000);
    return () => clearInterval(interval);
  }, []);

  // Helper function to format time ago
  const formatTimeAgo = (date: Date): string => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }
  };

  // Different data sets based on selected hub
  const hubData = {
    "City Hub": {
      totalTrips: { value: 40689, change: 12, trend: "up" },
      distance: { value: 14908, change: 5, trend: "up", unit: "Km" },
      drivingEfficiency: { value: 4.98, change: 7, trend: "up", unit: "Km/kWh" },
      co2Saved: { value: 3.6, change: 12, trend: "up", unit: "Kgs" },
      vehicles: { total: 600, allocated: 480, unallocated: 120, maintenance: 0, allocatedPercentage: 80 },
      drivers: { active: 400, allocated: 380 }
    },
    "Regional Hub": {
      totalTrips: { value: 28945, change: 8, trend: "up" },
      distance: { value: 22340, change: 15, trend: "up", unit: "Km" },
      drivingEfficiency: { value: 5.22, change: 3, trend: "up", unit: "Km/kWh" },
      co2Saved: { value: 5.8, change: 18, trend: "up", unit: "Kgs" },
      vehicles: { total: 450, allocated: 320, unallocated: 100, maintenance: 30, allocatedPercentage: 71 },
      drivers: { active: 280, allocated: 250 }
    },
    "Main Hub": {
      totalTrips: { value: 52178, change: 22, trend: "up" },
      distance: { value: 31200, change: 9, trend: "up", unit: "Km" },
      drivingEfficiency: { value: 4.75, change: 4, trend: "up", unit: "Km/kWh" },
      co2Saved: { value: 8.2, change: 25, trend: "up", unit: "Kgs" },
      vehicles: { total: 850, allocated: 720, unallocated: 100, maintenance: 30, allocatedPercentage: 85 },
      drivers: { active: 620, allocated: 580 }
    }
  };

  // Driver performance chart data
  const driverPerformanceData = [
    { time: '06:00', score: 85 },
    { time: '08:00', score: 92 },
    { time: '10:00', score: 88 },
    { time: '12:00', score: 95 },
    { time: '14:00', score: 91 },
    { time: '16:00', score: 89 },
    { time: '18:00', score: 94 },
    { time: '20:00', score: 87 }
  ];

  // Update metrics when hub changes
  useEffect(() => {
    const data = hubData[selectedHub as keyof typeof hubData];
    if (data) {
      setMetrics(data);
      setVehicleMetrics(data.vehicles);
      setDriverMetrics(data.drivers);
    }
  }, [selectedHub]);

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

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className={`py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 lg:mb-24">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight" data-testid="text-fleet-intelligence-title">
            Real-time Fleet Intelligence
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto" data-testid="text-fleet-intelligence-description">
            Comprehensive dashboards provide actionable insights into your fleet performance and efficiency
          </p>
        </div>

        {/* Dashboard Container */}
        <div className={`bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 p-8 lg:p-12 max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '300ms' }}
        data-testid="fleet-operations-dashboard">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Comprehensive Dashboards</h3>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <select 
                value={selectedHub} 
                onChange={(e) => setSelectedHub(e.target.value)}
                className="border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                data-testid="select-hub"
              >
                <option value="City Hub">City Hub</option>
                <option value="Regional Hub">Regional Hub</option>
                <option value="Main Hub">Main Hub</option>
              </select>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
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
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h5 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">Driver Performance Chart</h5>
                    <div className="h-32">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={driverPerformanceData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis 
                            dataKey="time" 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#64748b' }}
                          />
                          <YAxis 
                            domain={[80, 100]}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#64748b' }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="score" 
                            stroke="#0079FF" 
                            strokeWidth={2}
                            dot={{ fill: '#0079FF', strokeWidth: 2, r: 3 }}
                            activeDot={{ r: 5, fill: '#0079FF' }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
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
                        {activity.location} • {activity.timeString}
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