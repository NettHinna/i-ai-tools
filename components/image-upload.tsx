"use client"

import type React from "react"

import { useState } from "react"
import { uploadImage } from "@/lib/blob"
import { Loader2, Upload, X } from "lucide-react"
import Image from "next/image"

interface ImageUploadProps {
  onUploadComplete: (url: string) => void
  className?: string
  aspectRatio?: "square" | "video"
}

export default function ImageUpload({ onUploadComplete, className = "", aspectRatio = "square" }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check file type
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file")
      return
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB")
      return
    }

    setError(null)
    setIsUploading(true)

    try {
      // Create a preview
      const objectUrl = URL.createObjectURL(file)
      setPreview(objectUrl)

      // Upload to Vercel Blob
      const result = await uploadImage(file)

      if (result.success && result.url) {
        onUploadComplete(result.url)
      } else {
        throw new Error(result.error || "Failed to upload image")
      }
    } catch (error) {
      console.error("Error uploading image:", error)
      setError("Failed to upload image. Please try again.")
      setPreview(null)
    } finally {
      setIsUploading(false)
    }
  }

  const clearPreview = () => {
    setPreview(null)
    setError(null)
  }

  const aspectRatioClass = aspectRatio === "square" ? "aspect-square" : "aspect-video"

  return (
    <div className={`relative ${className}`}>
      <div
        className={`${aspectRatioClass} border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 overflow-hidden ${
          isUploading ? "opacity-70" : ""
        }`}
      >
        {preview ? (
          <>
            <Image src={preview || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
            <button
              type="button"
              onClick={clearPreview}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
              disabled={isUploading}
            >
              <X className="h-4 w-4 text-gray-700" />
            </button>
          </>
        ) : (
          <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer p-4">
            <Upload className="h-8 w-8 text-gray-400 mb-2" />
            <span className="text-sm text-gray-500 text-center">
              {isUploading ? "Uploading..." : "Click to upload an image"}
            </span>
            <span className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP (max 5MB)</span>
            <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} disabled={isUploading} />
          </label>
        )}
        {isUploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
            <Loader2 className="h-8 w-8 text-primary-600 animate-spin" />
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
