import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.svg" alt="Repurposa logo" width={32} height={32} className="invert" />
              <span className="text-lg font-extrabold tracking-wider font-mono uppercase">
                Repurposa
              </span>
            </div>
            <p className="text-sm leading-relaxed text-background/60">
              One blog. Ten posts. Fifteen minutes. Your content, everywhere.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-extrabold uppercase tracking-widest">Blog</h4>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Latest Articles</Link>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Content Strategy</Link>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Social Media</Link>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Productivity</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-extrabold uppercase tracking-widest">Product</h4>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Features</Link>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Pricing</Link>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">WordPress Plugin</Link>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Changelog</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-extrabold uppercase tracking-widest">Company</h4>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">About</Link>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Contact</Link>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-background/20 pt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} Repurposa. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-background/40 hover:text-background transition-colors">Twitter</Link>
            <Link href="#" className="text-xs text-background/40 hover:text-background transition-colors">LinkedIn</Link>
            <Link href="#" className="text-xs text-background/40 hover:text-background transition-colors">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
