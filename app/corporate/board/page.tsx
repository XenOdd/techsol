import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"

export default function BoardPage() {
  const boardMembers = [
    {
      name: "General Robert Mitchell (Ret.)",
      position: "Chairman of the Board",
      background: "Former U.S. Army Chief of Staff with 35 years of military service",
      expertise: ["Military Strategy", "Defense Operations", "Leadership"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Sarah Chen",
      position: "Chief Executive Officer",
      background: "PhD in Electrical Engineering, 20+ years in defense technology",
      expertise: ["RF Engineering", "Strategic Planning", "Innovation"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Admiral James Thompson (Ret.)",
      position: "Chief Technology Officer",
      background: "Former Navy Communications Director, expert in naval systems",
      expertise: ["Naval Communications", "System Integration", "R&D"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Colonel Maria Rodriguez (Ret.)",
      position: "VP of Operations",
      background: "Air Force veteran specializing in aerospace communications",
      expertise: ["Aerospace Systems", "Quality Assurance", "Operations"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Davidson",
      position: "Chief Financial Officer",
      background: "Former defense contractor CFO with extensive financial expertise",
      expertise: ["Financial Strategy", "Risk Management", "Compliance"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Jennifer Park",
      position: "VP of Research & Development",
      background: "Leading researcher in military communication technologies",
      expertise: ["Advanced Research", "Innovation", "Technology Development"],
      image: "/placeholder.svg?height=300&width=300",
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
            <span className="text-gray-500">Corporate</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-orange-600 font-medium">Board Members</span>
          </nav>
        </div>
      </div>

      <main className="py-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Board of Directors</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Meet the experienced military and industry leaders guiding Techsol's strategic direction
              </p>
            </div>
          </div>
        </section>

        {/* Board Members */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <Card key={member.name} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
                    <CardTitle className="text-xl font-bold text-gray-900">{member.name}</CardTitle>
                    <CardDescription className="text-orange-600 font-semibold">{member.position}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm">{member.background}</p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-4">
                      <button className="p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors">
                        <Linkedin className="h-4 w-4 text-blue-600" />
                      </button>
                      <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                        <Mail className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Message */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership Message</h2>
            <blockquote className="text-xl text-gray-600 italic leading-relaxed">
              "Our board combines decades of military experience with cutting-edge technical expertise. Together, we are
              committed to advancing military communication technology while maintaining the highest standards of
              security and reliability that our defense partners depend on."
            </blockquote>
            <cite className="block mt-6 text-orange-600 font-semibold">
              - General Robert Mitchell (Ret.), Chairman of the Board
            </cite>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
