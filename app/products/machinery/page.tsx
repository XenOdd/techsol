import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cog, Wrench, Shield, Zap, CheckCircle } from "lucide-react"

export default function MachineryPage() {
  const machinery = [
    {
      name: "M-5000 Precision Milling System",
      category: "Manufacturing Equipment",
      description: "High-precision CNC milling system for military component manufacturing",
      features: ["5-axis machining", '±0.001" tolerance', "Automated tool changing", "Quality monitoring"],
      specifications: {
        "Work Envelope": "1500 x 1000 x 800 mm",
        "Spindle Speed": "20,000 RPM",
        "Tool Capacity": "40 tools",
        "Positioning Accuracy": "±0.005 mm",
      },
      applications: ["RF component housings", "Precision brackets", "Custom enclosures"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "T-3000 Testing Chamber",
      category: "Environmental Testing",
      description: "Environmental testing chamber for military equipment validation",
      features: ["Temperature cycling", "Humidity control", "Vibration testing", "Data logging"],
      specifications: {
        "Temperature Range": "-70°C to +180°C",
        "Humidity Range": "10% to 95% RH",
        "Chamber Volume": "1000 liters",
        Vibration: "5-2000 Hz",
      },
      applications: ["Component testing", "Environmental validation", "Reliability testing"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "A-2000 Assembly Station",
      category: "Assembly Equipment",
      description: "Automated assembly station for radio module production",
      features: ["Vision guidance", "Force feedback", "Quality inspection", "Traceability"],
      specifications: {
        "Cycle Time": "< 30 seconds",
        Accuracy: "±0.1 mm",
        Throughput: "120 units/hour",
        "Reject Rate": "< 0.1%",
      },
      applications: ["Radio module assembly", "Component integration", "Final testing"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const capabilities = [
    {
      icon: Cog,
      title: "Precision Manufacturing",
      description: "State-of-the-art machinery for high-precision military components",
    },
    {
      icon: Shield,
      title: "Quality Control",
      description: "Integrated quality systems ensuring military-grade standards",
    },
    {
      icon: Wrench,
      title: "Custom Solutions",
      description: "Tailored machinery solutions for specific military requirements",
    },
    {
      icon: Zap,
      title: "High Efficiency",
      description: "Optimized production processes for maximum throughput",
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
            <span className="text-gray-500">Products</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-orange-600 font-medium">Machinery</span>
          </nav>
        </div>
      </div>

      <main className="py-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Military Manufacturing Machinery</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Advanced manufacturing and testing equipment for military-grade component production
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Manufacturing Capabilities</h2>
              <p className="text-xl text-gray-600">Precision equipment for military component production</p>
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

        {/* Machinery Products */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Manufacturing Equipment</h2>
              <p className="text-xl text-gray-600">Professional-grade machinery for military production</p>
            </div>

            <div className="space-y-12">
              {machinery.map((machine, index) => (
                <Card key={machine.name} className="overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`p-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <CardHeader className="p-0 mb-6">
                        <Badge variant="outline" className="w-fit mb-2 bg-orange-100 text-orange-700">
                          {machine.category}
                        </Badge>
                        <CardTitle className="text-2xl font-bold text-gray-900">{machine.name}</CardTitle>
                        <CardDescription className="text-lg text-gray-600">{machine.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {machine.features.map((feature) => (
                              <div key={feature} className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Specifications:</h4>
                          <div className="space-y-2">
                            {Object.entries(machine.specifications).map(([key, value]) => (
                              <div key={key} className="flex justify-between text-sm">
                                <span className="text-gray-600">{key}:</span>
                                <span className="font-medium text-gray-900">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                          <div className="flex flex-wrap gap-2">
                            {machine.applications.map((app) => (
                              <Badge key={app} variant="secondary">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4">
                          <Button className="bg-orange-600 hover:bg-orange-700 mr-4">Request Quote</Button>
                          <Button variant="outline">Technical Specs</Button>
                        </div>
                      </CardContent>
                    </div>

                    <div
                      className={`bg-gray-100 flex items-center justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                    >
                      <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Equipment Image</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
