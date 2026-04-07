import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogSection } from "@/components/blog-section"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      <section className="w-full bg-background">
        <div className="mx-auto max-w-7xl px-6 pt-16 md:pt-20">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Training guides, nutrition tips, mindset stuff, and honest supplement reviews. No fluff.
          </p>
        </div>
      </section>

      <BlogSection />
      <Footer />
    </main>
  )
}
