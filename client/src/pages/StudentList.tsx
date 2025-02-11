"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useApi } from "../hooks/useApi"

interface Student {
  _id: string
  firstName: string
  lastName: string
  admissionNumber: string
  class: string
}

const StudentList: React.FC = () => {
  const { get, loading, error } = useApi<Student[]>()
  const [students, setStudents] = useState<Student[]>([])

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await get("/students")
        setStudents(data || [])
      } catch (err) {
        console.error("Error fetching students:", err)
      }
    }

    fetchStudents()
  }, [get])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Student List</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {students.map((student) => (
            <li key={student._id}>
              <Link to={`/student/${student._id}`} className="block hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      {student.firstName} {student.lastName}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {student.class}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        Admission Number: {student.admissionNumber}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default StudentList

