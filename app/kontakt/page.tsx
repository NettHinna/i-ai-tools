"use client"

import type React from "react"

import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, type FormEvent } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Navn er påkrevd / Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-post er påkrevd / Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Ugyldig e-postadresse / Invalid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Emne er påkrevd / Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Melding er påkrevd / Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In a real implementation, you would send the form data to your server
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary-800 text-white relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%286%29-XaPI1VRqmQPLtpYlncbxkzHK4GS6IH.jpeg"
            alt="Industrihall med blått lys"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-gray-300 hover:text-white">
              Hjem
            </Link>
            <span className="text-gray-400">/</span>
            <span>Kontakt</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-8">Kontakt oss</h1>

          <div className="max-w-2xl">
            <p className="text-xl mb-6">
              Vi er her for å svare på spørsmål om våre produkter, tjenester eller for å gi deg et uforpliktende tilbud.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send oss en melding</h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-md">
                  Takk for din henvendelse! Vi vil kontakte deg så snart som mulig. / Thank you for your message! We
                  will contact you as soon as possible.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-md">
                  Det oppstod en feil ved sending av skjemaet. Vennligst prøv igjen senere. / An error occurred while
                  submitting the form. Please try again later.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Navn*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600`}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-post*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Emne*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.subject ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600`}
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Melding*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-3 py-2 border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600`}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="btn-primary flex items-center justify-center min-w-[120px]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sender...
                    </>
                  ) : (
                    "Send melding"
                  )}
                </button>
              </form>
            </div>

            {/* Rest of the component remains the same */}
            <div>
              <div className="relative rounded-lg overflow-hidden mb-8 h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%283%29-RrXNXQiS0K518yqePzzEmZ1K5n8cJt.jpeg"
                  alt="Fagfolk i arbeid"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-6">Kontaktinformasjon</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Besøksadresse</h3>
                    <p className="text-gray-600">
                      Derksen Trading AS
                      <br />
                      Industriveien 123
                      <br />
                      8013 Bodø
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Telefon</h3>
                    <p className="text-gray-600">+47 123 45 678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">E-post</h3>
                    <p className="text-gray-600">post@derksentrading.no</p>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="font-bold text-lg mb-2">Åpningstider</h3>
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="py-1 pr-4 font-medium">Mandag - Fredag:</td>
                        <td className="py-1">08:00 - 16:00</td>
                      </tr>
                      <tr>
                        <td className="py-1 pr-4 font-medium">Lørdag:</td>
                        <td className="py-1">Stengt</td>
                      </tr>
                      <tr>
                        <td className="py-1 pr-4 font-medium">Søndag:</td>
                        <td className="py-1">Stengt</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Finn oss</h2>
            <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
              Vi holder til sentralt i Bodø med god tilgjengelighet
            </p>
          </div>
          <div className="aspect-[16/9] w-full bg-gray-200 rounded-lg overflow-hidden">
            <div className="w-full h-full relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%281%29-zkENcnsyrCFhf2UzR3yIaCiPxMt6KL.jpeg"
                alt="Kart over Derksen Trading AS lokasjon"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-secondary-900/30 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">Derksen Trading AS</p>
                  <p>Industriveien 123, 8013 Bodø</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary-800 text-white py-16 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%281%29-zkENcnsyrCFhf2UzR3yIaCiPxMt6KL.jpeg"
            alt="Industrianlegg"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Trenger du hjelp med et prosjekt?
          </h2>
          <p className="mt-4 text-gray-300 md:text-xl max-w-3xl mx-auto mb-8">
            Vi tilbyr både salg, utleie og tjenester innen sandblåsing og overflatebehandling. Kontakt oss for en
            uforpliktende samtale om ditt prosjekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8">Ring oss: +47 123 45 678</button>
            <button className="btn-outline px-8">Send e-post</button>
          </div>
        </div>
      </section>
    </div>
  )
}
