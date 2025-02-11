"use client"

import type React from "react"
import { useState, useEffect } from "react"
import api from "../services/api"

interface Notification {
  _id: string
  message: string
  createdAt: string
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await api.get("/notifications")
        setNotifications(response.data)
      } catch (error) {
        console.error("Error fetching notifications:", error)
      }
    }

    fetchNotifications()
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Notifications</h2>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification._id} className="bg-white shadow rounded-lg p-4">
            <p className="text-gray-800">{notification.message}</p>
            <p className="text-sm text-gray-500 mt-2">{new Date(notification.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notifications

