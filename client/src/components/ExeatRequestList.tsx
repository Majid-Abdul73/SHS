"use client"

import type React from "react"
import { useState, useEffect } from "react"
import api from "../services/api"
import ExeatRequestItem from "./ExeatRequestItem"

interface ExeatRequest {
  _id: string
  student: string
  reason: string
  startDate: string
  endDate: string
  status: "pending" | "approved" | "rejected"
  isEmergency: boolean
}

interface ExeatRequestListProps {
  status?: "pending" | "approved" | "rejected"
  limit?: number
}

const ExeatRequestList: React.FC<ExeatRequestListProps> = ({ status, limit }) => {
  const [exeatRequests, setExeatRequests] = useState<ExeatRequest[]>([])

  useEffect(() => {
    const fetchExeatRequests = async () => {
      try {
        const response = await api.get("/exeat", { params: { status, limit } })
        setExeatRequests(response.data)
      } catch (error) {
        console.error("Error fetching exeat requests:", error)
      }
    }

    fetchExeatRequests()
  }, [status, limit])

  return (
    <div className="space-y-4">
      {exeatRequests.map((request) => (
        <ExeatRequestItem key={request._id} request={request} />
      ))}
    </div>
  )
}

export default ExeatRequestList

