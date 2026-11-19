import Image from "next/image"
import type { CSSProperties, ReactNode } from "react"

const IMAGE_RATIO = 1376 / 768
const FRAME_WIDTH = `max(100vw, calc(100svh * ${IMAGE_RATIO.toFixed(4)}))`

type SceneFrameProps = {
  src: string
  alt: string
  focusX?: number
  scale: number
  origin: { x: number; y: number }
  filter?: string
  priority?: boolean
  children?: ReactNode
}

/**
 * Renders an image exactly like `object-cover`, but as a real box so that
 * percentage-positioned hotspots stay pinned to the same pixels in the photo
 * at every viewport size.
 */
export default function SceneFrame({ src, alt, focusX = 0.5, scale, origin, filter, priority, children }: SceneFrameProps) {
  const frameStyle: CSSProperties = {
    width: FRAME_WIDTH,
    aspectRatio: `${IMAGE_RATIO}`,
    left: `clamp(calc(100vw - ${FRAME_WIDTH}), calc(50vw - ${FRAME_WIDTH} * ${focusX}), 0px)`,
    top: "50%",
    transform: "translateY(-50%)",
  }

  return (
    <div className="absolute" style={frameStyle}>
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: `${origin.x}% ${origin.y}%`,
          filter,
        }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          priority={priority}
          sizes="(orientation: portrait) 180vh, 100vw"
          className="object-cover"
        />
        {children}
      </div>
    </div>
  )
}
