"use client"

import { useState } from "react"
import { submitContactForm } from "@/app/actions/contact"
import { Loader2 } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      const result = await submitContactForm(formData)
      setFormStatus(result)
    } catch (error) {
      setFormStatus({
        success: false,
        message: "Det oppstod en feil. Vennligst prøv igjen senere.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-secondary-800 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">Kontakt oss</h1>
            <p className="text-lg text-gray-200 font-light">
              Har du spørsmål om våre produkter eller tjenester? Ta kontakt med oss i dag.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send oss en melding</h2>
              <p className="text-gray-600 mb-8 font-light">
                Fyll ut skjemaet under, så vil vi kontakte deg så snart som mulig. Du kan også ringe oss direkte på
                telefonnummeret til høyre.
              </p>

              <form action={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Navn *
                    </label>
                    <input type="text" id="name" name="name" required className="form-input" placeholder="Ditt navn" />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">
                      E-post *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="form-input"
                      placeholder="din.epost@eksempel.no"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="form-label">
                      Telefon
                    </label>
                    <input type="tel" id="phone" name="phone" className="form-input" placeholder="Ditt telefonnummer" />
                  </div>
                  <div>
                    <label htmlFor="company" className="form-label">
                      Firma
                    </label>
                    <input type="text" id="company" name="company" className="form-input" placeholder="Ditt firma" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Melding *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="form-input"
                    placeholder="Skriv din melding her..."
                  ></textarea>
                </div>

                <button type="submit" className="form-button" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sender...
                    </>
                  ) : (
                    "Send melding"
                  )}
                </button>

                {formStatus && (
                  <div
                    className={`p-4 rounded-md ${
                      formStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Kontaktinformasjon</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Adresse</h3>
                  <p className="text-gray-600 font-light">Industriveien 123, 8013 Bodø, Norge</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Telefon</h3>
                  <p className="text-gray-600 font-light">+47 123 45 678</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">E-post</h3>
                  <p className="text-gray-600 font-light">post@derksentrading.no</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Åpningstider</h3>
                  <div className="text-gray-600 font-light">
                    <p>Mandag - Fredag: 08:00 - 16:00</p>
                    <p>Lørdag - Søndag: Stengt</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Finn oss på kartet</h3>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1413.9572060874938!2d14.404916716440599!3d67.28015089999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45df10403501b2a5%3A0x4c3c7ba3a3a3a3a3!2sBod%C3%B8%2C%20Norway!5e0!3m2!1sen!2sus!4v1620123456789!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kart til Derksen Trading"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
