"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  ArrowRight,
  Check,
  Info,
  ChevronRight,
  Star,
  X,
  Download,
  Share,
  Heart,
  Truck,
  Shield,
  Zap,
  Droplet,
  Wind,
  PenToolIcon as Tool,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export default function Problaster60HDPage() {
  // State for active image
  const [activeImage, setActiveImage] = useState(0)

  // State for video modal
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  // State for quantity
  const [quantity, setQuantity] = useState(1)

  // State for favorite
  const [isFavorite, setIsFavorite] = useState(false)

  // Intersection observer hooks for scroll animations
  const [specRef, specInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [relatedRef, relatedInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Product images
  const productImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/derksen_-gMibpAXHKH7VqHswdmplFON63TCkXF.webp",
      alt: "IBIX® PROBLASTER 60HD H2o - Hovedbilde",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/derksen_%20%282%29.jpg-WOpRHCV2CCG68G26aA8gQPcmRh9Fbv.jpeg",
      alt: "IBIX® PROBLASTER 60HD H2o - Sidevisning",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/derksen_%20%284%29.jpg-kufv7khKzVCGQvF3PtuuZlNb2rbt4V.jpeg",
      alt: "IBIX® PROBLASTER 60HD H2o - Detaljvisning",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/derksen_%20%283%29.jpg-nM3bPD9Xcq9Ryvj8eer18HVNK0rMOI.jpeg",
      alt: "IBIX® PROBLASTER 60HD H2o - I bruk",
    },
  ]

  // Product specifications
  const specifications = [
    { name: "Vekt", value: "52 kg", icon: <Zap className="h-5 w-5" /> },
    { name: "Dimensjoner (h x b)", value: "1320×580 mm", icon: <Zap className="h-5 w-5" /> },
    { name: "Standard dyse", value: "8 mm", icon: <Tool className="h-5 w-5" /> },
    { name: "Tilgjengelige dyser sylindriske", value: "8 – 10 – 12 mm", icon: <Tool className="h-5 w-5" /> },
    {
      name: "Tilgjengelige dyser i lang Venturi",
      value: "8 – 9mm (25-40% økt effekt)",
      icon: <Zap className="h-5 w-5" />,
    },
    { name: "Minimum anbefalt luftforbruk", value: "4200 l/min", icon: <Wind className="h-5 w-5" /> },
    {
      name: "Lengde på slange",
      value: "10 meter (lengre lengder tilgjengelig)",
      icon: <Droplet className="h-5 w-5" />,
    },
    { name: "Trykk justerbart fra", value: "0,1 – 8,5 bar", icon: <Zap className="h-5 w-5" /> },
  ]

  // Product features
  const features = [
    "Utstyrt med store hjul for enkel flytting i ulendt terreng",
    "Mulighet for bruk av Blåsesoda",
    "Innebygget trakt for god flyt av fuktig blåsemiddel",
    "Tungsten Carbid nippel for blåseslange (praktisk talt ingen slitasje)",
    "Tilbakeslagsventil for trykkregulatoren (forebygger sand i trykkregulatoren)",
    "Bygget for daglig intensiv bruk, uten slitasje, vedlikeholdt, mm",
    "Sandblåseren er i sin helhet bygget i aluminium",
    "5 års standard fabrikkgaranti",
    "Tilsetningen av vann gjør det mulig å jobbe støvfritt",
  ]

  // Key benefits
  const keyBenefits = [
    {
      title: "Støvfri teknologi",
      description: "Reduserer støvutslipp med opptil 99% for et renere arbeidsmiljø",
      icon: <Droplet className="h-6 w-6" />,
    },
    {
      title: "Lett og portabel",
      description: "Kun 52kg, lett å transportere selv i ulendt terreng",
      icon: <Truck className="h-6 w-6" />,
    },
    {
      title: "Allsidig bruk",
      description: "Perfekt for både tørr- og våtblåsing med justerbart trykk",
      icon: <Tool className="h-6 w-6" />,
    },
    {
      title: "Lang levetid",
      description: "Konstruert i aluminium med 5 års fabrikkgaranti",
      icon: <Shield className="h-6 w-6" />,
    },
  ]

  // Related products
  const relatedProducts = [
    {
      id: 1,
      name: "IBIX® PROBLASTER 40 H2o",
      description: "Kompakt og kraftig våtsandblåser for mellomstore prosjekter",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/derksen_%20%282%29.jpg-WOpRHCV2CCG68G26aA8gQPcmRh9Fbv.jpeg",
    },
    {
      id: 2,
      name: "IBIX® 9 Basic",
      description: "Lett og portabel tørrsandblåser for mindre prosjekter",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/derksen_%20%283%29.jpg-nM3bPD9Xcq9Ryvj8eer18HVNK0rMOI.jpeg",
    },
    {
      id: 3,
      name: "Verneutstyr Pro Kit",
      description: "Komplett verneutstyr for profesjonell sandblåsing",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/derksen_%20%281%29.jpg-WOpRHCV2CCG68G26aA8gQPcmRh9Fbv.jpeg",
    },
  ]

  // Customer reviews
  const customerReviews = [
    {
      id: 1,
      name: "Anders Johansen",
      company: "Johansen Industri AS",
      review:
        "Vi har brukt IBIX Problaster 60HD i over 3 år nå, og den har overgått alle våre forventninger. Spesielt imponerende er støvreduksjonen og den lave vekten som gjør den enkel å transportere mellom prosjekter.",
      rating: 5,
      date: "15.03.2023",
    },
    {
      id: 2,
      name: "Marte Olsen",
      company: "Olsen Overflatebehandling",
      review:
        "Perfekt for våre maritime prosjekter. Kombinasjonen av tørr- og våtblåsing gir oss fleksibiliteten vi trenger, og kvaliteten på arbeidet er førsteklasses. Anbefales på det sterkeste!",
      rating: 5,
      date: "22.06.2023",
    },
    {
      id: 3,
      name: "Kristian Berg",
      company: "Berg Maritim Service",
      review:
        "Etter å ha prøvd flere forskjellige sandblåsere, er IBIX Problaster 60HD den klare vinneren. Den er robust, pålitelig og gir konsistente resultater. 5 års garanti gir også god trygghet.",
      rating: 4,
      date: "08.09.2023",
    },
  ]

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

  return (
    <>
      {/* Breadcrumb navigation with micro-interactions */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm">
            <Link href="/" className="text-slate-500 hover:text-brand-600 transition-colors">
              Hjem
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-slate-400" />
            <Link href="/produkter" className="text-slate-500 hover:text-brand-600 transition-colors">
              Produkter
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-slate-400" />
            <Link href="/produkter" className="text-slate-500 hover:text-brand-600 transition-colors">
              Sandblåsere
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-slate-400" />
            <span className="text-slate-900 font-medium">IBIX® PROBLASTER 60HD H2o</span>
          </nav>
        </div>
      </div>

      {/* Main product section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product gallery with animations */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg mb-4"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center p-6"
                  >
                    <Image
                      src={productImages[activeImage].src || "/placeholder.svg"}
                      alt={productImages[activeImage].alt}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Thumbnail gallery */}
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                      activeImage === index ? "border-brand-600 shadow-md" : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="aspect-square relative">
                      <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                    </div>
                  </button>
                ))}
              </div>

              {/* Product actions for mobile */}
              <div className="mt-6 lg:hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-5 w-5 text-yellow-400"
                          fill={star <= 4.8 ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-slate-600">(12 anmeldelser)</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    På lager
                  </Badge>
                </div>

                <div className="flex gap-4 mb-6">
                  <Button className="flex-1 bg-brand-600 hover:bg-brand-700 transition-all duration-300" size="lg">
                    Kontakt for pris <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className={`border-slate-200 ${
                      isFavorite ? "text-red-500 bg-red-50 border-red-200" : "text-slate-400 hover:text-red-500"
                    }`}
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Product info with simpler text layout */}
            <div>
              <div>
                <Badge className="bg-brand-600 text-white mb-2">Bestselger</Badge>
                <h1 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900 font-heading mb-4">
                  IBIX® PROBLASTER <span className="text-brand-600 font-normal">60HD H2o</span>
                </h1>

                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 text-yellow-400"
                        fill={star <= 4.8 ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-slate-600">(12 anmeldelser)</span>
                </div>

                <div className="prose max-w-none mb-6">
                  <p className="text-slate-700 leading-relaxed">
                    IBIX Problaster 60HD H2o er en kombinert tørr/våtblåser, er lett i vekt, kun 52kg, kompakt og meget
                    godt egnet for utføring av tyngre blåsearbeid. Denne modellen blir mye brukt for fjerning av maling
                    og rust fra stålkonstruksjoner, båter osv. Sandblåseren har store hjul som gjør den enkel å
                    transportere også i ulendt terreng. Perfekt til steder med vanskelig tilkomst.
                  </p>

                  <p className="text-slate-700 leading-relaxed mt-4">
                    Maskinen er utstyrt med store hjul for enkel flytting i ulendt terreng og har innebygget trakt for
                    god flyt av fuktig blåsemiddel. Den er bygget i aluminium, noe som gjør den lett og holdbar.
                    Tilsetningen av vann gjør det mulig å jobbe støvfritt, med opptil 99% støvreduksjon sammenlignet med
                    tradisjonelle sandblåsere.
                  </p>

                  <p className="text-slate-700 leading-relaxed mt-4">
                    IBIX Problaster 60HD H2o er kompatibel med en rekke blåsemidler, inkludert soda, glassgranulat,
                    olivinsand, garnet og valnøttskall. Den justerbare trykkkontrollen (0,1-8,5 bar) gjør det mulig å
                    tilpasse intensiteten for ulike materialer og applikasjoner.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium text-slate-900 mb-2">Nøkkelegenskaper:</h3>
                  <ul className="space-y-2">
                    {features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <div className="flex items-center">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 mr-3">
                      På lager
                    </Badge>
                    <span className="text-sm text-slate-600">Leveringstid: 3-5 virkedager</span>
                  </div>
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-slate-400 mr-2" />
                    <span className="text-sm text-slate-600">Gratis frakt</span>
                  </div>
                </div>

                <div className="flex gap-4 mb-6">
                  <Button className="flex-1 bg-brand-600 hover:bg-brand-700 transition-all duration-300" size="lg">
                    Kontakt for pris <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className={`border-slate-200 ${
                      isFavorite ? "text-red-500 bg-red-50 border-red-200" : "text-slate-400 hover:text-red-500"
                    }`}
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                  <button className="flex items-center hover:text-brand-600 transition-colors">
                    <Download className="h-4 w-4 mr-2" />
                    Last ned produktblad
                  </button>
                  <button className="flex items-center hover:text-brand-600 transition-colors">
                    <Share className="h-4 w-4 mr-2" />
                    Del produkt
                  </button>
                  <Link href="/kontakt" className="flex items-center hover:text-brand-600 transition-colors">
                    <Info className="h-4 w-4 mr-2" />
                    Still oss et spørsmål
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product details tabs */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="features" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white shadow-md rounded-full border border-slate-200 p-1">
                <TabsTrigger
                  value="features"
                  className="rounded-full px-6 py-2 data-[state=active]:bg-brand-600 data-[state=active]:text-white"
                >
                  Funksjoner
                </TabsTrigger>
                <TabsTrigger
                  value="specifications"
                  className="rounded-full px-6 py-2 data-[state=active]:bg-brand-600 data-[state=active]:text-white"
                >
                  Spesifikasjoner
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="rounded-full px-6 py-2 data-[state=active]:bg-brand-600 data-[state=active]:text-white"
                >
                  Anmeldelser
                </TabsTrigger>
                <TabsTrigger
                  value="faq"
                  className="rounded-full px-6 py-2 data-[state=active]:bg-brand-600 data-[state=active]:text-white"
                >
                  FAQ
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Features tab */}
            <TabsContent value="features" className="mt-0">
              <div ref={featuresRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={featuresInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={productImages[0].src || "/placeholder.svg"}
                      alt="IBIX Problaster 60HD H2o"
                      width={600}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
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
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={featuresInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl font-light text-slate-900 font-heading mb-6">
                    Nøkkelfunksjoner og <span className="text-brand-600 font-normal">fordeler</span>
                  </h2>
                  <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                    IBIX Problaster 60HD H2o kombinerer kraft og presisjon med miljøvennlig teknologi, og gir deg det
                    beste av begge verdener for profesjonell overflatebehandling.
                  </p>

                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="rounded-full bg-brand-50 p-2 mt-1">
                          <Check className="h-5 w-5 text-brand-600" />
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </TabsContent>

            {/* Specifications tab */}
            <TabsContent value="specifications" className="mt-0">
              <div ref={specRef} className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={specInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl font-light text-slate-900 font-heading mb-4">
                    Tekniske <span className="text-brand-600 font-normal">spesifikasjoner</span>
                  </h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Detaljerte spesifikasjoner for IBIX Problaster 60HD H2o sandblåser
                  </p>
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={specInView ? "visible" : "hidden"}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {specifications.map((spec, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white rounded-xl p-6 shadow-md border border-slate-100 flex items-start gap-4 hover:shadow-lg transition-shadow"
                    >
                      <div className="rounded-full bg-brand-50 p-3 text-brand-600">{spec.icon}</div>
                      <div>
                        <h3 className="font-medium text-slate-900 mb-1">{spec.name}</h3>
                        <p className="text-slate-600">{spec.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={specInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-12 text-center"
                >
                  <Button className="bg-brand-600 hover:bg-brand-700 transition-all duration-300">
                    Last ned komplett spesifikasjon <Download className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </TabsContent>

            {/* Reviews tab */}
            <TabsContent value="reviews" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-light text-slate-900 font-heading mb-4">
                    Kunde<span className="text-brand-600 font-normal">anmeldelser</span>
                  </h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Se hva våre kunder sier om IBIX Problaster 60HD H2o
                  </p>

                  <div className="flex justify-center items-center mt-6">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-8 w-8 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                    <div className="ml-4">
                      <div className="text-3xl font-bold text-slate-900">4.8</div>
                      <div className="text-sm text-slate-500">av 5 stjerner</div>
                    </div>
                  </div>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {customerReviews.map((review, index) => (
                    <motion.div
                      key={review.id}
                      variants={itemVariants}
                      className="bg-white rounded-xl p-6 shadow-md border border-slate-100"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="font-medium text-slate-900">{review.name}</div>
                          <div className="text-sm text-slate-500">{review.company}</div>
                        </div>
                        <div className="text-sm text-slate-500">{review.date}</div>
                      </div>

                      <div className="flex mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="h-5 w-5 text-yellow-400"
                            fill={star <= review.rating ? "currentColor" : "none"}
                          />
                        ))}
                      </div>

                      <p className="text-slate-700">{review.review}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-12 text-center">
                  <Button variant="outline" className="border-slate-200 hover:bg-slate-50">
                    Se alle anmeldelser <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* FAQ tab */}
            <TabsContent value="faq" className="mt-0">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-light text-slate-900 font-heading mb-4">
                    Ofte stilte <span className="text-brand-600 font-normal">spørsmål</span>
                  </h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Svar på vanlige spørsmål om IBIX Problaster 60HD H2o
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem
                      value="item-1"
                      className="border border-slate-200 rounded-lg overflow-hidden shadow-sm"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 transition-colors">
                        <span className="text-left font-medium text-slate-900">
                          Hvilke overflater kan jeg bruke IBIX Problaster 60HD H2o på?
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-2">
                        <p className="text-slate-600">
                          IBIX Problaster 60HD H2o er ekstremt allsidig og kan brukes på en rekke overflater, inkludert
                          metall, tre, betong, stein, murstein og til og med delikate overflater når den brukes med
                          riktig blåsemiddel og trykk. Den justerbare trykkkontrollen (0,1-8,5 bar) gjør det mulig å
                          tilpasse intensiteten for ulike materialer og applikasjoner.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem
                      value="item-2"
                      className="border border-slate-200 rounded-lg overflow-hidden shadow-sm"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 transition-colors">
                        <span className="text-left font-medium text-slate-900">
                          Hvilke blåsemidler kan jeg bruke med denne maskinen?
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-2">
                        <p className="text-slate-600">
                          IBIX Problaster 60HD H2o er kompatibel med en rekke blåsemidler, inkludert soda,
                          glassgranulat, olivinsand, garnet, valnøttskall og andre. Valget av blåsemiddel avhenger av
                          overflaten som skal behandles og ønsket resultat. Maskinen er spesielt godt egnet for bruk med
                          blåsesoda, som gir miljøvennlig rengjøring.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem
                      value="item-3"
                      className="border border-slate-200 rounded-lg overflow-hidden shadow-sm"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 transition-colors">
                        <span className="text-left font-medium text-slate-900">
                          Hva er forskjellen mellom tørr- og våtblåsing?
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-2">
                        <p className="text-slate-600">
                          Tørrblåsing bruker kun blåsemiddel og luft, og er effektivt for rask fjerning av maling, rust
                          og andre belegg. Våtblåsing tilsetter vann i prosessen, noe som reduserer støvutslipp med
                          opptil 99% og minimerer statisk elektrisitet. Dette gjør våtblåsing ideell for innendørs bruk,
                          miljøsensitive områder, og arbeid med brennbare materialer. IBIX Problaster 60HD H2o gir deg
                          fleksibiliteten til å velge mellom begge metodene.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem
                      value="item-4"
                      className="border border-slate-200 rounded-lg overflow-hidden shadow-sm"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 transition-colors">
                        <span className="text-left font-medium text-slate-900">
                          Hvilken kompressor trenger jeg for å drive IBIX Problaster 60HD H2o?
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-2">
                        <p className="text-slate-600">
                          For optimal ytelse anbefales en kompressor som kan levere minimum 4200 l/min ved 7 bar. Dette
                          sikrer tilstrekkelig lufttrykk og volum for effektiv drift av maskinen, spesielt ved bruk av
                          større dyser. Kontakt oss gjerne for spesifikke anbefalinger basert på dine behov og
                          eksisterende utstyr.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related products section */}
      <section ref={relatedRef} className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={relatedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <span className="inline-block mb-2 px-3 py-1 text-xs font-medium tracking-wider text-brand-600 uppercase bg-brand-50 rounded-full">
              Utforsk mer
            </span>
            <h2 className="text-3xl font-light tracking-tight text-slate-900 sm:text-4xl font-heading">
              Relaterte <span className="text-brand-600 font-normal">produkter</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 font-light">
              Andre produkter som kan være interessante for deg
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={relatedInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {relatedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-600 mb-4">{product.description}</p>
                  <Button className="w-full bg-brand-600 hover:bg-brand-700 transition-all duration-300">
                    Se detaljer <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Product Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
