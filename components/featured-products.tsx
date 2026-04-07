import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const products = [
  {
    title: "12-Week Shred Program",
    description: "The exact training and nutrition plan I used to get lean. Workout splits, progressive overload, and a flexible meal plan.",
    price: "$49",
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80",
  },
  {
    title: "Beginner Lifting Guide",
    description: "Everything you need to start lifting with confidence. Form breakdowns, your first program, and common mistakes to avoid.",
    price: "$29",
    tag: "Start Here",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
  },
  {
    title: "Meal Prep Masterclass",
    description: "50+ high-protein recipes with full macro breakdowns. Weekly templates, grocery lists, and budget-friendly options.",
    price: "$34",
    tag: null,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
  },
]

export function FeaturedProducts() {
  return (
    <section className="w-full bg-background border-b-2 border-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Best Sellers
          </h2>
          <Link
            href="/products"
            className="hidden text-sm font-bold text-foreground underline underline-offset-4 hover:text-primary md:block"
          >
            View All Products
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.title}
              href="/products"
              className="group flex flex-col border-2 border-foreground bg-card overflow-hidden transition-all hover:shadow-[4px_4px_0px_0px_#1a1a1a]"
            >
              <div className="aspect-[16/10] w-full overflow-hidden border-b-2 border-foreground">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={600}
                  height={375}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center gap-3">
                  {product.tag && (
                    <span className="inline-block border-2 border-foreground bg-accent px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-accent-foreground">
                      {product.tag}
                    </span>
                  )}
                  <span className="text-lg font-extrabold text-foreground">{product.price}</span>
                </div>
                <h3 className="text-lg font-extrabold leading-snug text-foreground group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-auto pt-3 flex items-center gap-1 text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  Get it <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/products"
            className="text-sm font-bold text-foreground underline underline-offset-4 hover:text-primary"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
