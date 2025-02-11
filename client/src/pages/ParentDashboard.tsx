import type React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { 
  FileText, 
  Bell, 
  Calendar,
  Clock,
  User,
  CheckCircle
} from "lucide-react"

const ParentDashboard: React.FC = () => {
  const { user } = useAuth()

  const stats = [
    { label: "Active Exeats", value: "2", color: "text-blue-600" },
    { label: "Total Requests", value: "8", color: "text-green-600" },
    { label: "Pending", value: "1", color: "text-orange-600" },
    { label: "Notifications", value: "3", color: "text-purple-600" },
  ]

  const quickActions = [
    { 
      title: "New Exeat Request",
      icon: FileText,
      href: "/exeat/request",
      color: "bg-blue-600 hover:bg-blue-700",
      description: "Submit a new request"
    },
    { 
      title: "Notifications",
      icon: Bell,
      href: "/notifications",
      color: "bg-purple-600 hover:bg-purple-700",
      description: "View updates"
    },
  ]

  const recentRequests = [
    {
      id: 1,
      date: "2024-02-15",
      status: "Approved",
      reason: "Medical Appointment",
      duration: "1 day"
    },
    {
      id: 2,
      date: "2024-02-10",
      status: "Completed",
      reason: "Family Event",
      duration: "2 days"
    },
    {
      id: 3,
      date: "2024-02-05",
      status: "Pending",
      reason: "Personal",
      duration: "1 day"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.name}
        </h1>
        <p className="mt-2 text-gray-600">
          Monitor your ward's exeat requests and activities
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

      {/* Recent Requests */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Exeat Requests
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reason
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentRequests.map((request) => (
                  <tr key={request.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {request.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {request.reason}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {request.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${request.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                          request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-gray-100 text-gray-800'}`}>
                        {request.status}
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

export default ParentDashboard

