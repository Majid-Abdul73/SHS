import type React from "react"

interface GhanaianCulturalElementProps {
  title: string
  description: string
  imageUrl: string
}

const GhanaianCulturalElement: React.FC<GhanaianCulturalElementProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default GhanaianCulturalElement

