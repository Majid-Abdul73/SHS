import type React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { 
  Users, 
  FileText, 
  Bell, 
  Activity,
  Settings,
  PieChart,
  UserPlus,
  CheckCircle
} from "lucide-react"

const SeniorHousemasterDashboard: React.FC = () => {
  const { user } = useAuth()

  const stats = [
    { label: "Total Students", value: "450", color: "text-blue-600" },
    { label: "Active Exeats", value: "25", color: "text-green-600" },
    { label: "Pending Requests", value: "12", color: "text-orange-600" },
    { label: "Houses", value: "4", color: "text-purple-600" },
  ]

  const quickActions = [
    { 
      title: "Student Registration",
      icon: UserPlus,
      href: "/student-registration",
      color: "bg-blue-600 hover:bg-blue-700",
      description: "Register new students"
    },
    { 
      title: "Analytics",
      icon: PieChart,
      href: "/analytics",
      color: "bg-green-600 hover:bg-green-700",
      description: "View insights"
    },
    { 
      title: "House Management",
      icon: Settings,
      href: "/house-management",
      color: "bg-purple-600 hover:bg-purple-700",
      description: "Manage houses"
    },
    { 
      title: "Reports",
      icon: Activity,
      href: "/reports",
      color: "bg-indigo-600 hover:bg-indigo-700",
      description: "Generate reports"
    },
  ]

  const houseStats = [
    { name: "Unity House", students: 112, activeExeats: 6 },
    { name: "Peace House", students: 108, activeExeats: 8 },
    { name: "Excellence House", students: 115, activeExeats: 5 },
    { name: "Wisdom House", students: 115, activeExeats: 6 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome, {user?.name}
        </h1>
        <p className="mt-2 text-gray-600">
          Senior Housemaster Dashboard
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
                <p className={`${stat.color} text-2xl font-bold mt-1`}>
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.title}
                to={action.href}
                className={`${action.color} text-white rounded-lg p-4 transition-transform hover:scale-105`}
              >
                <action.icon className="h-8 w-8 mb-2" />
                <h3 className="font-semibold">{action.title}</h3>
                <p className="text-sm opacity-90">{action.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* House Overview */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            House Overview
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    House Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Students
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Active Exeats
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {houseStats.map((house) => (
                  <tr key={house.name}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {house.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {house.students}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {house.activeExeats}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeniorHousemasterDashboard

