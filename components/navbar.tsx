"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart, Search, Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Subscriptions", href: "#" },
  { label: "Channels", href: "#" },
  { label: "Topics", href: "#" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="w-full border-b-2 border-foreground bg-background">
      <div className="mx-auto flex max-w-7xl items-stretch justify-between px-6">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 -ml-6 self-stretch" aria-label="Repurposa home">
          <div className="flex items-center justify-center border-x-2 border-foreground px-4 py-3 gap-2.5">
            <Image src="/logo.svg" alt="Repurposa logo" width={36} height={36} />
            <span className="text-lg font-extrabold tracking-wider text-foreground font-mono uppercase">
              Repurposa
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
        <div className="hidden items-center md:flex -mr-6 self-stretch">
          <button
            className="flex w-14 items-center justify-center border-x-2 border-foreground text-foreground hover:bg-muted transition-colors self-stretch"
            aria-label="Favorites"
          >
            <Heart className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <button
            className="flex w-14 items-center justify-center border-r-2 border-foreground text-foreground hover:bg-muted transition-colors self-stretch"
            aria-label="Search"
          >
            <Search className="h-5 w-5" strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex w-12 items-center justify-center border-x-2 border-foreground text-foreground -mr-6 self-stretch py-3 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" strokeWidth={2.5} /> : <Menu className="h-6 w-6" strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="border-t-2 border-foreground px-6 pb-5 pt-4 md:hidden">
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
            <div className="flex pt-2 border-2 border-foreground w-fit">
              <button
                className="flex h-11 w-11 items-center justify-center border-r-2 border-foreground text-foreground"
                aria-label="Favorites"
              >
                <Heart className="h-5 w-5" strokeWidth={2.5} />
              </button>
              <button
                className="flex h-11 w-11 items-center justify-center text-foreground"
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
