import type React from "react"
import { useAuth } from "../contexts/AuthContext"
import ExeatRequestList from "../components/ExeatRequestList"

const Dashboard: React.FC = () => {
  const { user } = useAuth()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome, {user?.name}</h1>
      {user?.role === "parent" && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Exeat Requests</h2>
          <ExeatRequestList />
        </div>
      )}
      {(user?.role === "housemaster" || user?.role === "seniorHousemaster") && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Pending Exeat Requests</h2>
          <ExeatRequestList status="pending" />
        </div>
      )}
    </div>
  )
}

export default Dashboard

