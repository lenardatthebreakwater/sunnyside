"use client"

import type React from "react"

import { useState, useEffect, type ReactNode } from "react"

interface ClientWrapperProps {
  children: ReactNode
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  const [scrollY, setScrollY] = useState(0)

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return <div style={{ "--scroll-y": `${scrollY}px` } as React.CSSProperties}>{children}</div>
}
