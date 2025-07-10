"use client"

export function FooterNavigation() {
  // Smooth scroll to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="flex justify-center space-x-8 mb-12">
      <button
        onClick={() => scrollToSection("about")}
        className="text-[hsl(167,40%,24%)] hover:text-white transition-all hover:scale-110"
      >
        About
      </button>
      <button
        onClick={() => scrollToSection("services")}
        className="text-[hsl(167,40%,24%)] hover:text-white transition-all hover:scale-110"
      >
        Services
      </button>
      <button
        onClick={() => scrollToSection("projects")}
        className="text-[hsl(167,40%,24%)] hover:text-white transition-all hover:scale-110"
      >
        Projects
      </button>
    </nav>
  )
}
