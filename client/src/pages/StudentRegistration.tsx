"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Users, Save, ArrowLeft } from "lucide-react"
import api from "../services/api"

interface StudentFormData {
  firstName: string
  lastName: string
  dateOfBirth: string
  gender: string
  admissionNumber: string
  class: string
  house: string
  parentName: string
  parentEmail: string
  parentPhone: string
  address: string
  emergencyContact: string
  healthInfo: string
}

const StudentRegistration: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<StudentFormData>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    admissionNumber: "",
    class: "",
    house: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    address: "",
    emergencyContact: "",
    healthInfo: "",
  })

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post("/students", formData)
      navigate("/students", { state: { message: "Student registered successfully" } })
    } catch (error) {
      console.error("Error registering student:", error)
      alert("Error registering student")
    } finally {
      setLoading(false)
    }
  }

  const classes = [
    "Form 1 Science", "Form 1 Arts", 
    "Form 2 Science", "Form 2 Arts",
    "Form 3 Science", "Form 3 Arts"
  ]

  const houses = [
    "Unity House", "Peace House", 
    "Excellence House", "Wisdom House"
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-indigo-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">
                Student Registration
              </h1>
            </div>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Register a new student in the system
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white shadow rounded-lg p-6">
          {/* Personal Information */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Academic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="admissionNumber" className="block text-sm font-medium text-gray-700">
                  Admission Number
                </label>
                <input
                  type="text"
                  id="admissionNumber"
                  name="admissionNumber"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="class" className="block text-sm font-medium text-gray-700">
                  Class
                </label>
                <select
                  id="class"
                  name="class"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={handleChange}
                >
                  <option value="">Select Class</option>
                  {classes.map((cls) => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="house" className="block text-sm font-medium text-gray-700">
                  House
                </label>
                <select
                  id="house"
                  name="house"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={handleChange}
                >
                  <option value="">Select House</option>
                  {houses.map((house) => (
                    <option key={house} value={house}>{house}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Parent/Guardian Information */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Parent/Guardian Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">
                  Parent Name
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700">
                  Parent Email
                </label>
                <input
                  type="email"
                  id="parentEmail"
                  name="parentEmail"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700">
                  Parent Phone
                </label>
                <input
                  type="tel"
                  id="parentPhone"
                  name="parentPhone"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700">
                  Emergency Contact
                </label>
                <input
                  type="tel"
                  id="emergencyContact"
                  name="emergencyContact"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Additional Information
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Home Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="healthInfo" className="block text-sm font-medium text-gray-700">
                  Health Information
                </label>
                <textarea
                  id="healthInfo"
                  name="healthInfo"
                  rows={3}
                  placeholder="Any allergies, medical conditions, or special needs"
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              <Save className="h-5 w-5 mr-2" />
              {loading ? "Registering..." : "Register Student"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StudentRegistration

