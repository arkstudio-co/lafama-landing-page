import { getImageProps } from "next/image"
import ReactDOM from "react-dom"

type HeroImageProps = {
  alt: string
  className: string
}

export default function HeroImage({ alt, className }: HeroImageProps) {
  const { props: desktop } = getImageProps({
    alt,
    src: "/images/hero-image.JPG",
    width: 1080,
    height: 670,
    quality: 100,
    sizes: "100vw",
  })

  const { props: mobile } = getImageProps({
    alt,
    src: "/images/portafolio/6.jpeg",
    width: 3024,
    height: 4032,
    quality: 90,
    sizes: "100vw",
    loading: "eager",
    fetchPriority: "high",
  })

  ReactDOM.preload(desktop.src, {
    as: "image",
    media: "(min-width: 768px)",
    imageSrcSet: desktop.srcSet,
    imageSizes: desktop.sizes,
  })

  ReactDOM.preload(mobile.src, {
    as: "image",
    media: "(max-width: 767px)",
    imageSrcSet: mobile.srcSet,
    imageSizes: mobile.sizes,
    fetchPriority: "high",
  })

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktop.srcSet} sizes={desktop.sizes} />
      <img
        {...mobile}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
      />
    </picture>
  )
}