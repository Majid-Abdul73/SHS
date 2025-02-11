import type React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { 
  Calendar, 
  Clock, 
  Users, 
  Bell, 
  FileText, 
  Activity 
} from "lucide-react"

const HousemasterDashboard: React.FC = () => {
  const { user } = useAuth()

  const stats = [
    { label: "Pending Requests", value: "12", color: "text-orange-600" },
    { label: "Students", value: "156", color: "text-blue-600" },
    { label: "Approved Today", value: "8", color: "text-green-600" },
    { label: "Notifications", value: "3", color: "text-purple-600" },
  ]

  const quickActions = [
    { 
      title: "Student Registration",
      icon: Users,
      href: "/student-registration",
      color: "bg-blue-600 hover:bg-blue-700",
      description: "Register new students"
    },
    { 
      title: "Exeat Requests",
      icon: FileText,
      href: "/exeat/request",
      color: "bg-green-600 hover:bg-green-700",
      description: "View and manage requests"
    },
    { 
      title: "Notifications",
      icon: Bell,
      href: "/notifications",
      color: "bg-purple-600 hover:bg-purple-700",
      description: "Check updates"
    },
    { 
      title: "Analytics",
      icon: Activity,
      href: "/analytics",
      color: "bg-indigo-600 hover:bg-indigo-700",
      description: "View insights"
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.name}
        </h1>
        <p className="mt-2 text-gray-600">
          Here's what's happening in your house today
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-500 text-sm font-medium">
                {stat.label}
              </h3>
              <span className={`${stat.color} text-2xl font-bold`}>
                {stat.value}
              </span>
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

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <Clock className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    New exeat request from John Doe
                  </p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HousemasterDashboard

