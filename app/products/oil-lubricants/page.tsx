import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Droplets, Shield, Thermometer, Wrench } from "lucide-react"

export default function OilLubricantsPage() {
  const products = [
    {
      name: "MIL-SPEC Hydraulic Fluid",
      category: "Hydraulic Systems",
      description: "High-performance hydraulic fluid for military aircraft and ground vehicles",
      specifications: ["MIL-PRF-83282", "Operating temp: -65°F to +275°F", "Fire resistant", "Low toxicity"],
      applications: ["Aircraft hydraulics", "Ground vehicle systems", "Naval equipment"],
    },
    {
      name: "Tactical Gear Oil",
      category: "Transmission",
      description: "Advanced gear oil for military transmissions and differentials",
      specifications: ["MIL-PRF-2105E", "Extreme pressure protection", "Multi-grade viscosity", "Corrosion inhibitor"],
      applications: ["Military vehicles", "Tank transmissions", "Heavy equipment"],
    },
    {
      name: "Engine Oil - Synthetic",
      category: "Engine Lubrication",
      description: "Synthetic engine oil for military diesel and gasoline engines",
      specifications: ["MIL-PRF-2104H", "Extended drain intervals", "Cold weather performance", "Thermal stability"],
      applications: ["Military trucks", "Generators", "Marine engines"],
    },
    {
      name: "Grease - Multi-Purpose",
      category: "General Lubrication",
      description: "Military-grade grease for bearings, joints, and general lubrication",
      specifications: ["MIL-PRF-81322", "Water resistant", "High load capacity", "Temperature stable"],
      applications: ["Weapon systems", "Vehicle maintenance", "Equipment lubrication"],
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Military Specifications",
      description: "All products meet or exceed military specifications and standards",
    },
    {
      icon: Thermometer,
      title: "Extreme Conditions",
      description: "Formulated to perform in harsh military environments",
    },
    {
      icon: Droplets,
      title: "Advanced Formulation",
      description: "Cutting-edge additives for superior performance and protection",
    },
    {
      icon: Wrench,
      title: "Equipment Protection",
      description: "Extended equipment life and reduced maintenance requirements",
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
            <span className="text-orange-600 font-medium">Oil & Lubricants</span>
          </nav>
        </div>
      </div>

      <main className="py-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Military Oil & Lubricants</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                High-performance lubricants engineered for military equipment and extreme operating conditions
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Lubricants</h2>
              <p className="text-xl text-gray-600">Engineered for military excellence</p>
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

        {/* Products */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Catalog</h2>
              <p className="text-xl text-gray-600">Comprehensive range of military-grade lubricants</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <Card key={product.name} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="bg-orange-100 text-orange-700">
                        {product.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{product.name}</CardTitle>
                    <CardDescription className="text-gray-600">{product.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specifications:</h4>
                      <ul className="space-y-1">
                        {product.specifications.map((spec, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app) => (
                          <Badge key={app} variant="secondary" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex space-x-3">
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        Request Sample
                      </Button>
                      <Button size="sm" variant="outline">
                        Technical Data
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  All Techsol lubricants undergo rigorous testing to ensure compliance with military specifications. Our
                  quality control process includes performance testing under extreme conditions, chemical analysis, and
                  long-term stability studies.
                </p>
                <div className="grid md:grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">100%</div>
                    <div className="text-sm text-gray-600">Batch Testing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">ISO 9001</div>
                    <div className="text-sm text-gray-600">Certified</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">24/7</div>
                    <div className="text-sm text-gray-600">Lab Support</div>
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
