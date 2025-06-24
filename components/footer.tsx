import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-400">Techsol</h3>
            <p className="text-gray-300">
              Leading supplier of military-grade frequency and radio modules for defense applications worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@techsol-military.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Defense Technology Park, USA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/corporate/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-400">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/fabrication" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Fabrication
                </Link>
              </li>
              <li>
                <Link href="/solutions/testing" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Testing Rigs
                </Link>
              </li>
              <li>
                <Link href="/solutions/it-networking" className="text-gray-300 hover:text-orange-400 transition-colors">
                  IT & Networking
                </Link>
              </li>
              <li>
                <Link href="/solutions/embedded" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Embedded Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-400">Get In Touch</h4>
            <p className="text-gray-300">
              Ready to discuss your military communication needs? Contact our expert team today.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md transition-colors font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">2012 © Copyright Techsol Military Solutions</div>
            <div className="flex space-x-6">
              <Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">
                Contact us
              </Link>
              <Link href="/support" className="text-gray-400 hover:text-orange-400 transition-colors">
                Support
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-orange-400 transition-colors">
                Disclaimer
              </Link>
              <Link href="/more" className="text-gray-400 hover:text-orange-400 transition-colors">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
