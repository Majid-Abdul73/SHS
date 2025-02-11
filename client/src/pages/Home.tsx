import type React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import Layout from "../components/Layout"
import { 
  BookOpen, 
  Bell, 
  ClipboardList, 
  Users,
  Shield,
  Clock,
  CheckCircle,
  Smartphone
} from "lucide-react"

const Home: React.FC = () => {
  const { user } = useAuth()

  const features = [
    {
      title: "Digital Exeat Management",
      description: "Streamlined process for requesting and approving student exits",
      icon: ClipboardList,
      color: "text-blue-600",
    },
    {
      title: "Real-time Notifications",
      description: "Instant updates on request status and approvals",
      icon: Bell,
      color: "text-green-600",
    },
    {
      title: "Comprehensive Tracking",
      description: "Complete history of all exeat requests and returns",
      icon: CheckCircle,
      color: "text-purple-600",
    },
    {
      title: "Mobile Accessibility",
      description: "Access the system from any device, anywhere",
      icon: Smartphone,
      color: "text-orange-600",
    },
  ]

  const benefits = [
    {
      title: "Enhanced Security",
      description: "Better monitoring of student movements and exits",
      icon: Shield,
      imageUrl: "/images/shs-security.jpg",
    },
    {
      title: "Time Efficiency",
      description: "Reduced processing time for exeat requests",
      icon: Clock,
      imageUrl: "/images/shs-students-class.jpg",
    },
  ]

  const testimonials = [
    {
      quote: "This system has revolutionized how we manage student exits. It's efficient and secure.",
      author: "Mr. Kwame Mensah",
      role: "Senior Housemaster",
      school: "Achimota School",
      image: "/images/testimonial-1.jpg",
    },
    {
      quote: "As a parent, I feel more confident knowing my child's movements are properly tracked.",
      author: "Mrs. Sarah Addo",
      role: "Parent",
      school: "Wesley Girls High School",
      image: "/images/testimonial-2.jpg",
    },
    {
      quote: "The digital system has made our administrative work much easier.",
      author: "Mr. Daniel Owusu",
      role: "Housemaster",
      school: "Prempeh College",
      image: "/images/testimonial-3.jpg",
    },
  ]

  const schools = [
    { name: "Achimota School", logo: "/images/schools/achimota.png" },
    { name: "Wesley Girls High School", logo: "/images/schools/wey-gey-hey.png" },
    { name: "Prempeh College", logo: "/images/schools/prempeh.png" },
    { name: "Mfantsipim School", logo: "/images/schools/mfantsipim.png" },
    { name: "St. Roses Senior High", logo: "/images/schools/st-roses.png" },
    { name: "Adisadel College", logo: "/images/schools/adisadel.png" },
  ]

  return (
    <Layout>
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="relative h-[600px]">
          <div className="absolute inset-0">
            <img
              src="/images/ghana-shs-students.jpg"
              alt="Ghanaian SHS Students"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-900/50" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">
                Modern Exeat Management for Ghanaian Schools
              </h1>
              <p className="text-xl mb-8 text-indigo-100">
                Streamline your school's exeat process with our digital management system.
                Enhanced security, better tracking, and improved communication.
              </p>
              {!user && (
                <div className="space-x-4">
                  <Link
                    to="/login"
                    className="inline-block px-8 py-4 bg-white text-indigo-900 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">Key Features</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our comprehensive system provides everything you need to manage student exits effectively
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <feature.icon className={`h-10 w-10 ${feature.color} mb-4`} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section with Images */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="relative">
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <img
                      src={benefit.imageUrl}
                      alt={benefit.title}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex items-start space-x-4">
                    <benefit.icon className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role} • {testimonial.school}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Schools Using Our System */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Trusted by Leading Schools
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Join these prestigious Ghanaian institutions in modernizing student management
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {schools.map((school) => (
              <div
                key={school.name}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={school.logo}
                  alt={school.name}
                  className="h-16 w-16 object-contain mb-2"
                />
                <p className="text-sm text-center font-medium text-gray-600">
                  {school.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics with Animation */}
        <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold mb-2 animate-count">50+</div>
                <div className="text-indigo-200">Partner Schools</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold mb-2 animate-count">10,000+</div>
                <div className="text-indigo-200">Students Protected</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold mb-2 animate-count">25,000+</div>
                <div className="text-indigo-200">Exeats Processed</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold mb-2 animate-count">98%</div>
                <div className="text-indigo-200">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Simple and efficient process for managing student exits
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Submit Request",
                description: "Parents or students submit exeat requests through the platform",
                icon: "📝",
              },
              {
                step: "2",
                title: "Quick Review",
                description: "Housemasters review and approve requests efficiently",
                icon: "👀",
              },
              {
                step: "3",
                title: "Digital Tracking",
                description: "Monitor student exits and returns in real-time",
                icon: "📱",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-white p-6 rounded-xl shadow-md"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How secure is the system?",
                  a: "Our system employs industry-standard security measures, including end-to-end encryption and secure authentication protocols.",
                },
                {
                  q: "Can parents track their ward's exeat status?",
                  a: "Yes, parents receive real-time notifications and can track the status of their ward's exeat requests through the parent portal.",
                },
                {
                  q: "How long does implementation take?",
                  a: "Implementation typically takes 1-2 weeks, including staff training and system setup.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-indigo-900 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your School's Exeat Management?
            </h2>
            <p className="text-indigo-200 mb-8 text-lg">
              Join the growing number of Ghanaian schools using our system
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-indigo-900 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Request a Demo
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Home
