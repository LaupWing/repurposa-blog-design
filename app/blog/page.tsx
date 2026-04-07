import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const posts = [
  {
    title: "The Only 5 Exercises You Actually Need",
    excerpt: "Forget the 20-exercise routines. These five compound movements build 90% of your physique. Here's the science and the programming.",
    category: "Training",
    date: "Mar 3, 2026",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  },
  {
    title: "Why You're Not Losing Fat (It's Not the Cardio)",
    excerpt: "Most people blame cardio or willpower. The real issue is simpler than you think — and easier to fix.",
    category: "Nutrition",
    date: "Feb 28, 2026",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
  },
  {
    title: "My Full Push/Pull/Legs Split Breakdown",
    excerpt: "The exact program I've been running for the past 6 months. Sets, reps, rest times, and progression scheme included.",
    category: "Training",
    date: "Feb 24, 2026",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
  },
  {
    title: "High Protein Meals That Don't Taste Like Cardboard",
    excerpt: "10 meal prep recipes I actually enjoy eating. Simple ingredients, big macros, zero suffering.",
    category: "Nutrition",
    date: "Feb 20, 2026",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
  },
  {
    title: "How I Stay Consistent When Motivation Dies",
    excerpt: "Motivation is temporary. Here's the system I use to show up even when I don't feel like it.",
    category: "Mindset",
    date: "Feb 15, 2026",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
  },
  {
    title: "Supplements Worth Your Money (And Which Are a Scam)",
    excerpt: "I've tried them all. Here's what actually works based on research and personal experience.",
    category: "Supplements",
    date: "Feb 10, 2026",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&q=80",
  },
]

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block border-2 border-foreground bg-accent px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-accent-foreground">
      {category}
    </span>
  )
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      <section className="w-full bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Training guides, nutrition tips, mindset stuff, and honest supplement reviews. No fluff.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.title}
                href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                className="group flex flex-col border-2 border-foreground bg-card transition-all hover:shadow-[4px_4px_0px_0px_#1a1a1a]"
              >
                <div className="aspect-[16/10] w-full overflow-hidden border-b-2 border-foreground bg-muted">
                  <div className="h-full">
                    <Image src={post.image} alt={post.title} width={600} height={375} className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-center gap-3">
                    <CategoryBadge category={post.category} />
                    <span className="text-xs font-medium text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-extrabold leading-snug text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              className="flex h-11 w-11 items-center justify-center border-2 border-foreground bg-card text-foreground transition-all hover:bg-muted"
              aria-label="Previous page"
              disabled
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
            </button>
            <button className="flex h-11 w-11 items-center justify-center border-2 border-foreground bg-foreground text-background font-extrabold text-sm">
              1
            </button>
            <button className="flex h-11 w-11 items-center justify-center border-2 border-foreground bg-card text-foreground font-extrabold text-sm transition-all hover:bg-muted">
              2
            </button>
            <button className="flex h-11 w-11 items-center justify-center border-2 border-foreground bg-card text-foreground font-extrabold text-sm transition-all hover:bg-muted">
              3
            </button>
            <span className="flex h-11 w-11 items-center justify-center text-foreground font-bold text-sm">
              ...
            </span>
            <button className="flex h-11 w-11 items-center justify-center border-2 border-foreground bg-card text-foreground font-extrabold text-sm transition-all hover:bg-muted">
              8
            </button>
            <button
              className="flex h-11 w-11 items-center justify-center border-2 border-foreground bg-card text-foreground transition-all hover:bg-muted"
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
