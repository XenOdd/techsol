import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, FileText, Users, Globe, Lock, Award } from "lucide-react"

export default function PoliciesPage() {
  const policies = [
    {
      icon: Shield,
      title: "Security Policy",
      description: "Comprehensive security protocols for handling classified and sensitive military information",
      lastUpdated: "2024-01-15",
      category: "Security",
    },
    {
      icon: Award,
      title: "Quality Assurance Policy",
      description: "ISO 9001:2015 compliant quality management system ensuring military-grade standards",
      lastUpdated: "2024-01-10",
      category: "Quality",
    },
    {
      icon: Users,
      title: "Code of Conduct",
      description: "Ethical guidelines and professional standards for all employees and contractors",
      lastUpdated: "2024-01-05",
      category: "Ethics",
    },
    {
      icon: Lock,
      title: "Data Protection Policy",
      description: "GDPR and military data protection compliance for customer and operational data",
      lastUpdated: "2023-12-20",
      category: "Privacy",
    },
    {
      icon: Globe,
      title: "Export Control Policy",
      description: "ITAR and EAR compliance for international military technology transfers",
      lastUpdated: "2023-12-15",
      category: "Compliance",
    },
    {
      icon: FileText,
      title: "Environmental Policy",
      description: "Sustainable practices and environmental responsibility in military manufacturing",
      lastUpdated: "2023-12-10",
      category: "Environment",
    },
  ]

  const certifications = [
    "ISO 9001:2015 - Quality Management",
    "ISO 14001:2015 - Environmental Management",
    "ISO 45001:2018 - Occupational Health & Safety",
    "ITAR Registered - International Traffic in Arms",
    "AS9100D - Aerospace Quality Management",
    "NIST Cybersecurity Framework Compliant",
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
            <span className="text-gray-500">Corporate</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-orange-600 font-medium">Policies</span>
          </nav>
        </div>
      </div>

      <main className="py-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Corporate Policies</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Our commitment to excellence, security, and compliance in military technology development
              </p>
            </div>
          </div>
        </section>

        {/* Policies Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {policies.map((policy, index) => (
                <Card key={policy.title} className="hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-orange-100 rounded-lg">
                        <policy.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <Badge variant="outline">{policy.category}</Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{policy.title}</CardTitle>
                    <CardDescription className="text-gray-600">{policy.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Last Updated:</span>
                      <span>{new Date(policy.lastUpdated).toLocaleDateString()}</span>
                    </div>
                    <button className="mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md transition-colors">
                      View Policy
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
              <p className="text-xl text-gray-600">We maintain the highest industry standards and certifications</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={cert} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Award className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{cert}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Statement */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Compliance Statement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Techsol is committed to maintaining the highest standards of compliance with all applicable laws,
                  regulations, and industry standards. Our policies are regularly reviewed and updated to ensure
                  continued compliance with evolving requirements in the defense and military sectors.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We work closely with regulatory bodies and maintain active certifications to ensure our products and
                  services meet or exceed all military specifications and international standards.
                </p>
                <div className="pt-4">
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md transition-colors">
                    Download Compliance Certificate
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
