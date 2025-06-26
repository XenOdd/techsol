import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cpu, Zap, Shield, Code, CheckCircle } from "lucide-react"

export default function EmbeddedPage() {
  const solutions = [
    {
      name: "Real-Time Control Systems",
      category: "Control Systems",
      description: "Mission-critical real-time embedded systems for military equipment control",
      capabilities: [
        "Hard real-time performance",
        "Deterministic response times",
        "Fault-tolerant design",
        "Safety-critical certification",
      ],
      applications: ["Weapon systems", "Flight control", "Navigation systems", "Radar control"],
      specifications: {
        "Response Time": "< 1 microsecond",
        Reliability: "99.999% uptime",
        Temperature: "-55°C to +125°C",
        Certification: "DO-178C Level A",
      },
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Communication Processors",
      category: "Signal Processing",
      description: "High-performance embedded processors for military communication systems",
      capabilities: [
        "Multi-core ARM/DSP architecture",
        "Hardware encryption",
        "Software-defined radio",
        "Protocol stack integration",
      ],
      applications: ["Radio systems", "Satellite communications", "Tactical networks", "Secure communications"],
      specifications: {
        "Processing Power": "10+ GFLOPS",
        Memory: "Up to 32GB DDR4",
        Interfaces: "Ethernet, USB, PCIe",
        Power: "< 25W consumption",
      },
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Sensor Interface Modules",
      category: "Data Acquisition",
      description: "Embedded systems for military sensor data acquisition and processing",
      capabilities: [
        "Multi-channel ADC/DAC",
        "High-speed data processing",
        "Sensor fusion algorithms",
        "Edge computing capabilities",
      ],
      applications: ["Surveillance systems", "Environmental monitoring", "Target tracking", "Intelligence gathering"],
      specifications: {
        "Sampling Rate": "Up to 1 GSPS",
        Resolution: "16-bit precision",
        Channels: "64 simultaneous",
        Latency: "< 10 microseconds",
      },
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Secure Boot Systems",
      category: "Security",
      description: "Hardware-based secure boot and cryptographic processing systems",
      capabilities: [
        "Hardware security modules",
        "Secure key storage",
        "Authenticated boot process",
        "Tamper detection/response",
      ],
      applications: ["Classified systems", "Key management", "Secure communications", "Authentication systems"],
      specifications: {
        Encryption: "AES-256, RSA-4096",
        "Key Storage": "Hardware-protected",
        "Boot Time": "< 5 seconds",
        "Tamper Response": "Immediate zeroization",
      },
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const capabilities = [
    {
      icon: Cpu,
      title: "Advanced Processing",
      description: "High-performance embedded processors for demanding military applications",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Hardware-based security features and secure development practices",
    },
    {
      icon: Zap,
      title: "Real-Time Performance",
      description: "Deterministic real-time systems for mission-critical operations",
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored embedded solutions for specific military requirements",
    },
  ]

  const technologies = [
    {
      category: "Processors & MCUs",
      items: ["ARM Cortex-A/R/M series", "Texas Instruments DSPs", "Xilinx Zynq SoCs", "Intel/AMD x86 embedded"],
    },
    {
      category: "Real-Time OS",
      items: ["VxWorks", "QNX Neutrino", "FreeRTOS", "Linux RT"],
    },
    {
      category: "Development Tools",
      items: ["JTAG/SWD debugging", "Logic analyzers", "Oscilloscopes", "Protocol analyzers"],
    },
    {
      category: "Standards & Protocols",
      items: ["MIL-STD-1553", "ARINC 429", "CAN/CANopen", "Ethernet/IP"],
    },
  ]

  const developmentProcess = [
    {
      phase: "Requirements Analysis",
      description: "Detailed analysis of military specifications and operational requirements",
      deliverables: ["Requirements document", "System architecture", "Risk assessment"],
    },
    {
      phase: "Design & Architecture",
      description: "Hardware and software architecture design with security considerations",
      deliverables: ["System design", "Hardware schematics", "Software architecture"],
    },
    {
      phase: "Implementation",
      description: "Embedded software development and hardware integration",
      deliverables: ["Source code", "Hardware prototypes", "Integration testing"],
    },
    {
      phase: "Verification & Validation",
      description: "Comprehensive testing and validation against military standards",
      deliverables: ["Test reports", "Compliance documentation", "Performance analysis"],
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
            <span className="text-orange-600 font-medium">Embedded System</span>
          </nav>
        </div>
      </div>

      <main className="py-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Military Embedded Systems</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Advanced embedded system development for mission-critical military applications and defense systems
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Embedded System Capabilities</h2>
              <p className="text-xl text-gray-600">Advanced embedded solutions for military excellence</p>
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

        {/* Solutions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Embedded System Solutions</h2>
              <p className="text-xl text-gray-600">Comprehensive embedded systems for military applications</p>
            </div>

            <div className="space-y-12">
              {solutions.map((solution, index) => (
                <Card key={solution.name} className="overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`p-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <CardHeader className="p-0 mb-6">
                        <Badge variant="outline" className="w-fit mb-2 bg-orange-100 text-orange-700">
                          {solution.category}
                        </Badge>
                        <CardTitle className="text-2xl font-bold text-gray-900">{solution.name}</CardTitle>
                        <CardDescription className="text-lg text-gray-600">{solution.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Capabilities:</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {solution.capabilities.map((capability) => (
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
                            {Object.entries(solution.specifications).map(([key, value]) => (
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
                            {solution.applications.map((app) => (
                              <Badge key={app} variant="secondary">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4">
                          <Button className="bg-orange-600 hover:bg-orange-700 mr-4">Request Development</Button>
                          <Button variant="outline">Technical Specs</Button>
                        </div>
                      </CardContent>
                    </div>

                    <div
                      className={`bg-gray-100 flex items-center justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                    >
                      <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">System Architecture</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
              <p className="text-xl text-gray-600">Advanced technologies for embedded system development</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <Card key={tech.category} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">{tech.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tech.items.map((item) => (
                        <li key={item} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Development Process</h2>
              <p className="text-xl text-gray-600">Structured approach to embedded system development</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {developmentProcess.map((phase, index) => (
                <Card key={phase.phase} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900">{phase.phase}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600">{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h5 className="font-medium text-gray-900 mb-2">Deliverables:</h5>
                    <ul className="space-y-1">
                      {phase.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quality & Standards */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Quality & Standards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Our embedded system development follows rigorous quality standards and military specifications. We
                  employ formal verification methods, extensive testing, and compliance with safety-critical standards
                  to ensure reliable operation in demanding military environments.
                </p>
                <div className="grid md:grid-cols-4 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">DO-178C</div>
                    <div className="text-sm text-gray-600">Level A Certified</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">ISO 26262</div>
                    <div className="text-sm text-gray-600">Functional Safety</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">MIL-STD</div>
                    <div className="text-sm text-gray-600">Compliant</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">99.999%</div>
                    <div className="text-sm text-gray-600">Reliability</div>
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
