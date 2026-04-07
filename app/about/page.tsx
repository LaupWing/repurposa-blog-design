import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const stats = [
  { label: "Followers", value: "45K+" },
  { label: "Years Training", value: "8+" },
  { label: "Articles Written", value: "100+" },
  { label: "Clients Coached", value: "200+" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      <section className="w-full bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Photo */}
            <div className="aspect-[4/5] w-full overflow-hidden border-2 border-foreground">
              <Image
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80"
                alt="Loc Nguyen"
                width={600}
                height={750}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Hey, I&apos;m Loc
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                I&apos;ve been lifting for over 8 years and creating fitness content for the past 4. What started as posting gym clips on Instagram turned into a community of 45K+ people who are tired of the same recycled fitness advice.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                I believe in keeping things simple. Train hard, eat enough protein, sleep well, and stay consistent. That&apos;s 90% of the game. The other 10% is what I write about on this blog — the details that actually make a difference once you&apos;ve nailed the basics.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                I&apos;m not a certified PT with 15 letters after my name. I&apos;m just a guy who&apos;s been in the trenches, made every mistake, and figured out what actually works through trial and error. Everything I share comes from real experience.
              </p>

              <div className="flex gap-4 pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 border-2 border-foreground bg-primary px-6 py-3 text-sm font-extrabold uppercase tracking-widest text-primary-foreground shadow-[4px_4px_0px_0px_#1a1a1a] transition-all hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                >
                  My Programs
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 border-2 border-foreground bg-card p-6 text-center"
              >
                <span className="text-2xl font-extrabold text-foreground md:text-3xl">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* My Story */}
          <div className="mt-16 mx-auto max-w-3xl">
            <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">
              My Story
            </h2>
            <div className="mt-6 flex flex-col gap-5">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                I started training at 17 because I was the skinny kid who got picked last in every sport. The first year was terrible — I had no idea what I was doing, followed random YouTube programs, and ate like garbage. But I fell in love with the process.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Fast forward to today: I&apos;ve built a physique I&apos;m proud of, helped hundreds of people do the same, and created a platform where I can share everything I&apos;ve learned without the BS that plagues the fitness industry.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                This blog is where I go deeper than a 60-second reel allows. Long-form training guides, honest supplement reviews, meal prep that doesn&apos;t make you hate food, and the mindset stuff nobody talks about.
              </p>
            </div>

            <div className="mt-10 border-2 border-foreground bg-accent p-6">
              <h3 className="text-lg font-extrabold text-accent-foreground mb-2">
                Want to work together?
              </h3>
              <p className="text-base leading-relaxed text-accent-foreground">
                Whether it&apos;s coaching, collabs, or just saying hi — I&apos;m always down to connect. Hit me up on the contact page or DM me on Instagram.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
