import type React from "react"
import { useAuth } from "../contexts/AuthContext"
import api from "../services/api"

interface ExeatRequest {
  _id: string
  student: string
  reason: string
  startDate: string
  endDate: string
  status: "pending" | "approved" | "rejected"
  isEmergency: boolean
}

interface ExeatRequestItemProps {
  request: ExeatRequest
}

const ExeatRequestItem: React.FC<ExeatRequestItemProps> = ({ request }) => {
  const { user } = useAuth()

  const handleApprove = async () => {
    try {
      await api.put(`/exeat/${request._id}/approve`)
      // Refresh the list or update the local state
    } catch (error) {
      console.error("Error approving exeat request:", error)
    }
  }

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">{request.student}</h3>
      <p className="text-gray-600 mb-2">{request.reason}</p>
      <p className="text-sm text-gray-500 mb-2">
        {new Date(request.startDate).toLocaleDateString()} - {new Date(request.endDate).toLocaleDateString()}
      </p>
      <div className="flex justify-between items-center">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            request.status === "approved"
              ? "bg-green-100 text-green-800"
              : request.status === "rejected"
                ? "bg-red-100 text-red-800"
                : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {request.status}
        </span>
        {request.isEmergency && (
          <span className="px-2 py-1 rounded-full bg-red-100 text-red-800 text-xs font-semibold">Emergency</span>
        )}
        {user && (user.role === "housemaster" || user.role === "seniorHousemaster") && request.status === "pending" && (
          <button
            onClick={handleApprove}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Approve
          </button>
        )}
      </div>
    </div>
  )
}

export default ExeatRequestItem

