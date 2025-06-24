"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, TestTube, Network, MicroscopeIcon as Microchip } from "lucide-react"

const solutions = [
  {
    icon: Wrench,
    title: "Fabrication",
    description:
      "Custom fabrication services for specialized military components and enclosures with precision engineering.",
    features: ["Custom Design", "Precision Manufacturing", "Quality Assurance"],
    color: "orange",
  },
  {
    icon: TestTube,
    title: "Testing Rigs",
    description: "Comprehensive testing solutions to ensure military-grade reliability and performance standards.",
    features: ["Environmental Testing", "Performance Validation", "Compliance Certification"],
    color: "blue",
  },
  {
    icon: Network,
    title: "IT & Networking",
    description: "Secure networking solutions and IT infrastructure for military communication systems.",
    features: ["Secure Networks", "System Integration", "24/7 Support"],
    color: "orange",
  },
  {
    icon: Microchip,
    title: "Embedded Systems",
    description: "Advanced embedded system development for mission-critical military applications.",
    features: ["Real-time Systems", "Custom Firmware", "Hardware Integration"],
    color: "blue",
  },
]

export default function Solutions() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Military Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end solutions for military communication and defense systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card
              key={solution.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`mx-auto p-4 rounded-full mb-4 transition-all duration-300 group-hover:scale-110 ${
                    solution.color === "orange"
                      ? "bg-orange-100 group-hover:bg-orange-200"
                      : "bg-blue-100 group-hover:bg-blue-200"
                  }`}
                >
                  <solution.icon
                    className={`h-8 w-8 ${solution.color === "orange" ? "text-orange-600" : "text-blue-600"}`}
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-gray-600">{solution.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <div
                        className={`w-2 h-2 rounded-full mr-3 ${
                          solution.color === "orange" ? "bg-orange-500" : "bg-blue-500"
                        }`}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className={`w-full transition-all duration-300 hover:scale-105 ${
                    solution.color === "orange"
                      ? "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                      : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105"
          >
            Explore All Solutions
          </Button>
        </div>
      </div>
    </section>
  )
}
