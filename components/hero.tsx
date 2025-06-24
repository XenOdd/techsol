"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Radio, Zap } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Advanced Military Communication Systems",
      subtitle: "Precision-engineered frequency and radio modules for defense applications",
      icon: Radio,
    },
    {
      title: "Cutting-Edge Defense Technology",
      subtitle: "Reliable solutions for mission-critical military operations",
      icon: Shield,
    },
    {
      title: "High-Performance RF Components",
      subtitle: "Superior quality parts for aerospace and defense industries",
      icon: Zap,
    },
  ]

  const CurrentIcon = slides[currentSlide].icon

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Animated background pattern */}
      {/* Low-opacity dot-grid background */}
      <div
        className="absolute inset-0 animate-pulse"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-orange-400 animate-in slide-in-from-left-5 duration-700">
                {CurrentIcon && <CurrentIcon className="h-6 w-6" />}
                <span className="text-sm font-semibold uppercase tracking-wider">Military Grade Solutions</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight animate-in slide-in-from-left-5 duration-700 delay-100">
                {slides[currentSlide].title}
              </h1>

              <p className="text-xl text-blue-100 max-w-2xl animate-in slide-in-from-left-5 duration-700 delay-200">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-left-5 duration-700 delay-300">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-300 text-blue-100 hover:bg-blue-800 px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>

            {/* Slide indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-orange-500 scale-125" : "bg-blue-300 hover:bg-blue-200"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative animate-in slide-in-from-right-5 duration-700 delay-400">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">500+</div>
                    <div className="text-sm text-blue-200">Military Contracts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">25+</div>
                    <div className="text-sm text-blue-200">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">99.9%</div>
                    <div className="text-sm text-blue-200">Reliability Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">24/7</div>
                    <div className="text-sm text-blue-200">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
