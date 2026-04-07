import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Youtube, Instagram } from "lucide-react"
import Link from "next/link"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
  )
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      <section className="w-full bg-background">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Got a question, collab idea, or just want to say what&apos;s up? Drop me a message below or hit me up on socials.
          </p>

          {/* Contact Form */}
          <form className="mt-10 flex flex-col gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="border-2 border-foreground bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@email.com"
                  className="border-2 border-foreground bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-bold text-foreground">
                Subject
              </label>
              <select
                id="subject"
                className="border-2 border-foreground bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue=""
              >
                <option value="" disabled>Pick a topic</option>
                <option value="coaching">Coaching Inquiry</option>
                <option value="collab">Collaboration</option>
                <option value="question">General Question</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold text-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="What's on your mind?"
                className="border-2 border-foreground bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <div>
              <button
                type="submit"
                className="btn-gradient-text inline-flex items-center gap-2 border-2 border-foreground bg-primary px-8 py-4 text-sm font-extrabold uppercase tracking-widest text-primary-foreground shadow-[4px_4px_0px_0px_#1a1a1a] transition-all hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
              >
                <Mail className="h-4 w-4" strokeWidth={2.5} />
                <span>Send Message</span>
              </button>
            </div>
          </form>

          {/* Socials */}
          <div className="mt-16 border-t-2 border-foreground pt-10">
            <h2 className="text-xl font-extrabold text-foreground">
              Or find me here
            </h2>
            <div className="mt-6 flex gap-4">
              <Link
                href="#"
                className="btn-gradient-text flex items-center gap-2 border-2 border-foreground bg-card px-5 py-3 text-sm font-bold text-foreground shadow-[4px_4px_0px_0px_#1a1a1a] transition-all hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
              >
                <Youtube className="h-5 w-5" /> <span>YouTube</span>
              </Link>
              <Link
                href="#"
                className="btn-gradient-text flex items-center gap-2 border-2 border-foreground bg-card px-5 py-3 text-sm font-bold text-foreground shadow-[4px_4px_0px_0px_#1a1a1a] transition-all hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
              >
                <Instagram className="h-5 w-5" /> <span>Instagram</span>
              </Link>
              <Link
                href="#"
                className="btn-gradient-text flex items-center gap-2 border-2 border-foreground bg-card px-5 py-3 text-sm font-bold text-foreground shadow-[4px_4px_0px_0px_#1a1a1a] transition-all hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
              >
                <TikTokIcon className="h-5 w-5" /> <span>TikTok</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
