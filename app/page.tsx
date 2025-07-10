import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { Navigation } from "@/components/navigation"
import { HeroArrow } from "@/components/hero-arrow"
import { ParallaxOrange } from "@/components/parallax-orange"
import { FooterNavigation } from "@/components/footer-navigation"
import Image from "next/image"

// Static data that can be server-rendered
const testimonials = [
  {
    name: "Emily R.",
    role: "Marketing Director",
    text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    avatar: "/images/image-emily.jpg",
  },
  {
    name: "Thomas S.",
    role: "Chief Operating Officer",
    text: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    avatar: "/images/image-thomas.jpg",
  },
  {
    name: "Jennie F.",
    role: "Business Owner",
    text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    avatar: "/images/image-jennie.jpg",
  },
]

const galleryImages = [
  { src: "/images/image-gallery-milkbottles.jpg", alt: "Milk bottles with red caps" },
  { src: "/images/image-gallery-orange.jpg", alt: "Orange slice on plate" },
  { src: "/images/image-gallery-cone.jpg", alt: "Waffle ice cream cone" },
  { src: "/images/image-gallery-sugarcubes.jpg", alt: "White sugar cubes" },
]

export default function SunnysideAgency() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative bg-[hsl(200,100%,62%)] min-h-screen overflow-hidden">
        <Navigation />

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center text-center px-6 pt-16 pb-32 relative z-10">
          <AnimatedSection animation="fadeIn" delay={300}>
            <h1 className="text-white text-4xl md:text-6xl font-fraunces font-black tracking-[0.3em] mb-16 uppercase">
              We are creatives
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={600}>
            <HeroArrow />
          </AnimatedSection>
        </div>

        {/* Orange Slice Background with Parallax */}
        <ParallaxOrange />
      </header>

      {/* Transform Your Brand Section */}
      <section id="about" className="grid md:grid-cols-2 min-h-screen">
        <AnimatedSection
          animation="fadeInLeft"
          className="flex items-center justify-center p-8 lg:p-16 order-2 md:order-1"
        >
          <div className="max-w-md">
            <h2 className="text-[hsl(212,27%,19%)] text-3xl md:text-4xl font-fraunces font-black mb-6">
              Transform your brand
            </h2>
            <p className="text-[hsl(213,9%,39%)] text-lg leading-relaxed mb-8">
              We are a full-service creative agency specializing in helping brands grow fast. Engage your clients
              through compelling visuals that do most of the marketing for you.
            </p>
            <a
              href="#"
              className="text-[hsl(212,27%,19%)] font-fraunces font-black uppercase tracking-wide border-b-4 border-[hsl(51,100%,49%)] hover:border-opacity-50 transition-all hover:scale-105 inline-block"
            >
              Learn More
            </a>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="fadeInRight" className="order-1 md:order-2 min-h-[400px] md:min-h-full">
          <Image
            src="/images/image-transform.jpg"
            alt="White egg on yellow background"
            width={600}
            height={600}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </AnimatedSection>
      </section>

      {/* Stand Out Section */}
      <section className="grid md:grid-cols-2 min-h-screen">
        <AnimatedSection animation="fadeInLeft" className="min-h-[400px] md:min-h-full">
          <Image
            src="/images/image-stand-out.jpg"
            alt="Pink glass on coral background"
            width={600}
            height={600}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </AnimatedSection>
        <AnimatedSection animation="fadeInRight" className="flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-md">
            <h2 className="text-[hsl(212,27%,19%)] text-3xl md:text-4xl font-fraunces font-black mb-6">
              Stand out to the right audience
            </h2>
            <p className="text-[hsl(213,9%,39%)] text-lg leading-relaxed mb-8">
              Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
              we'll build and extend your brand in digital places.
            </p>
            <a
              href="#"
              className="text-[hsl(212,27%,19%)] font-fraunces font-black uppercase tracking-wide border-b-4 border-[hsl(7,99%,70%)] hover:border-opacity-50 transition-all hover:scale-105 inline-block"
            >
              Learn More
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* Services Section */}
      <section id="services" className="grid md:grid-cols-2">
        {/* Graphic Design */}
        <AnimatedSection animation="fadeInUp" className="relative min-h-[600px] flex flex-col justify-end group">
          <Image
            src="/images/image-graphic-design.jpg"
            alt="Red cherries on mint green background"
            width={600}
            height={600}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="relative z-10 text-center p-8 lg:p-16">
            <h3 className="text-[hsl(167,40%,24%)] text-2xl font-fraunces font-black mb-4">Graphic Design</h3>
            <p className="text-[hsl(167,40%,24%)] text-base leading-relaxed max-w-sm mx-auto">
              Great design makes you memorable. We deliver artwork that underscores your brand message and captures
              potential clients' attention.
            </p>
          </div>
        </AnimatedSection>

        {/* Photography */}
        <AnimatedSection
          animation="fadeInUp"
          delay={200}
          className="relative min-h-[600px] flex flex-col justify-end group"
        >
          <Image
            src="/images/image-photography.jpg"
            alt="Orange with leaves on blue background"
            width={600}
            height={600}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="relative z-10 text-center p-8 lg:p-16">
            <h3 className="text-[hsl(198,62%,26%)] text-2xl font-fraunces font-black mb-4">Photography</h3>
            <p className="text-[hsl(198,62%,26%)] text-base leading-relaxed max-w-sm mx-auto">
              Increase your credibility by getting the most stunning, high-quality photos that improve your business
              image.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-center text-[hsl(210,4%,67%)] text-xl font-fraunces font-black uppercase tracking-[0.3em] mb-16">
              Client Testimonials
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 200}>
                <Card className="border-none shadow-none bg-transparent hover:scale-105 transition-transform duration-300">
                  <CardContent className="text-center p-0">
                    <p className="text-[hsl(213,9%,39%)] text-lg leading-relaxed mb-8">{testimonial.text}</p>
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <h4 className="text-[hsl(212,27%,19%)] font-fraunces font-black text-lg mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-[hsl(210,4%,67%)] text-sm">{testimonial.role}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="projects" className="grid grid-cols-2 md:grid-cols-4">
        {galleryImages.map((image, index) => (
          <AnimatedSection
            key={index}
            animation="scaleIn"
            delay={index * 100}
            className="aspect-square group overflow-hidden"
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </AnimatedSection>
        ))}
      </section>

      {/* Footer */}
      <AnimatedSection animation="fadeInUp">
        <footer className="bg-[hsl(167,34%,41%)] py-16 px-6">
          <div className="max-w-md mx-auto text-center">
            <Image
              src="/icons/logo.svg"
              alt="Sunnyside"
              width={124}
              height={24}
              className="mx-auto mb-8 brightness-0 hover:scale-110 transition-transform duration-300"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)",
              }}
            />
            <FooterNavigation />
            <div className="flex justify-center space-x-6">
              <Image
                src="/icons/icon-facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
                className="hover:brightness-0 hover:invert hover:scale-125 transition-all cursor-pointer duration-300"
              />
              <Image
                src="/icons/icon-instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
                className="hover:brightness-0 hover:invert hover:scale-125 transition-all cursor-pointer duration-300"
              />
              <Image
                src="/icons/icon-twitter.svg"
                alt="Twitter"
                width={20}
                height={17}
                className="hover:brightness-0 hover:invert hover:scale-125 transition-all cursor-pointer duration-300"
              />
            </div>
          </div>
        </footer>
      </AnimatedSection>
    </div>
  )
}
