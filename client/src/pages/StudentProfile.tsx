"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useApi } from "../hooks/useApi"
import GhanaianCulturalElement from "../components/GhanaianCulturalElement"

interface Student {
  _id: string
  firstName: string
  lastName: string
  admissionNumber: string
  class: string
  dateOfBirth: string
  gender: string
  parentName: string
  parentEmail: string
  parentPhone: string
  region: string
}

const StudentProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { get, loading, error } = useApi<Student>()
  const [student, setStudent] = useState<Student | null>(null)

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const data = await get(`/students/${id}`)
        setStudent(data)
      } catch (err) {
        console.error("Error fetching student:", err)
      }
    }

    fetchStudent()
  }, [id, get])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!student) return <div>Student not found</div>

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Student Profile</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">
          {student.firstName} {student.lastName}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p>
              <strong>Admission Number:</strong> {student.admissionNumber}
            </p>
            <p>
              <strong>Class:</strong> {student.class}
            </p>
            <p>
              <strong>Date of Birth:</strong> {new Date(student.dateOfBirth).toLocaleDateString()}
            </p>
            <p>
              <strong>Gender:</strong> {student.gender}
            </p>
            <p>
              <strong>Region:</strong> {student.region}
            </p>
          </div>
          <div>
            <p>
              <strong>Parent Name:</strong> {student.parentName}
            </p>
            <p>
              <strong>Parent Email:</strong> {student.parentEmail}
            </p>
            <p>
              <strong>Parent Phone:</strong> {student.parentPhone}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Ghanaian Cultural Elements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GhanaianCulturalElement
            title="Traditional Attire"
            description="Ghana is known for its colorful and vibrant traditional clothing, such as kente cloth."
            imageUrl="/images/ghana-traditional-attire.jpg"
          />
          <GhanaianCulturalElement
            title="Ghanaian Cuisine"
            description="Ghanaian cuisine is diverse and flavorful, featuring dishes like jollof rice and fufu."
            imageUrl="/images/ghana-cuisine.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default StudentProfile

