"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Star, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ProductsPage() {
  // State for active category
  const [activeCategory, setActiveCategory] = useState("all")

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Intersection observer hooks for scroll animations
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Main product categories
  const mainCategories = [
    {
      id: "vatsandblasere",
      title: "Våtsandblåsere",
      description: "Miljøvennlig og støvfri sandblåsing med vann",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/derksen_%20%282%29.jpg-x6P5zWPUiK4au9ixOaNYREep0MsJX8.jpeg",
      features: ["Støvfri teknologi", "Miljøvennlig", "Redusert vannforbruk", "Ideell for sensitive miljøer"],
    },
    {
      id: "torrsandblasere",
      title: "Tørrsandblåsere",
      description: "Kraftig og effektiv sandblåsing for krevende prosjekter",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/derksen_%20%283%29.jpg-nM3bPD9Xcq9Ryvj8eer18HVNK0rMOI.jpeg",
      features: ["Høy effektivitet", "Allsidig bruk", "Presis kontroll", "Ideell for rustfjerning"],
    },
    {
      id: "kombinerte",
      title: "Kombinerte sandblåsere",
      description: "Fleksible løsninger for alle typer overflatebehandling",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/derksen_-gMibpAXHKH7VqHswdmplFON63TCkXF.webp",
      features: ["2-i-1 løsning", "Maksimal fleksibilitet", "Kostnadseffektiv", "Tilpasningsdyktig"],
    },
  ]

  // Secondary categories
  const secondaryCategories = [
    {
      id: "verneutstyr",
      title: "Verneutstyr",
      description: "Sikkerhetsutstyr for profesjonell sandblåsing",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/derksen_%20%281%29.jpg-WOpRHCV2CCG68G26aA8gQPcmRh9Fbv.jpeg",
      features: ["CE-godkjent", "Komfortabel passform", "Holdbar konstruksjon", "Komplett beskyttelse"],
    },
    {
      id: "tilbehor",
      title: "Tilbehør",
      description: "Spesialisert tilbehør for optimal ytelse",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/derksen_.jpg-kufv7khKzVCGQvF3PtuuZlNb2rbt4V.jpeg",
      features: ["Høy kvalitet", "Kompatibelt med alle IBIX-modeller", "Lang levetid", "Enkelt vedlikehold"],
    },
  ]

  // Featured products
  const featuredProducts = [
    {
      id: 1,
      name: "IBIX® PROBLASTER 60HD H2o",
      category: "kombinerte",
      description: "Vår mest populære kombinerte sandblåser for profesjonell bruk",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/derksen_-gMibpAXHKH7VqHswdmplFON63TCkXF.webp",
      rating: 5,
      featured: true,
    },
    {
      id: 2,
      name: "IBIX® PROBLASTER 40 H2o",
      category: "vatsandblasere",
      description: "Kompakt og kraftig våtsandblåser for mellomstore prosjekter",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/derksen_%20%282%29.jpg-x6P5zWPUiK4au9ixOaNYREep0MsJX8.jpeg",
      rating: 4.8,
      featured: true,
    },
    {
      id: 3,
      name: "IBIX® 9 Basic",
      category: "torrsandblasere",
      description: "Lett og portabel tørrsandblåser for mindre prosjekter",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/derksen_%20%283%29.jpg-nM3bPD9Xcq9Ryvj8eer18HVNK0rMOI.jpeg",
      rating: 4.7,
      featured: true,
    },
  ]

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Anders Johansen",
      company: "Johansen Industri AS",
      quote:
        "IBIX sandblåserne fra Derksen Trading har revolusjonert måten vi jobber på. Støvfri teknologi og enestående resultater hver gang.",
      rating: 5,
      image: "/diverse-group.png",
    },
    {
      id: 2,
      name: "Marte Olsen",
      company: "Olsen Overflatebehandling",
      quote:
        "Som profesjonell innen overflatebehandling er kvalitet og effektivitet avgjørende. IBIX-produktene leverer på alle fronter.",
      rating: 5,
      image: "/diverse-woman-portrait.png",
    },
    {
      id: 3,
      name: "Kristian Berg",
      company: "Berg Maritim Service",
      quote:
        "Vi har brukt IBIX sandblåsere i over 5 år nå, og servicen og støtten fra Derksen Trading har vært upåklagelig.",
      rating: 4.8,
      image: "/thoughtful-man.png",
    },
  ]

  // FAQs
  const faqs = [
    {
      question: "Hvilken sandblåser er best for mitt prosjekt?",
      answer:
        "Valget av sandblåser avhenger av prosjektets størrelse, type overflate og miljøhensyn. Våtsandblåsere er ideelle for støvsensitive miljøer, mens tørrsandblåsere gir maksimal effektivitet for større prosjekter. Kombinerte modeller gir fleksibilitet for varierte behov. Kontakt oss for en personlig vurdering av ditt spesifikke prosjekt.",
    },
    {
      question: "Hvor miljøvennlige er IBIX sandblåsere?",
      answer:
        "IBIX sandblåsere er designet med miljøet i fokus. Våtsandblåsere reduserer støvutslipp med opptil 99%, og alle modeller er optimalisert for lavt forbruk av blåsemiddel. Systemene er også kompatible med miljøvennlige blåsemidler som sodablasting og glassgranulat.",
    },
    {
      question: "Hvilken opplæring og support tilbyr dere?",
      answer:
        "Vi tilbyr omfattende opplæring for alle våre produkter, inkludert praktiske demonstrasjoner og teknisk support. Vårt team av eksperter er tilgjengelige for å svare på spørsmål og gi veiledning om best praksis for bruk og vedlikehold av utstyret.",
    },
    {
      question: "Hva er garantibetingelsene for IBIX produkter?",
      answer:
        "Alle IBIX sandblåsere kommer med 5 års standard fabrikkgaranti, som dekker produksjonsfeil og materialfeil. Dette reflekterer vår tillit til produktenes kvalitet og holdbarhet. Kontakt oss for detaljerte garantibetingelser for spesifikke produkter.",
    },
  ]

  // Video modal state
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const videoRef = useRef(null)

  return (
    <>
      {/* Product Categories Section with interactive tabs */}
      <section id="product-categories" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block mb-2 px-3 py-1 text-xs font-medium tracking-wider text-brand-600 uppercase bg-brand-50 rounded-full">
                Våre produkter
              </span>
              <h2 className="text-3xl font-light tracking-tight text-slate-900 sm:text-4xl md:text-5xl font-heading">
                Profesjonelle <span className="text-brand-600 font-normal">IBIX®</span> løsninger
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 font-light">
                Vi tilbyr et komplett utvalg av sandblåsere og tilbehør for alle typer overflatebehandling
              </p>
            </motion.div>
          </div>

          {/* Interactive category tabs */}
          <Tabs defaultValue="all" className="mb-16">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-slate-100 p-1 rounded-full">
                <TabsTrigger
                  value="all"
                  className="rounded-full px-6 py-2 data-[state=active]:bg-brand-600 data-[state=active]:text-white"
                  onClick={() => setActiveCategory("all")}
                >
                  Alle produkter
                </TabsTrigger>
                <TabsTrigger
                  value="sandblasere"
                  className="rounded-full px-6 py-2 data-[state=active]:bg-brand-600 data-[state=active]:text-white"
                  onClick={() => setActiveCategory("sandblasere")}
                >
                  Sandblåsere
                </TabsTrigger>
                <TabsTrigger
                  value="tilbehor"
                  className="rounded-full px-6 py-2 data-[state=active]:bg-brand-600 data-[state=active]:text-white"
                  onClick={() => setActiveCategory("tilbehor")}
                >
                  Tilbehør & Verneutstyr
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16"
              >
                {mainCategories.map((category) => (
                  <motion.div key={category.id} variants={itemVariants} whileHover={{ y: -10 }} className="group">
                    <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl">
                      {/* Background image with overlay */}
                      <div className="absolute inset-0">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-8">
                        <h3 className="text-3xl font-medium text-white mb-3">{category.title}</h3>
                        <p className="text-slate-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {category.description}
                        </p>
                        <ul className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {category.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-slate-200">
                              <Check className="h-4 w-4 text-brand-500 mr-2" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center text-brand-400 group-hover:text-brand-300 transition-colors">
                          <span className="font-medium">Se alle produkter</span>
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-8 md:grid-cols-2"
              >
                {secondaryCategories.map((category) => (
                  <motion.div key={category.id} variants={itemVariants} whileHover={{ y: -10 }} className="group">
                    <div className="relative h-[350px] overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl">
                      {/* Background image with overlay */}
                      <div className="absolute inset-0">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-8">
                        <h3 className="text-3xl font-medium text-white mb-3">{category.title}</h3>
                        <p className="text-slate-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {category.description}
                        </p>
                        <ul className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {category.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-slate-200">
                              <Check className="h-4 w-4 text-brand-500 mr-2" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center text-brand-400 group-hover:text-brand-300 transition-colors">
                          <span className="font-medium">Se alle produkter</span>
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="sandblasere" className="mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-8 md:grid-cols-3"
              >
                {mainCategories.map((category) => (
                  <motion.div key={category.id} variants={itemVariants} whileHover={{ y: -10 }} className="group">
                    <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl">
                      {/* Background image with overlay */}
                      <div className="absolute inset-0">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-8">
                        <h3 className="text-3xl font-medium text-white mb-3">{category.title}</h3>
                        <p className="text-slate-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {category.description}
                        </p>
                        <ul className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {category.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-slate-200">
                              <Check className="h-4 w-4 text-brand-500 mr-2" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center text-brand-400 group-hover:text-brand-300 transition-colors">
                          <span className="font-medium">Se alle produkter</span>
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="tilbehor" className="mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-8 md:grid-cols-2"
              >
                {secondaryCategories.map((category) => (
                  <motion.div key={category.id} variants={itemVariants} whileHover={{ y: -10 }} className="group">
                    <div className="relative h-[350px] overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl">
                      {/* Background image with overlay */}
                      <div className="absolute inset-0">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-8">
                        <h3 className="text-3xl font-medium text-white mb-3">{category.title}</h3>
                        <p className="text-slate-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {category.description}
                        </p>
                        <ul className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {category.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-slate-200">
                              <Check className="h-4 w-4 text-brand-500 mr-2" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center text-brand-400 group-hover:text-brand-300 transition-colors">
                          <span className="font-medium">Se alle produkter</span>
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Products Section with animated cards */}
      <section className="py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="inline-block mb-2 px-3 py-1 text-xs font-medium tracking-wider text-brand-600 uppercase bg-white rounded-full">
              Utvalgte produkter
            </span>
            <h2 className="text-3xl font-light tracking-tight text-slate-900 sm:text-4xl md:text-5xl font-heading">
              Våre mest <span className="text-brand-600 font-normal">populære</span> modeller
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 font-light">
              Utforsk våre bestselgende IBIX sandblåsere, kjent for sin kvalitet, effektivitet og pålitelighet
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  {product.featured && (
                    <div className="absolute top-4 right-4 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Bestselger
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      />
                    ))}
                    <span className="ml-2 text-sm text-slate-600">{product.rating.toFixed(1)}</span>
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-600 mb-4">{product.description}</p>
                  <Link href={product.id === 1 ? "/ibix-problaster-60hd" : "/produkter"}>
                    <Button className="w-full bg-brand-600 hover:bg-brand-700 transition-all duration-300">
                      Se detaljer <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Features Section with animated counters */}
      <section ref={featuresRef} className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <span className="inline-block mb-2 px-3 py-1 text-xs font-medium tracking-wider text-brand-600 uppercase bg-brand-50 rounded-full">
              Hvorfor velge IBIX
            </span>
            <h2 className="text-3xl font-light tracking-tight text-slate-900 sm:text-4xl md:text-5xl font-heading">
              Fordeler med <span className="text-brand-600 font-normal">IBIX®</span> teknologi
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 font-light">
              Opplev den revolusjonerende IBIX-teknologien som har endret bransjestandarden for sandblåsing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={featuresInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/ibix-sandblaster.png"
                  alt="IBIX sandblåser"
                  width={600}
                  height={700}
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Animated stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-xl p-6 max-w-[220px]"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-600 mb-1">99%</div>
                  <div className="text-sm text-slate-600">Støvreduksjon med H2O-teknologi</div>
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={featuresInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-medium text-slate-900 mb-6">
                  Revolusjonerende teknologi for profesjonell overflatebehandling
                </h3>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  IBIX sandblåsere representerer det ypperste innen moderne overflatebehandling, med innovativ teknologi
                  som kombinerer effektivitet, miljøvennlighet og brukervennlighet.
                </p>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="rounded-full bg-brand-50 p-3 mt-1">
                      <Check className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Støvfri teknologi</h4>
                      <p className="text-slate-600 font-light">
                        H2O-modellene reduserer støvutslipp med opptil 99%, noe som gjør dem ideelle for innendørs bruk
                        og miljøsensitive områder.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="rounded-full bg-brand-50 p-3 mt-1">
                      <Check className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Lett og portabel</h4>
                      <p className="text-slate-600 font-light">
                        Konstruert i aluminium for å minimere vekten, noe som gjør IBIX sandblåsere ekstremt mobile og
                        enkle å transportere til vanskelig tilgjengelige områder.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-start gap-4"
                  >
                    <div className="rounded-full bg-brand-50 p-3 mt-1">
                      <Check className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Presisjonskontroll</h4>
                      <p className="text-slate-600 font-light">
                        Justerbart trykk fra 0,1 til 8,5 bar gir uovertruffen kontroll for alle typer overflater, fra
                        delikate historiske gjenstander til tunge industrielle applikasjoner.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex items-start gap-4"
                  >
                    <div className="rounded-full bg-brand-50 p-3 mt-1">
                      <Check className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Holdbarhet og garanti</h4>
                      <p className="text-slate-600 font-light">
                        Bygget for daglig intensiv bruk med minimal slitasje og vedlikehold. Alle IBIX sandblåsere
                        leveres med 5 års standard fabrikkgaranti.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with animated cards */}
      <section ref={testimonialsRef} className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <span className="inline-block mb-2 px-3 py-1 text-xs font-medium tracking-wider text-brand-600 uppercase bg-white rounded-full">
              Kundeopplevelser
            </span>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl font-heading">
              Hva våre <span className="text-brand-600 font-normal">kunder</span> sier
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 font-light">
              Hør fra profesjonelle som bruker IBIX sandblåsere i sitt daglige arbeid
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white">{testimonial.name}</h3>
                    <p className="text-slate-400">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(testimonial.rating) ? "text-yellow-400" : "text-gray-600"}`}
                      fill={i < Math.floor(testimonial.rating) ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <p className="text-slate-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section with accordion */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="inline-block mb-2 px-3 py-1 text-xs font-medium tracking-wider text-brand-600 uppercase bg-brand-50 rounded-full">
              Vanlige spørsmål
            </span>
            <h2 className="text-3xl font-light tracking-tight text-slate-900 sm:text-4xl md:text-5xl font-heading">
              Ofte stilte <span className="text-brand-600 font-normal">spørsmål</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 font-light">
              Finn svar på de vanligste spørsmålene om IBIX sandblåsere og våre tjenester
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={`item-${index}`} className="border border-slate-200 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 transition-colors">
                      <span className="text-left font-medium text-slate-900">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2">
                      <p className="text-slate-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-video">
              <iframe
                ref={videoRef}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Product Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
