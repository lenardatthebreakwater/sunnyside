"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function ParallaxOrange() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl transition-transform duration-75"
      style={{ transform: `translateX(-50%) translateY(${scrollY * 0.1}px)` }}
    >
      <Image
        src="/images/image-header.jpg"
        alt="Orange slice"
        width={800}
        height={400}
        className="w-full h-auto"
        priority
      />
    </div>
  )
}
