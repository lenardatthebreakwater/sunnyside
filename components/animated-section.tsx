"use client"

import type { ReactNode } from "react"
import { useInView } from "@/hooks/useInView"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "scaleIn"
  delay?: number
}

export function AnimatedSection({ children, className = "", animation = "fadeInUp", delay = 0 }: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true })

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out"

    if (!isInView) {
      switch (animation) {
        case "fadeInUp":
          return `${baseClasses} opacity-0 translate-y-12`
        case "fadeInLeft":
          return `${baseClasses} opacity-0 -translate-x-12`
        case "fadeInRight":
          return `${baseClasses} opacity-0 translate-x-12`
        case "fadeIn":
          return `${baseClasses} opacity-0`
        case "scaleIn":
          return `${baseClasses} opacity-0 scale-95`
        default:
          return `${baseClasses} opacity-0 translate-y-12`
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
