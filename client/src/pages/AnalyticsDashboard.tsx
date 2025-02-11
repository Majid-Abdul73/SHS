"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useApi } from "../hooks/useApi"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar, Pie } from "react-chartjs-2"
import { Calendar, TrendingUp, Users, Clock } from "lucide-react"

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

interface AnalyticsData {
  exeatRequestsPerMonth: { [key: string]: number }
  exeatRequestsByStatus: { [key: string]: number }
  topReasons: { [key: string]: number }
  totalRequests: number
  averageProcessingTime: number
  activeStudents: number
}

const AnalyticsDashboard: React.FC = () => {
  const { get, loading } = useApi<AnalyticsData>()
  const [data, setData] = useState<AnalyticsData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get("/analytics")
        setData(response)
      } catch (error) {
        console.error("Error fetching analytics:", error)
      }
    }
    fetchData()
  }, [get])

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Loading analytics...</div>
        </div>
      </div>
    )
  }

  const stats = [
    {
      title: "Total Requests",
      value: data.totalRequests,
      icon: Calendar,
      color: "text-blue-600",
    },
    {
      title: "Avg. Processing Time",
      value: `${data.averageProcessingTime}h`,
      icon: Clock,
      color: "text-green-600",
    },
    {
      title: "Active Students",
      value: data.activeStudents,
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Monthly Growth",
      value: "+12.5%",
      icon: TrendingUp,
      color: "text-orange-600",
    },
  ]

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  }

  const monthlyData = {
    labels: Object.keys(data.exeatRequestsPerMonth),
    datasets: [
      {
        label: "Exeat Requests",
        data: Object.values(data.exeatRequestsPerMonth),
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        borderColor: "rgb(59, 130, 246)",
        borderWidth: 1,
      },
    ],
  }

  const statusData = {
    labels: Object.keys(data.exeatRequestsByStatus),
    datasets: [
      {
        data: Object.values(data.exeatRequestsByStatus),
        backgroundColor: [
          "rgba(34, 197, 94, 0.5)",
          "rgba(239, 68, 68, 0.5)",
          "rgba(234, 179, 8, 0.5)",
        ],
        borderColor: [
          "rgb(34, 197, 94)",
          "rgb(239, 68, 68)",
          "rgb(234, 179, 8)",
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Overview of exeat management statistics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className={`${stat.color} text-2xl font-bold mt-1`}>
                  {stat.value}
                </p>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Monthly Requests
          </h2>
          <div className="h-80">
            <Bar options={chartOptions} data={monthlyData} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Request Status Distribution
          </h2>
          <div className="h-80 flex items-center justify-center">
            <Pie options={chartOptions} data={statusData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsDashboard

