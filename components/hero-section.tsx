import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-16 md:flex-row md:gap-12 md:py-20 lg:py-24">
        {/* Left Content */}
        <div className="flex flex-1 flex-col gap-8">
          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground md:text-5xl lg:text-[3.5rem] text-balance">
            Fitness tips,{" "}
            <span className="inline-block border-2 border-foreground bg-accent px-3 py-0.5 text-accent-foreground">
              real results
            </span>
            <br />
            & no BS
          </h1>

          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Training guides, nutrition advice, and honest content from someone who actually lifts. Join 45K+ followers on the journey.
          </p>

          <div>
            <span className="group relative inline-flex overflow-hidden p-[3px] animate-glow-pulse transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
              <span className="absolute left-1/2 top-1/2 h-[500%] w-[500%] -translate-x-1/2 -translate-y-1/2 animate-gradient-spin bg-[conic-gradient(from_0deg,#c4f52a,#f5c542,#e85d3a,#c4f52a,#22c55e,#06b6d4,#f5c542,#c4f52a)]" />
              <button className="relative inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm font-extrabold uppercase tracking-widest text-primary-foreground">
                Explore
                <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
              </button>
            </span>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex flex-1 items-center justify-center">
          <Image
            src="/images/hero-illustration.jpg"
            alt="Person reading blogs on a device, sitting on a stack of books"
            width={520}
            height={440}
            className="h-auto w-full max-w-sm object-contain md:max-w-md lg:max-w-lg"
            priority
          />
        </div>
      </div>
    </section>
  )
}
