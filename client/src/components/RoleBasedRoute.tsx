import type React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

interface RoleBasedRouteProps {
  allowedRoles: string[]
}

const RoleBasedRoute: React.FC<RoleBasedRouteProps> = ({ allowedRoles }) => {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />
  }

  return <Outlet />
}

export default RoleBasedRoute

