"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Ship, Truck, Globe, Award, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: "40+", label: "Years Experience" },
    { number: "35M", label: "Solid m³ Delivered" },
    { number: "3", label: "Continents Served" },
    { number: "50K", label: "Max GMT Capacity" },
  ]

  const services = [
    {
      icon: <Ship className="h-8 w-8" />,
      title: "Ocean Transport",
      description:
        "Comprehensive shipping solutions with bulk carriers and specialized vessels for efficient wood fiber transport.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ocean-transport-02.jpg-iQPxl0GVbFYKAwC0u7Ha27ELl9HO6H.jpeg",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Handling Operations",
      description: "Expert loading and discharging operations optimized for cost-efficiency and performance.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Discharging-with-orange-peel-grabs.jpg-78u0LIIRAPwgE26XteDnu21favcLsG.jpeg",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Supply Chain",
      description: "Complete supply systems from source to destination across Europe, Asia, and beyond.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-us3-01.jpg-UsHHG3Y6o0vxAw5m2MYIwn1Cel0XSg.jpeg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bulkcarrier-with-eucalyptus-logsHD2-01.jpg-Mdhki7QycIRPuS3jWS8vsvHzNtqqBq.jpeg"
            alt="Bulk carrier with wood logs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6">
              Wood Fiber
              <span className="block text-custom-blue">Supply Systems</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto font-light">
              Over 40 years of experience organizing complete supply systems for raw materials of wood across all
              continents
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-custom-dark hover:bg-gray-800 text-white px-8 py-3">
                Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-white/10 hover:bg-white hover:text-gray-900 px-8 py-3"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="h-6 w-6" />
        </div>
      </section>

      {/* Stats Feature Strip */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold font-serif mb-2 text-custom-blue">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Leading Wood Fiber Trading House
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Scanfiber AS is a specialized trading house with over 40 years of experience organizing complete supply
                systems for raw materials of wood. We serve the European pulp and paper, MDF/OSB, and green energy
                industries.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our expertise spans from sourcing and logistics to ocean transport, delivering more than 35 million
                solid m³ of wood fiber to leading European mills and producers worldwide.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="h-12 w-12 text-custom-blue" />
                <div>
                  <div className="font-semibold text-gray-900">Industry Leader</div>
                  <div className="text-gray-700">Trusted by major global manufacturers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bilder-edited-1240px-10.jpg-f7NsoXuou1r8JZ40xdYXiaNvfntuCd.jpeg"
                alt="Forest operations"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive solutions for wood fiber supply, from source to destination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-gray-200"
              >
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-custom-blue mr-3">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <Link
                    href="/services"
                    className="text-custom-blue hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Contact us today to discuss your wood fiber supply needs and discover how our 40+ years of experience can
            benefit your operations.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-custom-dark hover:bg-opacity-80 text-white px-8 py-3"
              style={{ backgroundColor: "#080C10" }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
