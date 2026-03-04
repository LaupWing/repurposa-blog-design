import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <HeroSection />
    </main>
  )
}
