import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, VoicemailIcon as Fax, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["1023 Nizam Block", "Allama Iqbal Town", "Lahore, Punjab 54000", "Pakistan"],
      color: "orange",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["Mobile: +92-309-9981199", "Phone: +92-42-35466110", "Fax: 0423-5466109"],
      color: "blue",
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["Sales@techsol.com.pk", "Marketing@techsol.com.pk", "Info@techsol.com.pk"],
      color: "orange",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
      color: "blue",
    },
  ]

  const departments = [
    {
      name: "Sales Department",
      email: "Sales@techsol.com.pk",
      description: "Product inquiries, quotations, and sales support",
      icon: MessageSquare,
    },
    {
      name: "Marketing Department",
      email: "Marketing@techsol.com.pk",
      description: "Partnership opportunities and marketing inquiries",
      icon: Mail,
    },
    {
      name: "General Information",
      email: "Info@techsol.com.pk",
      description: "General inquiries and company information",
      icon: Phone,
    },
  ]

  const inquiryTypes = [
    "Product Information",
    "Technical Support",
    "Partnership Inquiry",
    "Quote Request",
    "General Question",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <span className="text-gray-500">Home</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-orange-600 font-medium">Contact Us</span>
          </nav>
        </div>
      </div>

      <main className="py-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Techsol</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Get in touch with our military technology experts for all your defense communication needs
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600">Multiple ways to reach our team</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div
                      className={`mx-auto p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 ${
                        info.color === "orange" ? "bg-orange-100" : "bg-blue-100"
                      }`}
                    >
                      <info.icon
                        className={`h-8 w-8 ${info.color === "orange" ? "text-orange-600" : "text-blue-600"}`}
                      />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Send Us a Message</CardTitle>
                    <CardDescription className="text-gray-600">
                      Fill out the form below and we'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input id="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input id="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email address" required />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <Input id="company" placeholder="Enter your company name" />
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        required
                      >
                        <option value="">Select inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Please describe your inquiry in detail..."
                        required
                      />
                    </div>

                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold">
                      Send Message
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      * Required fields. We respect your privacy and will never share your information.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Map and Location Info */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Visit Our Office</CardTitle>
                    <CardDescription className="text-gray-600">
                      Located in the heart of Lahore's technology district
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Interactive Google Map */}
                    <div className="w-full h-64 rounded-lg overflow-hidden mb-6 border border-gray-200">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.1234567890123!2d74.28964940000001!3d31.5109531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903d366e849ed%3A0xe2c3158da3f04efa!2sTechsol!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Techsol Office Location"
                      ></iframe>
                    </div>

                    <div className="mb-6">
                      <a
                        href="https://www.google.com/maps/place/Techsol/@31.510441,74.289049,14z/data=!4m6!3m5!1s0x391903d366e849ed:0xe2c3158da3f04efa!8m2!3d31.5109531!4d74.2896494!16s%2Fg%2F11rmsfzlz9?hl=en&entry=ttu&g_ep=EgoyMDI1MD623.2IKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition-colors font-medium"
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        Get Directions
                      </a>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-orange-600 mt-1" />
                        <div>
                          <p className="font-medium text-gray-900">Address</p>
                          <p className="text-gray-600">1023 Nizam Block</p>
                          <p className="text-gray-600">Allama Iqbal Town</p>
                          <p className="text-gray-600">Lahore, Punjab 54000</p>
                          <p className="text-gray-600">Pakistan</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-blue-600 mt-1" />
                        <div>
                          <p className="font-medium text-gray-900">Directions</p>
                          <p className="text-gray-600 text-sm">
                            Located in Allama Iqbal Town, easily accessible from main Lahore roads. Parking available
                            on-site.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">Quick Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="font-medium text-gray-900">Mobile</p>
                        <a href="tel:+923099981199" className="text-orange-600 hover:text-orange-700">
                          +92-309-9981199
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Office</p>
                        <a href="tel:+924235466110" className="text-blue-600 hover:text-blue-700">
                          +92-42-35466110
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Fax className="h-5 w-5 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">Fax</p>
                        <p className="text-gray-600">0423-5466109</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Department Contacts</h2>
              <p className="text-xl text-gray-600">Reach the right department for faster assistance</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <Card key={dept.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto p-3 bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <dept.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{dept.name}</CardTitle>
                    <CardDescription className="text-gray-600">{dept.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <a
                      href={`mailto:${dept.email}`}
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      {dept.email}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-l-4 border-l-orange-500 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Emergency Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  For urgent military equipment support or critical system failures, our emergency response team is
                  available 24/7. Please call our emergency hotline for immediate assistance.
                </p>
                <div className="flex items-center space-x-4">
                  <Badge variant="destructive" className="px-4 py-2">
                    EMERGENCY
                  </Badge>
                  <a href="tel:+923099981199" className="text-xl font-bold text-orange-600 hover:text-orange-700">
                    +92-309-9981199
                  </a>
                </div>
                <p className="text-sm text-gray-500">Available 24/7 for critical military system support</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
