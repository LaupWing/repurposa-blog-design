"use client"

import { Mail } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="border-2 border-foreground bg-primary p-8 shadow-[8px_8px_0px_0px_#1a1a1a] md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary-foreground md:text-4xl">
              No spam. Just gains.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/70 md:text-lg">
              Get my best training tips, new articles, and exclusive content straight to your inbox. One email a week, unsubscribe anytime.
            </p>

            <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-0">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 border-2 border-foreground bg-background px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
              />
              <button
                type="submit"
                className="btn-gradient-text inline-flex items-center justify-center gap-2 border-2 border-foreground bg-foreground px-8 py-4 text-sm font-extrabold uppercase tracking-widest text-background transition-all hover:opacity-90 sm:border-l-0"
              >
                <Mail className="h-4 w-4" strokeWidth={2.5} />
                <span>Subscribe</span>
              </button>
            </form>

            <p className="mt-4 text-xs text-primary-foreground/50">
              Join 2,000+ readers. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
