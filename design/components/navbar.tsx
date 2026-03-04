"use client"

import Link from "next/link"
import { Heart, Search, Menu, X } from "lucide-react"
import { useState } from "react"

function BlogLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M12 0V4M12 20V24M0 12H4M20 12H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Subscriptions", href: "#" },
  { label: "Channels", href: "#" },
  { label: "Topics", href: "#" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="w-full border-b-[3px] border-foreground bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2" aria-label="BlogPortal home">
          <div className="flex items-center justify-center rounded-lg border-[3px] border-foreground px-4 py-2.5 gap-2.5">
            <BlogLogo />
            <span className="text-lg font-extrabold tracking-wider text-foreground font-mono uppercase">
              BlogPortal
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-0 md:flex">
          <button
            className="flex h-12 w-12 items-center justify-center border-[3px] border-foreground text-foreground hover:bg-muted transition-colors -mr-[3px]"
            aria-label="Favorites"
          >
            <Heart className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <button
            className="flex h-12 w-12 items-center justify-center border-[3px] border-foreground text-foreground hover:bg-muted transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-12 w-12 items-center justify-center border-[3px] border-foreground text-foreground md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" strokeWidth={2.5} /> : <Menu className="h-6 w-6" strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="border-t-[3px] border-foreground px-6 pb-5 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-bold text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-0 pt-2">
              <button
                className="flex h-12 w-12 items-center justify-center border-[3px] border-foreground text-foreground -mr-[3px]"
                aria-label="Favorites"
              >
                <Heart className="h-5 w-5" strokeWidth={2.5} />
              </button>
              <button
                className="flex h-12 w-12 items-center justify-center border-[3px] border-foreground text-foreground"
                aria-label="Search"
              >
                <Search className="h-5 w-5" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
