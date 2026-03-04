import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <HeroSection />
      <BlogSection />
      <Footer />
    </main>
  )
}
