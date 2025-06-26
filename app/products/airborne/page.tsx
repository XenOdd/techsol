import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Zap, CheckCircle, Plane, Radio } from "lucide-react"

export default function PhosbornePage() {
  const systems = [
    {
      name: "AB-3000 Airborne Communication Suite",
      category: "Communication Systems",
      description: "Advanced airborne communication system for military aircraft with multi-band capabilities",
      features: ["Multi-frequency operation", "Secure encryption", "Low latency", "Compact design"],
      specifications: {
        "Frequency Range": "30 MHz - 3 GHz",
        "Power Output": "1-100W",
        "Operating Altitude": "Up to 50,000 ft",
        Weight: "8.5 kg",
      },
      applications: ["Fighter aircraft", "Transport planes", "Helicopters", "UAVs"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "AB-1500 Navigation Module",
      category: "Navigation Systems",
      description: "Precision GPS/GNSS navigation system for military aviation platforms",
      features: ["Multi-constellation GNSS", "Anti-jamming", "High accuracy", "Real-time tracking"],
      specifications: {
        Accuracy: "< 3 meters CEP",
        "Update Rate": "20 Hz",
        "Operating Temp": "-55°C to +85°C",
        MTBF: "> 40,000 hours",
      },
      applications: ["Military aircraft", "Guided munitions", "UAV navigation", "Precision targeting"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "AB-2500 Surveillance System",
      category: "Surveillance & Reconnaissance",
      description: "Advanced airborne surveillance and reconnaissance system for intelligence gathering",
      features: ["Multi-sensor integration", "Real-time processing", "Secure data links", "Modular design"],
      specifications: {
        "Sensor Types": "EO/IR, SAR, SIGINT",
        "Data Rate": "Up to 1 Gbps",
        Range: "200+ km",
        Resolution: "Sub-meter accuracy",
      },
      applications: ["ISR missions", "Border surveillance", "Maritime patrol", "Search & rescue"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const advantages = [
    {
      icon: Plane,
      title: "Advanced Avionics",
      description: "State-of-the-art avionics systems for enhanced flight operations and mission effectiveness",
    },
    {
      icon: Shield,
      title: "Mission Critical",
      description: "Reliable airborne systems designed for the most demanding military missions",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Superior performance in challenging airborne environments and conditions",
    },
    {
      icon: Radio,
      title: "Secure Communications",
      description: "Advanced encryption and secure communication capabilities for sensitive operations",
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
            <span className="text-orange-600 font-medium">Airborne System</span>
          </nav>
        </div>
      </div>

      <main className="py-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Advanced Airborne Systems</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Cutting-edge airborne communication and navigation systems for military aircraft and UAV platforms
              </p>
            </div>
          </div>
        </section>

        {/* System Advantages */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">System Advantages</h2>
              <p className="text-xl text-gray-600">Why Phosborne technology leads in military fire protection</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={advantage.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <advantage.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Systems */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Airborne System Solutions</h2>
              <p className="text-xl text-gray-600">
                Comprehensive airborne solutions for military aviation applications
              </p>
            </div>

            <div className="space-y-12">
              {systems.map((system, index) => (
                <Card key={system.name} className="overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`p-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <CardHeader className="p-0 mb-6">
                        <Badge variant="outline" className="w-fit mb-2 bg-orange-100 text-orange-700">
                          {system.category}
                        </Badge>
                        <CardTitle className="text-2xl font-bold text-gray-900">{system.name}</CardTitle>
                        <CardDescription className="text-lg text-gray-600">{system.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {system.features.map((feature) => (
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
                            {Object.entries(system.specifications).map(([key, value]) => (
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
                            {system.applications.map((app) => (
                              <Badge key={app} variant="secondary">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4">
                          <Button className="bg-orange-600 hover:bg-orange-700 mr-4">Request Quote</Button>
                          <Button variant="outline">Safety Data Sheet</Button>
                        </div>
                      </CardContent>
                    </div>

                    <div
                      className={`bg-gray-100 flex items-center justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                    >
                      <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">System Image</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Information */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Safety & Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  All Airborne systems are designed and manufactured to meet the highest aviation standards for military
                  applications. Our airborne solutions provide reliable performance in demanding flight environments
                  while ensuring mission success.
                </p>
                <div className="grid md:grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">DO-178C</div>
                    <div className="text-sm text-gray-600">Compliant</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">DO-160</div>
                    <div className="text-sm text-gray-600">Certified</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">RTCA</div>
                    <div className="text-sm text-gray-600">Approved</div>
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
