import Image from "next/image"
import Link from "next/link"

const posts = [
  {
    title: "How to Repurpose Your Blog into 10 Social Posts",
    excerpt: "Stop letting your content die after one publish. Learn how to turn a single blog post into a week's worth of social media content.",
    category: "Content Strategy",
    date: "Mar 3, 2026",
    image: "/placeholder.jpg",
  },
  {
    title: "Why Every Creator Needs a Content System",
    excerpt: "The difference between creators who burn out and those who scale? A system. Here's how to build yours.",
    category: "Productivity",
    date: "Feb 28, 2026",
    image: "/placeholder.jpg",
  },
  {
    title: "The Best Times to Post on Every Platform in 2026",
    excerpt: "We analyzed millions of posts to find the optimal posting windows for Twitter, LinkedIn, Instagram, and more.",
    category: "Social Media",
    date: "Feb 24, 2026",
    image: "/placeholder.jpg",
  },
  {
    title: "Building a Personal Brand with AI-Powered Content",
    excerpt: "AI isn't replacing creators — it's giving them superpowers. Here's how to use it without losing your voice.",
    category: "AI & Writing",
    date: "Feb 20, 2026",
    image: "/placeholder.jpg",
  },
  {
    title: "From Zero to 10K Followers: A Content Repurposing Playbook",
    excerpt: "A step-by-step guide to growing your audience across platforms using one core content strategy.",
    category: "Growth",
    date: "Feb 15, 2026",
    image: "/placeholder.jpg",
  },
  {
    title: "5 Blog Formats That Get the Most Social Shares",
    excerpt: "Not all blog posts are created equal. These five formats consistently outperform the rest when repurposed.",
    category: "Content Strategy",
    date: "Feb 10, 2026",
    image: "/placeholder.jpg",
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
            <Link key={post.title} href="#" className="group flex flex-col border-2 border-foreground bg-card transition-all hover:shadow-[4px_4px_0px_0px_#1a1a1a]">
              <div className="aspect-[16/10] w-full overflow-hidden border-b-2 border-foreground bg-muted">
                <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
                  {post.image === "/placeholder.jpg" ? "Image" : (
                    <Image src={post.image} alt={post.title} width={400} height={250} className="h-full w-full object-cover" />
                  )}
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
