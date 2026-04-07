import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    title: "12-Week Shred Program",
    description: "The exact training and nutrition plan I used to get lean. Includes workout splits, progressive overload scheme, cardio protocol, and a flexible meal plan. No bro-science, just what works.",
    price: "$49",
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80",
  },
  {
    title: "Beginner Lifting Guide",
    description: "Everything you need to know to start lifting with confidence. Proper form breakdowns, your first 8-week program, gym etiquette, and common mistakes to avoid.",
    price: "$29",
    tag: "Start Here",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
  },
  {
    title: "Meal Prep Masterclass",
    description: "50+ high-protein recipes with full macro breakdowns. Weekly meal prep templates, grocery lists, and budget-friendly options. Eating well doesn't have to be complicated.",
    price: "$34",
    tag: null,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
  },
  {
    title: "1-on-1 Coaching (Monthly)",
    description: "Personalized training program, weekly check-ins, form reviews, and nutrition guidance. Limited spots available — I only take on a handful of clients at a time.",
    price: "$149/mo",
    tag: "Limited",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      <section className="w-full bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Products
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Programs, guides, and coaching to help you get results faster. No fluff — just the stuff I actually use and recommend.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {products.map((product) => (
              <div
                key={product.title}
                className="group flex flex-col border-2 border-foreground bg-card overflow-hidden"
              >
                <div className="aspect-[16/10] w-full overflow-hidden border-b-2 border-foreground">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={600}
                    height={375}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-center gap-3">
                    {product.tag && (
                      <span className="inline-block border-2 border-foreground bg-accent px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-accent-foreground">
                        {product.tag}
                      </span>
                    )}
                    <span className="text-lg font-extrabold text-foreground">{product.price}</span>
                  </div>
                  <h2 className="text-xl font-extrabold text-foreground">
                    {product.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="mt-auto pt-4">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 border-2 border-foreground bg-primary px-6 py-3 text-sm font-extrabold uppercase tracking-widest text-primary-foreground shadow-[4px_4px_0px_0px_#1a1a1a] transition-all hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                    >
                      Get it
                      <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
