import type React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <header className="bg-indigo-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">SHS Exeat Management System</h1>
          <p className="mt-2">Empowering Ghanaian schools with efficient exeat management</p>
        </div>
        <img src="/images/shs-girl.jpg" alt="Ghanaian School" className="w-full h-48 object-cover mt-6" />
      </header>
      <main className="container mx-auto px-4 py-8 flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

