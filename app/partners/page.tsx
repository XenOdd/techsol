import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building, Globe, Shield, Award, Users, Handshake } from "lucide-react"

export default function PartnersPage() {
  const partnerCategories = [
    {
      title: "Defense Contractors",
      description: "Leading defense contractors and military system integrators",
      icon: Shield,
      partners: [
        {
          name: "Lockheed Martin",
          type: "Prime Contractor",
          region: "Global",
          specialization: "Aerospace & Defense Systems",
          partnership: "Technology Integration",
        },
        {
          name: "Raytheon Technologies",
          type: "Defense Systems",
          region: "North America",
          specialization: "Missile & Defense Systems",
          partnership: "Component Supply",
        },
        {
          name: "BAE Systems",
          type: "Defense Contractor",
          region: "Europe",
          specialization: "Electronic Systems",
          partnership: "Joint Development",
        },
        {
          name: "Thales Group",
          type: "Technology Partner",
          region: "Global",
          specialization: "Defense Electronics",
          partnership: "R&D Collaboration",
        },
      ],
    },
    {
      title: "Government Agencies",
      description: "Military and government organizations worldwide",
      icon: Building,
      partners: [
        {
          name: "U.S. Department of Defense",
          type: "Government Agency",
          region: "United States",
          specialization: "Military Procurement",
          partnership: "Direct Supplier",
        },
        {
          name: "NATO Communications",
          type: "International Organization",
          region: "Europe",
          specialization: "Allied Communications",
          partnership: "Standards Development",
        },
        {
          name: "Pakistan Armed Forces",
          type: "Military Organization",
          region: "Pakistan",
          specialization: "Defense Systems",
          partnership: "Local Supplier",
        },
        {
          name: "Royal Air Force",
          type: "Military Branch",
          region: "United Kingdom",
          specialization: "Aerospace Systems",
          partnership: "Equipment Supply",
        },
      ],
    },
    {
      title: "Technology Partners",
      description: "Leading technology companies and research institutions",
      icon: Globe,
      partners: [
        {
          name: "Texas Instruments",
          type: "Semiconductor",
          region: "Global",
          specialization: "RF Components",
          partnership: "Component Partnership",
        },
        {
          name: "Xilinx (AMD)",
          type: "FPGA Technology",
          region: "Global",
          specialization: "Programmable Logic",
          partnership: "Design Partnership",
        },
        {
          name: "MIT Lincoln Laboratory",
          type: "Research Institution",
          region: "United States",
          specialization: "Advanced Technology",
          partnership: "Research Collaboration",
        },
        {
          name: "DRDO",
          type: "Research Organization",
          region: "India",
          specialization: "Defense R&D",
          partnership: "Joint Research",
        },
      ],
    },
  ]

  const partnershipBenefits = [
    {
      icon: Handshake,
      title: "Strategic Alliances",
      description: "Long-term partnerships that drive innovation and market expansion",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Collaborative quality standards ensuring military-grade excellence",
    },
    {
      icon: Users,
      title: "Knowledge Sharing",
      description: "Exchange of expertise and best practices across the defense industry",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide network enabling comprehensive military support",
    },
  ]

  const partnershipTypes = [
    {
      type: "Technology Integration",
      description: "Collaborative development of advanced military communication systems",
      benefits: ["Joint R&D projects", "Shared technology platforms", "Integrated solutions"],
    },
    {
      type: "Supply Chain Partnership",
      description: "Strategic supplier relationships for critical military components",
      benefits: ["Reliable component supply", "Quality assurance", "Cost optimization"],
    },
    {
      type: "Distribution Partnership",
      description: "Global distribution network for military products and services",
      benefits: ["Market expansion", "Local support", "Regional expertise"],
    },
    {
      type: "Research Collaboration",
      description: "Joint research initiatives for next-generation military technologies",
      benefits: ["Innovation acceleration", "Shared resources", "Risk mitigation"],
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
            <span className="text-orange-600 font-medium">Our Partners</span>
          </nav>
        </div>
      </div>

      <main className="py-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Strategic Partners</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Building strong partnerships with leading defense contractors, government agencies, and technology
                companies worldwide
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Excellence</h2>
              <p className="text-xl text-gray-600">Why organizations choose to partner with Techsol</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <Card key={benefit.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <benefit.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partner Network</h2>
              <p className="text-xl text-gray-600">Trusted relationships across the global defense industry</p>
            </div>

            <div className="space-y-16">
              {partnerCategories.map((category, categoryIndex) => (
                <div key={category.title}>
                  <div className="flex items-center mb-8">
                    <div className="p-3 bg-orange-100 rounded-lg mr-4">
                      <category.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.partners.map((partner, index) => (
                      <Card key={partner.name} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="w-full h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-gray-500 font-medium">{partner.name}</span>
                          </div>
                          <CardTitle className="text-lg font-bold text-gray-900">{partner.name}</CardTitle>
                          <CardDescription className="text-gray-600">{partner.specialization}</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Type:</span>
                            <Badge variant="outline">{partner.type}</Badge>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Region:</span>
                            <span className="font-medium text-gray-900">{partner.region}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Partnership:</span>
                            <span className="font-medium text-orange-600">{partner.partnership}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Models</h2>
              <p className="text-xl text-gray-600">Flexible partnership approaches to meet diverse needs</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {partnershipTypes.map((partnership, index) => (
                <Card key={partnership.type} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">{partnership.type}</CardTitle>
                    <CardDescription className="text-gray-600">{partnership.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {partnership.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Statistics */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Partnership Impact</h2>
              <p className="text-xl text-blue-100">Our partnerships drive global military technology advancement</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-lg">Global Partners</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-lg">Years Partnership</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-lg">Joint Projects</div>
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Become Our Partner</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Join our global network of defense technology leaders
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  We're always looking for strategic partners who share our commitment to advancing military
                  communication technology. Whether you're a defense contractor, government agency, or technology
                  company, we'd like to explore partnership opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-orange-600 hover:bg-orange-700 px-8 py-3">Partnership Inquiry</Button>
                  <Button variant="outline" className="px-8 py-3">
                    Download Partnership Guide
                  </Button>
                </div>
                <p className="text-sm text-gray-500">
                  Contact our partnership team at{" "}
                  <a href="mailto:Marketing@techsol.com.pk" className="text-orange-600 hover:text-orange-700">
                    Marketing@techsol.com.pk
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
