import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Layers, Shield, Zap, Thermometer } from "lucide-react"

export default function MaterialsPage() {
  const materialCategories = [
    {
      name: "RF Shielding Materials",
      description: "Advanced electromagnetic shielding materials for military electronics",
      products: [
        {
          name: "EMI Gaskets",
          specs: "Frequency: DC-40 GHz, Shielding: >100 dB",
          applications: ["Enclosure sealing", "Panel interfaces", "Cable entry"],
        },
        {
          name: "Conductive Fabrics",
          specs: "Surface resistance: <0.1 Ω/sq, Flexibility: High",
          applications: ["Equipment covers", "Personnel protection", "Tent shielding"],
        },
        {
          name: "Absorber Materials",
          specs: "Frequency: 1-18 GHz, Absorption: >20 dB",
          applications: ["Anechoic chambers", "Radar cross-section reduction", "EMC testing"],
        },
      ],
    },
    {
      name: "Thermal Management",
      description: "High-performance thermal interface materials for military electronics",
      products: [
        {
          name: "Thermal Pads",
          specs: "Conductivity: 5-15 W/mK, Temperature: -55°C to +200°C",
          applications: ["CPU cooling", "Power electronics", "LED thermal management"],
        },
        {
          name: "Phase Change Materials",
          specs: "Melting point: 45-65°C, Conductivity: 3-8 W/mK",
          applications: ["Transient cooling", "Battery thermal management", "High-power devices"],
        },
        {
          name: "Thermal Compounds",
          specs: "Conductivity: 1-12 W/mK, Viscosity: 150-400 cP",
          applications: ["Heat sink mounting", "Component assembly", "Field repairs"],
        },
      ],
    },
    {
      name: "Protective Coatings",
      description: "Specialized coatings for harsh military environments",
      products: [
        {
          name: "Conformal Coatings",
          specs: "Dielectric strength: >2000V, Temperature: -65°C to +200°C",
          applications: ["PCB protection", "Component sealing", "Moisture barrier"],
        },
        {
          name: "Anti-Corrosion Coatings",
          specs: "Salt spray: >1000 hours, Adhesion: Class 0",
          applications: ["Metal protection", "Fastener coating", "Structural components"],
        },
        {
          name: "Radar Absorbing Materials",
          specs: "Frequency: 2-18 GHz, Thickness: 2-10 mm",
          applications: ["Stealth applications", "Antenna isolation", "RCS reduction"],
        },
      ],
    },
    {
      name: "Structural Composites",
      description: "Lightweight, high-strength composite materials for military applications",
      products: [
        {
          name: "Carbon Fiber Composites",
          specs: "Tensile strength: 3500 MPa, Density: 1.6 g/cm³",
          applications: ["Antenna structures", "Equipment housings", "Lightweight panels"],
        },
        {
          name: "Aramid Composites",
          specs: "Impact resistance: High, Temperature: -40°C to +160°C",
          applications: ["Ballistic protection", "Equipment cases", "Structural reinforcement"],
        },
        {
          name: "Glass Fiber Composites",
          specs: "Dielectric constant: 4.5, Loss tangent: 0.02",
          applications: ["Radomes", "Insulation panels", "Non-conductive structures"],
        },
      ],
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Military Grade",
      description: "All materials meet or exceed military specifications and standards",
    },
    {
      icon: Thermometer,
      title: "Extreme Conditions",
      description: "Designed to perform in harsh military environments",
    },
    {
      icon: Layers,
      title: "Custom Solutions",
      description: "Tailored material solutions for specific military requirements",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Superior electrical, thermal, and mechanical properties",
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
            <span className="text-orange-600 font-medium">Materials</span>
          </nav>
        </div>
      </div>

      <main className="py-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Military-Grade Materials</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Advanced materials engineered for the most demanding military and defense applications
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Material Excellence</h2>
              <p className="text-xl text-gray-600">Engineered for military performance</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={feature.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <feature.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Material Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Material Categories</h2>
              <p className="text-xl text-gray-600">Comprehensive range of military-grade materials</p>
            </div>

            <div className="space-y-12">
              {materialCategories.map((category, index) => (
                <Card key={category.name} className="overflow-hidden">
                  <CardHeader className="bg-slate-50 border-b">
                    <CardTitle className="text-2xl font-bold text-gray-900">{category.name}</CardTitle>
                    <CardDescription className="text-lg text-gray-600">{category.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-6">
                      {category.products.map((product, idx) => (
                        <Card key={product.name} className="border border-gray-200 hover:shadow-md transition-shadow">
                          <CardHeader>
                            <CardTitle className="text-lg font-semibold text-gray-900">{product.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <h5 className="font-medium text-gray-900 mb-2">Specifications:</h5>
                              <p className="text-sm text-gray-600">{product.specs}</p>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900 mb-2">Applications:</h5>
                              <div className="space-y-1">
                                {product.applications.map((app) => (
                                  <div key={app} className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                                    {app}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <Button size="sm" variant="outline" className="w-full">
                              Technical Data
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Materials */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Custom Material Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Our materials engineering team works closely with military contractors to develop custom materials
                  that meet specific performance requirements. From initial concept to full-scale production, we provide
                  comprehensive material solutions.
                </p>
                <div className="grid md:grid-cols-4 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">500+</div>
                    <div className="text-sm text-gray-600">Custom Materials</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">15+</div>
                    <div className="text-sm text-gray-600">Years R&D</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">ISO 9001</div>
                    <div className="text-sm text-gray-600">Certified</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="bg-orange-600 hover:bg-orange-700 mr-4">Request Custom Material</Button>
                  <Button variant="outline">Material Testing Services</Button>
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
