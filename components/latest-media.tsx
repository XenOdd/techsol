"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

const mediaItems = [
  {
    type: "News",
    title: "Techsol Wins Major Defense Contract",
    description: "Our latest RF communication modules selected for next-generation military vehicles.",
    date: "2024-01-15",
    image: "/placeholder.svg?height=200&width=300",
    category: "Company News",
  },
  {
    type: "Case Study",
    title: "Successful Deployment in Arctic Operations",
    description: "How our frequency modules performed in extreme cold weather military exercises.",
    date: "2024-01-10",
    image: "/placeholder.svg?height=200&width=300",
    category: "Case Study",
  },
  {
    type: "Product Launch",
    title: "New Encrypted Radio Module Series",
    description: "Introducing our latest line of secure communication modules for special operations.",
    date: "2024-01-05",
    image: "/placeholder.svg?height=200&width=300",
    category: "Product News",
  },
]

export default function LatestMedia() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Latest News & Updates</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay informed about our latest developments, product launches, and military technology insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <Card
              key={item.title}
              className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-orange-600 text-white">
                    {item.type}
                  </Badge>
                  <div className="flex items-center text-sm text-blue-200">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="h-32 bg-white/10 rounded-lg mb-4 group-hover:bg-white/20 transition-colors"></div>
                <CardTitle className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-blue-100">{item.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <Button
                  variant="ghost"
                  className="w-full text-orange-300 hover:text-white hover:bg-orange-600 transition-all duration-300 group-hover:scale-105"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-orange-400 text-orange-300 hover:bg-orange-600 hover:text-white px-8 py-3"
          >
            View All Media
          </Button>
        </div>
      </div>
    </section>
  )
}
