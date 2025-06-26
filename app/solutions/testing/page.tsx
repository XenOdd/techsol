import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TestTube, Zap, Thermometer, Shield, CheckCircle } from "lucide-react"

export default function TestingPage() {
  const testingRigs = [
    {
      name: "Environmental Test Chamber",
      category: "Environmental Testing",
      description: "Advanced environmental testing for military equipment validation under extreme conditions",
      capabilities: [
        "Temperature: -70°C to +180°C",
        "Humidity: 10% to 95% RH",
        "Thermal shock testing",
        "Altitude simulation up to 100,000 ft",
      ],
      applications: [
        "Component qualification",
        "Environmental validation",
        "Reliability testing",
        "MIL-STD compliance",
      ],
      specifications: {
        "Chamber Volume": "2000 liters",
        "Temperature Rate": "15°C/min",
        "Humidity Control": "±2% RH",
        "Data Logging": "Real-time monitoring",
      },
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "RF Performance Test System",
      category: "RF Testing",
      description: "Comprehensive RF testing platform for military communication systems",
      capabilities: [
        "Frequency range: 9 kHz to 50 GHz",
        "Power measurement: -150 dBm to +30 dBm",
        "Network analysis",
        "Spectrum analysis",
      ],
      applications: ["Radio testing", "Antenna characterization", "EMC compliance", "Signal integrity"],
      specifications: {
        "Frequency Range": "9 kHz - 50 GHz",
        "Dynamic Range": "180 dB",
        "Measurement Speed": "< 1 ms",
        Accuracy: "±0.1 dB",
      },
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Vibration Test System",
      category: "Mechanical Testing",
      description: "High-force vibration testing for military equipment durability validation",
      capabilities: [
        "Force rating: 50,000 lbf",
        "Frequency: 5 Hz to 3000 Hz",
        "Random vibration testing",
        "Shock testing capability",
      ],
      applications: ["MIL-STD-810 testing", "Transportation simulation", "Durability testing", "Fatigue analysis"],
      specifications: {
        "Max Force": "50,000 lbf",
        "Frequency Range": "5-3000 Hz",
        Displacement: "±2 inches",
        Acceleration: "100g peak",
      },
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "EMC Test Facility",
      category: "EMC/EMI Testing",
      description: "Full-service electromagnetic compatibility testing for military systems",
      capabilities: ["Anechoic chamber testing", "Conducted emissions", "Radiated immunity", "MIL-STD-461 compliance"],
      applications: ["EMC certification", "Interference testing", "Compliance validation", "Design verification"],
      specifications: {
        "Chamber Size": "10m x 6m x 6m",
        "Frequency Range": "10 kHz - 40 GHz",
        "Field Uniformity": "±6 dB",
        "Background Noise": "< -20 dB",
      },
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const testingCapabilities = [
    {
      icon: TestTube,
      title: "Comprehensive Testing",
      description: "Full-spectrum testing capabilities for all military equipment types",
    },
    {
      icon: Shield,
      title: "MIL-STD Compliance",
      description: "Testing to all relevant military standards and specifications",
    },
    {
      icon: Zap,
      title: "Advanced Equipment",
      description: "State-of-the-art testing equipment and measurement systems",
    },
    {
      icon: Thermometer,
      title: "Extreme Conditions",
      description: "Testing under the most demanding environmental conditions",
    },
  ]

  const standards = [
    "MIL-STD-810 - Environmental Engineering",
    "MIL-STD-461 - EMC Requirements",
    "MIL-STD-464 - EME Requirements",
    "DO-160 - Airborne Equipment",
    "IEC 61000 - EMC Standards",
    "RTCA DO-178 - Software Standards",
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
            <span className="text-orange-600 font-medium">Testing Rigs</span>
          </nav>
        </div>
      </div>

      <main className="py-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Military Testing Rigs & Validation</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Comprehensive testing solutions ensuring military equipment meets the highest performance and
                reliability standards
              </p>
            </div>
          </div>
        </section>

        {/* Testing Capabilities */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Testing Capabilities</h2>
              <p className="text-xl text-gray-600">Advanced testing for military excellence</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testingCapabilities.map((capability, index) => (
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

        {/* Testing Rigs */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Testing Equipment & Rigs</h2>
              <p className="text-xl text-gray-600">State-of-the-art testing facilities and equipment</p>
            </div>

            <div className="space-y-12">
              {testingRigs.map((rig, index) => (
                <Card key={rig.name} className="overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`p-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <CardHeader className="p-0 mb-6">
                        <Badge variant="outline" className="w-fit mb-2 bg-orange-100 text-orange-700">
                          {rig.category}
                        </Badge>
                        <CardTitle className="text-2xl font-bold text-gray-900">{rig.name}</CardTitle>
                        <CardDescription className="text-lg text-gray-600">{rig.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Capabilities:</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {rig.capabilities.map((capability) => (
                              <div key={capability} className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm text-gray-600">{capability}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Specifications:</h4>
                          <div className="space-y-2">
                            {Object.entries(rig.specifications).map(([key, value]) => (
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
                            {rig.applications.map((app) => (
                              <Badge key={app} variant="secondary">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4">
                          <Button className="bg-orange-600 hover:bg-orange-700 mr-4">Schedule Testing</Button>
                          <Button variant="outline">Testing Procedures</Button>
                        </div>
                      </CardContent>
                    </div>

                    <div
                      className={`bg-gray-100 flex items-center justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                    >
                      <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Testing Equipment</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Standards & Compliance */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Testing Standards & Compliance</h2>
              <p className="text-xl text-gray-600">We test to all major military and industry standards</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standards.map((standard, index) => (
                <Card key={standard} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Shield className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">{standard}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Process */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Our Testing Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Our comprehensive testing process ensures that all military equipment meets or exceeds required
                  specifications. From initial design validation to final certification, we provide complete testing
                  services with detailed documentation and analysis.
                </p>
                <div className="grid md:grid-cols-4 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">1000+</div>
                    <div className="text-sm text-gray-600">Tests Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">99.5%</div>
                    <div className="text-sm text-gray-600">Pass Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">24/7</div>
                    <div className="text-sm text-gray-600">Lab Access</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">NIST</div>
                    <div className="text-sm text-gray-600">Traceable</div>
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
