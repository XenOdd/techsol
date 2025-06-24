import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import Solutions from "@/components/solutions"
import Partners from "@/components/partners"
import LatestMedia from "@/components/latest-media"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Solutions />
        <Partners />
        <LatestMedia />
      </main>
      <Footer />
    </div>
  )
}
