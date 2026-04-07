"use client"

import { ArrowRight } from "lucide-react"

export function NewsletterBanner() {
  return (
    <section className="w-full bg-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="max-w-lg">
            <h2 className="text-2xl font-extrabold tracking-tight text-background md:text-3xl">
              Don&apos;t miss the next drop.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-background/60">
              New articles, programs, and exclusive tips — delivered weekly.
            </p>
          </div>

          <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border-2 border-background bg-transparent px-5 py-3 text-sm text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-background"
            />
            <button
              type="submit"
              className="btn-gradient-text inline-flex items-center justify-center gap-2 border-2 border-background bg-primary px-6 py-3 text-sm font-extrabold uppercase tracking-widest text-primary-foreground transition-all hover:opacity-90 sm:border-l-0"
            >
              <span>Join</span>
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
