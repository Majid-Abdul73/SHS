"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"

interface User {
  id: string
  name: string
  email: string
  role: "seniorHousemaster" | "housemaster" | "parent"
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      api.setAuthToken(token)
      fetchUser()
    }
  }, [])

  const fetchUser = async () => {
    try {
      const response = await api.get("/user")
      setUser(response.data)
    } catch (error) {
      console.error("Error fetching user:", error)
      logout()
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/login", { email, password })
      const { token, user } = response.data
      localStorage.setItem("token", token)
      api.setAuthToken(token)
      setUser(user)
      navigate("/")
    } catch (error) {
      console.error("Login error:", error)
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    api.setAuthToken(null)
    setUser(null)
    navigate("/login")
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

