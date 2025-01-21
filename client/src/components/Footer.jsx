import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-dark-light text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-gold font-semibold text-lg">DB Photography</h3>
            <p className="text-sm text-gray-300">Capturing moments, creating memories.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@dbphotography.com" className="text-gray-300 hover:text-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-gold font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-gold transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/weddings" className="text-gray-300 hover:text-gold transition-colors">Weddings</Link></li>
              <li><Link href="/services/portraits" className="text-gray-300 hover:text-gold transition-colors">Portraits</Link></li>
              <li><Link href="/services/events" className="text-gray-300 hover:text-gold transition-colors">Events</Link></li>
              <li><Link href="/services/commercial" className="text-gray-300 hover:text-gold transition-colors">Commercial</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold font-semibold mb-4">Contact</h4>
            <address className="not-italic text-sm text-gray-300 space-y-2">
              <p>123 Photography Lane</p>
              <p>New York, NY 10001</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: contact@dbphotography.com</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>Website created & designed by Răzvan Andronachi</p>
          <p>&copy; {new Date().getFullYear()} DB Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

