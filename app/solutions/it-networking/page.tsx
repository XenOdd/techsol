import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Network, Shield, Server, Wifi, CheckCircle } from "lucide-react"

export default function ITNetworkingPage() {
  const services = [
    {
      name: "Secure Network Infrastructure",
      category: "Network Design",
      description: "Design and implementation of secure military-grade network infrastructure",
      capabilities: [
        "Classified network design",
        "Redundant architecture",
        "Zero-trust security model",
        "High-availability systems",
      ],
      applications: ["Command centers", "Military bases", "Mobile operations", "Secure facilities"],
      features: {
        "Security Level": "Top Secret clearance",
        Uptime: "99.99% availability",
        Redundancy: "N+1 configuration",
        Monitoring: "24/7 SOC support",
      },
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Tactical Communication Networks",
      category: "Field Communications",
      description: "Mobile and deployable communication networks for field operations",
      capabilities: [
        "Rapid deployment systems",
        "Satellite connectivity",
        "Mesh networking",
        "Encrypted communications",
      ],
      applications: ["Forward operating bases", "Mobile command posts", "Field operations", "Emergency response"],
      features: {
        "Deployment Time": "< 30 minutes",
        Range: "50+ km coverage",
        Encryption: "AES-256 standard",
        Power: "Solar/battery backup",
      },
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Cybersecurity Solutions",
      category: "Security Services",
      description: "Comprehensive cybersecurity solutions for military IT infrastructure",
      capabilities: [
        "Threat detection & response",
        "Vulnerability assessments",
        "Security monitoring",
        "Incident response",
      ],
      applications: ["Network security", "Endpoint protection", "Data security", "Compliance monitoring"],
      features: {
        "Response Time": "< 15 minutes",
        Coverage: "24/7 monitoring",
        Compliance: "NIST, DISA STIGs",
        Reporting: "Real-time dashboards",
      },
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Data Center Solutions",
      category: "Infrastructure",
      description: "Military-grade data center design, implementation, and management",
      capabilities: [
        "Secure facility design",
        "Environmental controls",
        "Power & cooling systems",
        "Disaster recovery",
      ],
      applications: ["Command & control centers", "Intelligence facilities", "Training centers", "Research labs"],
      features: {
        Security: "Multi-factor access",
        Reliability: "Tier III+ design",
        Efficiency: "PUE < 1.3",
        Recovery: "RTO < 4 hours",
      },
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const capabilities = [
    {
      icon: Network,
      title: "Advanced Networking",
      description: "Cutting-edge network technologies for military communications",
    },
    {
      icon: Shield,
      title: "Military Security",
      description: "Defense-grade security protocols and encryption standards",
    },
    {
      icon: Server,
      title: "Robust Infrastructure",
      description: "High-availability systems designed for mission-critical operations",
    },
    {
      icon: Wifi,
      title: "Wireless Solutions",
      description: "Secure wireless and mobile communication systems",
    },
  ]

  const technologies = [
    {
      category: "Network Technologies",
      items: [
        "Software-Defined Networking (SDN)",
        "Network Function Virtualization (NFV)",
        "MPLS/VPN",
        "IPv6 Implementation",
      ],
    },
    {
      category: "Security Technologies",
      items: ["Next-Gen Firewalls", "Intrusion Detection/Prevention", "SIEM Solutions", "Zero Trust Architecture"],
    },
    {
      category: "Wireless Technologies",
      items: ["Tactical Radio Integration", "Satellite Communications", "Mesh Networking", "5G Military Networks"],
    },
    {
      category: "Cloud & Virtualization",
      items: ["Private Cloud Solutions", "Hybrid Cloud Architecture", "Container Orchestration", "Edge Computing"],
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
            <span className="text-orange-600 font-medium">IT & Networking</span>
          </nav>
        </div>
      </div>

      <main className="py-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Military IT & Networking Solutions</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Secure, reliable, and advanced IT infrastructure solutions for military and defense operations
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">IT & Networking Capabilities</h2>
              <p className="text-xl text-gray-600">Advanced technology solutions for military excellence</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">IT & Networking Services</h2>
              <p className="text-xl text-gray-600">Comprehensive technology solutions for military operations</p>
            </div>

            <div className="space-y-12">
              {services.map((service, index) => (
                <Card key={service.name} className="overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`p-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <CardHeader className="p-0 mb-6">
                        <Badge variant="outline" className="w-fit mb-2 bg-orange-100 text-orange-700">
                          {service.category}
                        </Badge>
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
                          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                          <div className="space-y-2">
                            {Object.entries(service.features).map(([key, value]) => (
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
                            {service.applications.map((app) => (
                              <Badge key={app} variant="secondary">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4">
                          <Button className="bg-orange-600 hover:bg-orange-700 mr-4">Request Consultation</Button>
                          <Button variant="outline">Technical Overview</Button>
                        </div>
                      </CardContent>
                    </div>

                    <div
                      className={`bg-gray-100 flex items-center justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                    >
                      <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Network Diagram</span>
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
              <p className="text-xl text-gray-600">Advanced technologies powering military IT infrastructure</p>
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

        {/* Security & Compliance */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Our IT and networking solutions are designed with security as the foundation. All systems comply with
                  military security standards including DISA STIGs, NIST frameworks, and classified network
                  requirements. Our team holds appropriate security clearances and follows strict operational security
                  protocols.
                </p>
                <div className="grid md:grid-cols-4 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">DISA</div>
                    <div className="text-sm text-gray-600">STIG Compliant</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">NIST</div>
                    <div className="text-sm text-gray-600">Framework</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">FedRAMP</div>
                    <div className="text-sm text-gray-600">Authorized</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">24/7</div>
                    <div className="text-sm text-gray-600">SOC Monitoring</div>
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
