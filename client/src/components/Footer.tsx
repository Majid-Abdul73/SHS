import type React from "react"
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  const navigation = {
    main: [
      { name: "About", href: "/about" },
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
    social: [
      {
        name: "Facebook",
        href: "#",
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        ),
      },
      {
        name: "Twitter",
        href: "#",
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: "LinkedIn",
        href: "#",
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.4-2.6 2.4zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5v2.5c.8-1.1 2.1-2.5 5-2.5 3.5 0 6 2.4 6 7.3v5.7h-5v-7c0-1-1-2-2-2z" />
          </svg>
        ),
      },
    ],
    contact: {
      address: ["123 Education Street", "Accra, Ghana"],
      phone: "+233 20 123 4567",
      email: "info@shsexeat.com",
    },
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">SHS Exeat System</h3>
            <p className="text-gray-400 text-sm">
              Modernizing student exit management in Ghanaian secondary schools through digital innovation.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navigation.main.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              {navigation.main.slice(4).map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <div className="mt-4 space-y-4 text-gray-400">
              <div>
                {navigation.contact.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div>
                <p>Phone: {navigation.contact.phone}</p>
                <p>Email: {navigation.contact.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="max-w-md">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-gray-400 text-sm">
              Stay updated with the latest features and announcements.
            </p>
            <form className="mt-4 sm:flex">
              <input
                type="email"
                name="email"
                id="email"
                className="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-transparent rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SHS Exeat Management System. All rights reserved.
          </p>
          <p className="mt-4 text-gray-400 text-sm md:mt-0">
            Developed with ❤️ for Ghanaian Schools
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 