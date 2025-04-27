 'use client'

import Image from 'next/image'

interface BaseImageProps {
  src: string
  alt: string
  className?: string
}

const BaseImage = ({ src, alt, className = "" }: BaseImageProps) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const fullSrc = `${basePath}${src}`

  return (
    <Image
      src={fullSrc}
      alt={alt}
      className={className}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority
    />
  )
}

export default BaseImage