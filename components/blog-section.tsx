import Image from "next/image"
import Link from "next/link"

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

export function BlogSection() {
  return (
    <section className="w-full bg-background border-b-2 border-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Latest Articles
          </h2>
          <Link
            href="#"
            className="hidden text-sm font-bold text-foreground underline underline-offset-4 hover:text-primary md:block"
          >
            View All
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.title} href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} className="group flex flex-col border-2 border-foreground bg-card transition-all hover:shadow-[4px_4px_0px_0px_#1a1a1a]">
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

        <div className="mt-10 text-center md:hidden">
          <Link
            href="#"
            className="text-sm font-bold text-foreground underline underline-offset-4 hover:text-primary"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
