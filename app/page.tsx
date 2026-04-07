import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BlogSection } from "@/components/blog-section"
import { FeaturedProducts } from "@/components/featured-products"
import { NewsletterSection } from "@/components/newsletter-section"
import { NewsletterBanner } from "@/components/newsletter-banner"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <HeroSection />
      <NewsletterSection />
      <BlogSection />
      <FeaturedProducts />
      <NewsletterBanner />
      <Footer />
    </main>
  )
}
