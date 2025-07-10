"use client"

import Image from "next/image"

export function HeroArrow() {
  // Smooth scroll to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <button onClick={() => scrollToSection("about")}>
      <Image
        src="/icons/icon-arrow-down.svg"
        alt="Scroll down"
        width={36}
        height={114}
        className="animate-bounce hover:scale-110 transition-transform cursor-pointer"
      />
    </button>
  )
}
