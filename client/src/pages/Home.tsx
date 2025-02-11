import type React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const Home: React.FC = () => {
  const { user } = useAuth()

  const features = [
    {
      title: "Easy Exeat Requests",
      description: "Submit and track exeat requests with just a few clicks",
      icon: "📝",
    },
    {
      title: "Real-time Updates",
      description: "Get instant notifications on request status changes",
      icon: "🔔",
    },
    {
      title: "Digital Records",
      description: "Access complete history of exeat requests and approvals",
      icon: "📊",
    },
    {
      title: "Parent Portal",
      description: "Stay informed about your ward's exeat activities",
      icon: "👪",
    },
  ]

  const testimonials = [
    {
      quote: "This system has made managing student exits much more efficient.",
      author: "John Mensah",
      role: "Senior Housemaster",
      school: "Accra Academy",
    },
    {
      quote: "As a parent, I feel more connected to my child's school activities.",
      author: "Sarah Addo",
      role: "Parent",
      school: "Wesley Girls High School",
    },
  ]

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to SHS Exeat Management System
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Streamlining student exit permissions for Ghanaian secondary schools
        </p>
        {!user && (
          <div className="space-x-4">
            <Link
              to="/login"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Login
            </Link>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50"
            >
              Contact Us
            </Link>
          </div>
        )}
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-indigo-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-indigo-200">Schools Using Our System</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-indigo-200">Exeat Requests Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-indigo-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-500">
                  {testimonial.role} • {testimonial.school}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-12 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Join the growing number of schools modernizing their exeat management
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
