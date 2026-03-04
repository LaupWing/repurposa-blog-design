import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-16 md:flex-row md:gap-12 md:py-20 lg:py-24">
        {/* Left Content */}
        <div className="flex flex-1 flex-col gap-8">
          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground md:text-5xl lg:text-[3.5rem] text-balance">
            Stay informed & entertained
            <br />
            with our{" "}
            <span className="inline-block border-2 border-foreground bg-accent px-3 py-0.5 text-accent-foreground">
              blog
            </span>{" "}
            <br className="hidden md:block" />
            community
          </h1>

          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Start exploring our vast library of articles now. The world of
            knowledge, entertainment, and inspiration awaits.
          </p>

          <div>
            <button className="group inline-flex items-center gap-3 border-2 border-foreground bg-primary px-8 py-4 text-sm font-extrabold uppercase tracking-widest text-primary-foreground shadow-[4px_4px_0px_0px_#1a1a1a] transition-all hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]">
              Explore
              <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
            </button>
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
