"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Smooth scroll to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-10 relative z-10">
        <Image src="/icons/logo.svg" alt="Sunnyside" width={124} height={24} className="text-white" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("about")} className="text-white hover:opacity-75 transition-opacity">
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-white hover:opacity-75 transition-opacity"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-white hover:opacity-75 transition-opacity"
          >
            Projects
          </button>
          <Button className="bg-[hsl(51,100%,49%)] hover:bg-[hsl(51,100%,45%)] text-black font-fraunces font-bold px-8 py-2 rounded-full uppercase tracking-wide transition-all hover:scale-105">
            Contact
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white transition-transform hover:scale-110"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Image
            src="/icons/icon-hamburger.svg"
            alt={mobileMenuOpen ? "Close" : "Menu"}
            width={24}
            height={18}
            className={`transition-transform duration-300 ${mobileMenuOpen ? "rotate-90" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 left-6 right-6 bg-white rounded-lg shadow-lg p-8 md:hidden z-50 transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="absolute -top-4 right-6 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-white"></div>
        <div className="flex flex-col space-y-8 text-center">
          <button
            onClick={() => {
              scrollToSection("about")
              setMobileMenuOpen(false)
            }}
            className="text-[hsl(213,9%,39%)] text-lg hover:text-[hsl(212,27%,19%)] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => {
              scrollToSection("services")
              setMobileMenuOpen(false)
            }}
            className="text-[hsl(213,9%,39%)] text-lg hover:text-[hsl(212,27%,19%)] transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => {
              scrollToSection("projects")
              setMobileMenuOpen(false)
            }}
            className="text-[hsl(213,9%,39%)] text-lg hover:text-[hsl(212,27%,19%)] transition-colors"
          >
            Projects
          </button>
          <Button className="bg-[hsl(51,100%,49%)] hover:bg-[hsl(51,100%,45%)] text-black font-fraunces font-bold px-8 py-3 rounded-full uppercase tracking-wide transition-all hover:scale-105">
            Contact
          </Button>
        </div>
      </div>
    </>
  )
}
