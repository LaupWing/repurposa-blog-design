import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} className="invert" />
              <span className="text-lg font-extrabold tracking-wider font-mono uppercase">
                LocNguyen
              </span>
            </div>
            <p className="text-sm leading-relaxed text-background/60">
              Fitness content, training guides, and real talk. No fluff.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-extrabold uppercase tracking-widest">Pages</h4>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Blog</Link>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Products</Link>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">About</Link>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-extrabold uppercase tracking-widest">Socials</h4>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">YouTube</Link>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Instagram</Link>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">TikTok</Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-background/20 pt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} Loc Nguyen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
