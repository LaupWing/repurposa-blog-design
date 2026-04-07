"use client"

import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, Info } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block border-2 border-foreground bg-accent px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-accent-foreground">
      {category}
    </span>
  )
}

export default function BlogPost() {
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    setDismissed(localStorage.getItem("human-notice-dismissed") === "true")
  }, [])

  function dismiss() {
    setDismissed(true)
    localStorage.setItem("human-notice-dismissed", "true")
  }

  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      <article className="w-full bg-background">
        <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <CategoryBadge category="Training" />
            <span className="text-sm font-medium text-muted-foreground">Mar 3, 2026</span>
            <span className="text-sm text-muted-foreground">&middot;</span>
            <span className="text-sm font-medium text-muted-foreground">5 min read</span>
          </div>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            The Only 5 Exercises You Actually Need
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Forget the 20-exercise routines. These five compound movements build 90% of your physique. Here&apos;s the science and the programming.
          </p>

          {/* Human-written notice */}
          {!dismissed && (
            <div className="mt-8 flex items-start gap-3 border-2 border-foreground bg-[#d4f1f9] p-4">
              <Info className="h-5 w-5 shrink-0 text-[#1a1a1a] mt-0.5" strokeWidth={2.5} />
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1a1a1a]">
                  Written by an actual human (me). AI only helps with fixing my grammar and spelling, so you don&apos;t have to suffer through my terrible spellling.
                </p>
                <button
                  onClick={dismiss}
                  className="mt-2 text-xs font-bold text-[#1a1a1a]/60 underline underline-offset-2 hover:text-[#1a1a1a] transition-colors"
                >
                  Don&apos;t show again
                </button>
              </div>
            </div>
          )}

          {/* Featured Image */}
          <div className="mt-10 aspect-[16/9] w-full overflow-hidden border-2 border-foreground">
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
              alt="Gym with weights and equipment"
              width={1200}
              height={675}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="mt-12">
            <p className="text-base leading-relaxed text-foreground md:text-lg">
              Most gym programs are way too complicated. You don&apos;t need 15 exercises, 6 isolation movements, and a cable machine to build a great physique. You need five movements, progressive overload, and consistency.
            </p>

            <h2 className="mt-10 mb-4 text-2xl font-extrabold text-foreground">
              1. The Squat
            </h2>
            <p className="text-base leading-relaxed text-foreground md:text-lg">
              The king of all exercises. Squats hit your quads, glutes, hamstrings, and core all at once. Whether you go with back squats, front squats, or goblet squats — just squat. Aim for 3-4 sets of 6-10 reps, twice a week.
            </p>

            <h2 className="mt-10 mb-4 text-2xl font-extrabold text-foreground">
              2. The Deadlift
            </h2>
            <p className="text-base leading-relaxed text-foreground md:text-lg">
              Nothing builds raw strength like pulling heavy weight off the floor. Deadlifts work your entire posterior chain — back, glutes, hamstrings, traps. Conventional or sumo, pick one and get strong at it. 3 sets of 5 reps is plenty.
            </p>

            <h2 className="mt-10 mb-4 text-2xl font-extrabold text-foreground">
              3. The Bench Press
            </h2>
            <p className="text-base leading-relaxed text-foreground md:text-lg">
              Flat bench, incline bench, or dumbbell press — this is your horizontal push. It builds your chest, shoulders, and triceps. 3-4 sets of 8-12 reps. Don&apos;t ego lift, control the weight.
            </p>

            <h2 className="mt-10 mb-4 text-2xl font-extrabold text-foreground">
              4. The Overhead Press
            </h2>
            <p className="text-base leading-relaxed text-foreground md:text-lg">
              Standing barbell press or seated dumbbell press — your vertical push. This builds boulder shoulders and strengthens your core more than most &quot;core exercises.&quot; 3-4 sets of 6-10 reps.
            </p>

            <h2 className="mt-10 mb-4 text-2xl font-extrabold text-foreground">
              5. The Pull-Up / Row
            </h2>
            <p className="text-base leading-relaxed text-foreground md:text-lg">
              You need a pulling movement. Pull-ups, chin-ups, barbell rows, or cable rows — pick one vertical and one horizontal pull. This balances out all the pressing and builds a thick back. 3-4 sets of 8-12 reps.
            </p>

            <div className="mt-12 border-2 border-foreground bg-accent p-6">
              <h3 className="text-lg font-extrabold text-accent-foreground mb-2">
                The Bottom Line
              </h3>
              <p className="text-base leading-relaxed text-accent-foreground">
                Master these five movements. Add weight over time. Stay consistent. That&apos;s it. You don&apos;t need the fancy stuff until you&apos;ve milked these dry — and trust me, that takes years.
              </p>
            </div>
          </div>

          {/* Author */}
          <div className="mt-12 flex items-center gap-4 border-t-2 border-foreground pt-8">
            <div className="h-14 w-14 border-2 border-foreground bg-muted flex items-center justify-center text-sm text-muted-foreground font-bold">
              LN
            </div>
            <div>
              <p className="text-sm font-extrabold text-foreground">Loc Nguyen</p>
              <p className="text-sm text-muted-foreground">Fitness creator &middot; 45K+ followers</p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
