import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, Users, Globe } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    { year: "1999", event: "Techsol founded with focus on military communications" },
    { year: "2003", event: "First major defense contract awarded" },
    { year: "2008", event: "ISO 9001:2015 certification achieved" },
    { year: "2012", event: "Expanded to international markets" },
    { year: "2018", event: "Advanced RF laboratory established" },
    { year: "2024", event: "500+ successful military deployments" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every product designed with military-grade security and reliability standards.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to delivering superior quality in every component and service.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term relationships with defense contractors and military organizations.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Supporting military operations worldwide with localized support and service.",
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
            <span className="text-orange-600 font-medium">About Us</span>
          </nav>
        </div>
      </div>

      <main className="py-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Techsol</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Leading the future of military communications with 25+ years of innovation in frequency and radio module
                technology
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To provide cutting-edge frequency and radio communication solutions that enhance military
                    operational effectiveness while ensuring the highest standards of security, reliability, and
                    performance in the most challenging environments.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To be the global leader in military communication technology, driving innovation that protects and
                    empowers defense forces worldwide through superior engineering and unwavering commitment to
                    excellence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <value.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600">Key milestones in our company history</p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <Badge
                      variant="outline"
                      className="text-lg px-4 py-2 bg-orange-100 text-orange-700 border-orange-300"
                    >
                      {milestone.year}
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg">Military Contracts</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-lg">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-lg">Reliability Rate</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
