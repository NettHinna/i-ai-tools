import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Building2, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "#080C10" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-scanfiber-AS-logo-upYLShi3Nl1sHTmZmtnGkgmpGdqvuv.png"
              alt="Scanfiber AS"
              width={180}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-300 mb-6 max-w-md">
              Leading trading house specialized in organizing complete supply systems for raw materials of wood. Over 40
              years of experience delivering wood fiber to European and Asian industries.
            </p>

            {/* Certification Logos */}
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-lg p-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fsc-01-Pv1GQ1eXk901ssMDItdZqvCH8fRuTV.png"
                  alt="FSC Certified"
                  width={60}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
              <div className="bg-white rounded-lg p-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pefc-label-pefc-logo-W8Y74UJYZw1txyWIg6eVthUVTmxNE1.png"
                  alt="PEFC Certified"
                  width={60}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Norway Mailing Address */}
          <div>
            <div className="flex items-center mb-4">
              <Mail className="h-5 w-5 text-custom-blue mr-2" />
              <h3 className="text-lg font-semibold">Norway Mailing</h3>
            </div>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-custom-blue flex-shrink-0" />
                <div>
                  <p>Scanfiber AS</p>
                  <p>P.O. Box 123</p>
                  <p>0123 Oslo, Norway</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-custom-blue" />
                <span>+47 22 XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-custom-blue" />
                <span>post@scanfiber.no</span>
              </div>
            </div>
          </div>

          {/* Norway Visiting Address */}
          <div>
            <div className="flex items-center mb-4">
              <Building2 className="h-5 w-5 text-custom-blue mr-2" />
              <h3 className="text-lg font-semibold">Norway Visiting</h3>
            </div>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-custom-blue flex-shrink-0" />
                <div>
                  <p>Scanfiber AS</p>
                  <p>Storgata 45</p>
                  <p>0182 Oslo, Norway</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-custom-blue" />
                <span>+47 22 XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-custom-blue" />
                <span>oslo@scanfiber.no</span>
              </div>
            </div>
          </div>

          {/* Asia Office */}
          <div>
            <div className="flex items-center mb-4">
              <Globe className="h-5 w-5 text-custom-blue mr-2" />
              <h3 className="text-lg font-semibold">Asia</h3>
            </div>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-custom-blue flex-shrink-0" />
                <div>
                  <p>Scanfiber Asia</p>
                  <p>Shanghai Office</p>
                  <p>China</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-custom-blue" />
                <span>+86 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-custom-blue" />
                <span>asia@scanfiber.no</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Scanfiber AS. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sustainability" className="hover:text-white transition-colors">
              Sustainability
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
