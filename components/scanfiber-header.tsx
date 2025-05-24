import Link from "next/link"

export default function ScanfiberHeader() {
  return (
    <header className="bg-[hsl(var(--scanfiber-bg))] py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white font-bold text-xl flex items-center">
            <div className="mr-2">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H28V28H0V0Z" fill="#0F1924" />
                <path d="M5 5H12V12H5V5Z" fill="white" />
                <path d="M16 5H23V12H16V5Z" fill="white" />
                <path d="M5 16H12V23H5V16Z" fill="white" />
                <path d="M16 16H23V23H16V16Z" fill="white" />
                <path d="M12 12L16 16" stroke="white" strokeWidth="2" />
                <path d="M16 12L12 16" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            SCANFIBER AS
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="text-white hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#" className="text-white hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="#" className="text-white hover:text-primary transition-colors">
            Gallery
          </Link>
          <Link href="#" className="text-white hover:text-primary transition-colors font-medium">
            Daily Charts
          </Link>
          <Link href="#" className="text-white hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="#" className="text-white hover:text-primary transition-colors">
            FSC®/PEFC
          </Link>
        </nav>
      </div>
    </header>
  )
}
