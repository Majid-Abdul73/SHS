import type React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const Navbar: React.FC = () => {
  const { user, logout } = useAuth()

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              SHS Exeat App
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {user ? (
                <>
                  <Link to="/" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium">
                    Dashboard
                  </Link>
                  <Link
                    to="/notifications"
                    className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Notifications
                  </Link>
                  {user.role === "parent" && (
                    <Link
                      to="/exeat-request"
                      className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Submit Exeat Request
                    </Link>
                  )}
                  {(user.role === "housemaster" || user.role === "seniorHousemaster") && (
                    <>
                      <Link
                        to="/student-registration"
                        className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Register Student
                      </Link>
                      <Link
                        to="/students"
                        className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Student List
                      </Link>
                    </>
                  )}
                  {user.role === "seniorHousemaster" && (
                    <Link
                      to="/analytics"
                      className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Analytics
                    </Link>
                  )}
                  <button
                    onClick={logout}
                    className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

