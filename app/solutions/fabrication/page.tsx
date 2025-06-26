import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Wrench, Cog, Shield, Award, CheckCircle } from "lucide-react"

export default function FabricationPage() {
  const services = [
    {
      name: "Precision Machining",
      description: "High-precision CNC machining for military component manufacturing",
      capabilities: [
        "5-axis CNC machining",
        'Tolerance: ±0.0005"',
        "Materials: Aluminum, Steel, Titanium",
        "Complex geometries",
      ],
      applications: ["RF housings", "Antenna components", "Precision brackets", "Custom enclosures"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Sheet Metal Fabrication",
      description: "Custom sheet metal fabrication for military equipment enclosures",
      capabilities: ["Laser cutting", "CNC punching", "Precision bending", "Welding & assembly"],
      applications: ["Equipment chassis", "Control panels", "Protective covers", "Mounting brackets"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Electronic Assembly",
      description: "Complete electronic assembly services for military communication systems",
      capabilities: ["SMT assembly", "Through-hole assembly", "Cable harness assembly", "Final testing"],
      applications: ["Radio modules", "Control units", "Interface boards", "Power supplies"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Custom Tooling",
      description: "Design and manufacture of custom tooling for military production",
      capabilities: ["Fixture design", "Jig manufacturing", "Test fixtures", "Assembly tools"],
      applications: ["Production tooling", "Quality fixtures", "Test equipment", "Assembly aids"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const capabilities = [
    {
      icon: Wrench,
      title: "Advanced Manufacturing",
      description: "State-of-the-art equipment and processes for precision fabrication",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control ensuring military-grade standards",
    },
    {
      icon: Cog,
      title: "Custom Solutions",
      description: "Tailored fabrication services for unique military requirements",
    },
    {
      icon: Award,
      title: "Certified Processes",
      description: "ISO 9001 and AS9100 certified manufacturing processes",
    },
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
            <span className="text-gray-500">Solutions</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-orange-600 font-medium">Fabrication</span>
          </nav>
        </div>
      </div>

      <main className="py-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Military Fabrication Services</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Precision manufacturing and fabrication services for military and defense applications
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fabrication Capabilities</h2>
              <p className="text-xl text-gray-600">Advanced manufacturing for military excellence</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <Card key={capability.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <capability.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{capability.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fabrication Services</h2>
              <p className="text-xl text-gray-600">Comprehensive manufacturing solutions</p>
            </div>

            <div className="space-y-12">
              {services.map((service, index) => (
                <Card key={service.name} className="overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`p-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-2xl font-bold text-gray-900">{service.name}</CardTitle>
                        <CardDescription className="text-lg text-gray-600">{service.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Capabilities:</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {service.capabilities.map((capability) => (
                              <div key={capability} className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm text-gray-600">{capability}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.applications.map((app) => (
                              <Badge key={app} variant="secondary">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4">
                          <Button className="bg-orange-600 hover:bg-orange-700 mr-4">Request Quote</Button>
                          <Button variant="outline">View Capabilities</Button>
                        </div>
                      </CardContent>
                    </div>

                    <div
                      className={`bg-gray-100 flex items-center justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                    >
                      <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Service Image</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quality & Certifications */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Quality & Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Our fabrication facility maintains the highest quality standards with comprehensive quality control
                  processes. All work is performed to military specifications with full traceability and documentation.
                </p>
                <div className="grid md:grid-cols-4 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">ISO 9001</div>
                    <div className="text-sm text-gray-600">Quality Management</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">AS9100</div>
                    <div className="text-sm text-gray-600">Aerospace Standard</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">ITAR</div>
                    <div className="text-sm text-gray-600">Registered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">99.8%</div>
                    <div className="text-sm text-gray-600">Quality Rate</div>
                  </div>
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
