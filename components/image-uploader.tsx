"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, ImageIcon, Loader2 } from "lucide-react"
import Image from "next/image"

export function ImageUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    setFile(selectedFile)
    setError(null)

    if (selectedFile) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)
    } else {
      setPreview(null)
    }
  }

  const handleUpload = async () => {
    if (!file) {
      setError("Vennligst velg en fil først")
      return
    }

    setUploading(true)
    setError(null)

    try {
      const filename = `${Date.now()}-${file.name}`
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch(`/api/upload?filename=${encodeURIComponent(filename)}`, {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Opplasting feilet")
      }

      const blob = await response.json()
      setUploadedUrl(blob.url)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Opplasting feilet")
    } finally {
      setUploading(false)
    }
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Last opp bilde</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center">
          <label
            htmlFor="image-upload"
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer w-full flex flex-col items-center justify-center hover:border-primary transition-colors"
          >
            {preview ? (
              <div className="relative w-full h-48">
                <Image src={preview || "/placeholder.svg"} alt="Preview" fill className="object-contain" />
              </div>
            ) : (
              <>
                <ImageIcon className="h-12 w-12 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Klikk for å velge bilde eller dra og slipp</p>
              </>
            )}
            <Input id="image-upload" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          </label>
        </div>

        {error && <p className="text-sm text-red-500 text-center">{error}</p>}

        <Button onClick={handleUpload} disabled={!file || uploading} className="w-full">
          {uploading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Laster opp...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Last opp bilde
            </>
          )}
        </Button>

        {uploadedUrl && (
          <div className="mt-4 p-4 bg-secondary rounded-lg">
            <p className="text-sm font-medium mb-2">Bilde lastet opp!</p>
            <p className="text-xs text-gray-500 break-all">{uploadedUrl}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
