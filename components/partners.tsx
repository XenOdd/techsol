"use client"

import { Card, CardContent } from "@/components/ui/card"

const partners = [
  { name: "Defense Corp", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Military Systems Inc", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Aerospace Solutions", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Naval Technologies", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Air Force Systems", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Defense Contractors", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Military Electronics", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Strategic Partners", logo: "/placeholder.svg?height=60&width=120" },
]

export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Trusted by Military Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with leading defense organizations and military contractors worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {partners.map((partner, index) => (
            <Card
              key={partner.name}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardContent className="p-4 flex items-center justify-center h-20">
                <div className="text-center">
                  <div className="w-16 h-8 bg-gray-300 rounded mb-1 group-hover:bg-orange-100 transition-colors"></div>
                  <div className="text-xs text-gray-500 group-hover:text-orange-600 transition-colors font-medium">
                    {partner.name}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Interested in becoming a partner?</p>
          <button className="text-orange-600 hover:text-orange-700 font-semibold hover:underline transition-colors">
            Contact our partnership team →
          </button>
        </div>
      </div>
    </section>
  )
}
