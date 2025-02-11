"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useApi } from "../hooks/useApi"
import GhanaianCulturalElement from "../components/GhanaianCulturalElement"

const ExeatRequestForm: React.FC = () => {
  const [reason, setReason] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [isEmergency, setIsEmergency] = useState(false)
  const navigate = useNavigate()
  const { post, error, loading } = useApi()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await post("/exeat", {
        reason,
        startDate,
        endDate,
        isEmergency,
      })
      alert("Exeat request submitted successfully!")
      navigate("/")
    } catch (error) {
      console.error("Error submitting exeat request:", error)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Submit Exeat Request</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
              Reason
            </label>
            <textarea
              id="reason"
              name="reason"
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex items-center">
            <input
              id="isEmergency"
              name="isEmergency"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              checked={isEmergency}
              onChange={(e) => setIsEmergency(e.target.checked)}
            />
            <label htmlFor="isEmergency" className="ml-2 block text-sm text-gray-900">
              Emergency Request
            </label>
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Ghanaian School Traditions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GhanaianCulturalElement
            title="School Uniforms"
            description="Ghanaian schools often have unique and colorful uniforms that represent their institution."
            imageUrl="/images/ghana-school-uniforms.jpg"
          />
          <GhanaianCulturalElement
            title="Cultural Festivals"
            description="Many Ghanaian schools celebrate cultural festivals to promote traditional values and heritage."
            imageUrl="/images/ghana-school-festival.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default ExeatRequestForm

