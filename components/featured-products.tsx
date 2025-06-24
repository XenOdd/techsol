"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Radio, Cpu, Antenna, Settings } from "lucide-react"

const products = [
  {
    id: 1,
    name: "RF-2400 Tactical Radio Module",
    description:
      "High-frequency tactical communication module designed for battlefield operations with encrypted transmission capabilities.",
    category: "Radio Modules",
    features: ["Encrypted Communication", "Long Range", "Weather Resistant"],
    icon: Radio,
    price: "Contact for Quote",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "FRQ-X1 Frequency Synthesizer",
    description:
      "Precision frequency synthesizer for military radar and communication systems with ultra-low phase noise.",
    category: "Frequency Control",
    features: ["Ultra-Low Noise", "Wide Bandwidth", "Military Grade"],
    icon: Cpu,
    price: "Contact for Quote",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "ANT-M5 Directional Antenna",
    description:
      "High-gain directional antenna system for long-range military communications and surveillance applications.",
    category: "Antenna Systems",
    features: ["High Gain", "Directional", "All-Weather"],
    icon: Antenna,
    price: "Contact for Quote",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "SIG-PRO Signal Processor",
    description:
      "Advanced digital signal processing unit for real-time analysis and filtering of military communications.",
    category: "Signal Processing",
    features: ["Real-time Processing", "Multi-channel", "Secure"],
    icon: Settings,
    price: "Contact for Quote",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Military Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our cutting-edge frequency and radio modules designed for the most demanding military applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 ${
                hoveredProduct === product.id ? "border-orange-500 shadow-xl" : "border-gray-200"
              }`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-3 rounded-lg transition-colors duration-300 ${
                      hoveredProduct === product.id ? "bg-orange-100" : "bg-blue-100"
                    }`}
                  >
                    <product.icon
                      className={`h-6 w-6 transition-colors duration-300 ${
                        hoveredProduct === product.id ? "text-orange-600" : "text-blue-600"
                      }`}
                    />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 line-clamp-3">{product.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">{product.price}</span>
                    <Button
                      size="sm"
                      className="bg-orange-600 hover:bg-orange-700 text-white transition-all duration-300 hover:scale-105"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
