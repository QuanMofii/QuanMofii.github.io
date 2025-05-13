'use client'
import { CSSProperties } from "react"
interface BaseVideoProps {
  src: string
  className?: string
  style?: CSSProperties
}

const BaseVideo = ({ src, className = "" ,style={}}: BaseVideoProps) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  const fullSrc = `${basePath}${src}`

  return (
    <video
      src={fullSrc}
      className={className}
      style={style}
      autoPlay
      muted
      loop
      playsInline
    />
  )
}

export default BaseVideo 