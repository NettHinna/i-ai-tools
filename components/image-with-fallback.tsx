"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

type ImageWithFallbackProps = ImageProps & {
  fallbackSrc?: string
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  ...rest
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false)

  return (
    <Image
      {...rest}
      src={error ? fallbackSrc : src}
      alt={alt}
      onError={() => setError(true)}
      loading={rest.priority ? "eager" : "lazy"}
    />
  )
}
