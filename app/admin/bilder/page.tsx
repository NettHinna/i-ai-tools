import { ImageUploader } from "@/components/image-uploader"

export default function ImagesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Administrer bilder</h1>
        <p className="text-gray-500 mt-2">Last opp og administrer bilder for nettstedet</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Last opp nytt bilde</h2>
          <ImageUploader />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Nylig opplastede bilder</h2>
          <p className="text-gray-500">
            Her vil du se en liste over nylig opplastede bilder. Denne funksjonaliteten krever backend-integrasjon for å
            hente bildene.
          </p>
        </div>
      </div>
    </div>
  )
}
