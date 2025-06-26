import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plane, Radio, Shield, Zap, CheckCircle } from "lucide-react"

export default function AirSystemPage() {
  const products = [
    {
      name: "AS-2400 Tactical Air Radio",
      description: "Advanced airborne communication system for fighter jets and transport aircraft",
      features: ["Encrypted Communication", "Multi-frequency", "Weather Resistant", "Low Profile"],
      specifications: {
        "Frequency Range": "30-512 MHz",
        "Power Output": "10-50W",
        "Operating Temp": "-40°C to +85°C",
        Weight: "2.5 kg",
      },
      applications: ["Fighter Aircraft", "Transport Planes", "Helicopters", "UAVs"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "AS-5000 Navigation Module",
      description: "Precision GPS/GNSS navigation system for military aviation",
      features: ["Multi-constellation", "Anti-jamming", "Secure Signal", "High Accuracy"],
      specifications: {
        Accuracy: "< 1 meter CEP",
        "Update Rate": "10 Hz",
        Channels: "72 channels",
        MTBF: "> 50,000 hours",
      },
      applications: ["Military Aircraft", "Missiles", "Guided Munitions", "UAVs"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "AS-1200 IFF Transponder",
      description: "Identification Friend or Foe system for air traffic control and combat identification",
      features: ["Mode 5 Compliant", "Crypto Capable", "Low Latency", "Compact Design"],
      specifications: {
        Modes: "1, 2, 3/A, C, S, 5",
        Range: "200+ NM",
        "Response Time": "< 125 μs",
        Power: "1000W peak",
      },
      applications: ["Combat Aircraft", "Air Defense", "ATC Systems", "Naval Aviation"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const capabilities = [
    {
      icon: Plane,
      title: "Airborne Integration",
      description: "Seamless integration with existing aircraft systems and avionics",
    },
    {
      icon: Radio,
      title: "Multi-band Communication",
      description: "Support for VHF, UHF, and L-band frequencies",
    },
    {
      icon: Shield,
      title: "Secure Operations",
      description: "Advanced encryption and anti-jamming capabilities",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Low latency, high reliability in demanding environments",
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
            <span className="text-orange-600 font-medium">Air & System</span>
          </nav>
        </div>
      </div>

      <main className="py-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Air & System Solutions</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Advanced airborne communication and navigation systems for military aviation
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">System Capabilities</h2>
              <p className="text-xl text-gray-600">Comprehensive solutions for military aviation</p>
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

        {/* Products */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <p className="text-xl text-gray-600">Military-grade air systems and components</p>
            </div>

            <div className="space-y-12">
              {products.map((product, index) => (
                <Card key={product.name} className="overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`p-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-2xl font-bold text-gray-900">{product.name}</CardTitle>
                        <CardDescription className="text-lg text-gray-600">{product.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {product.features.map((feature) => (
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
                            {Object.entries(product.specifications).map(([key, value]) => (
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
                            {product.applications.map((app) => (
                              <Badge key={app} variant="secondary">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4">
                          <Button className="bg-orange-600 hover:bg-orange-700 mr-4">Request Quote</Button>
                          <Button variant="outline">Download Datasheet</Button>
                        </div>
                      </CardContent>
                    </div>

                    <div
                      className={`bg-gray-100 flex items-center justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                    >
                      <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Product Image</span>
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
