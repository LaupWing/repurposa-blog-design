import Link from "next/link"

export function TopBar() {
  return (
    <div className="w-full bg-primary border-b-2 border-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-8 px-6 py-2.5">
        <Link
          href="#"
          className="text-sm font-semibold text-primary-foreground hover:underline underline-offset-4"
        >
          Sign In
        </Link>
        <Link
          href="#"
          className="text-sm font-semibold text-primary-foreground hover:underline underline-offset-4"
        >
          Join Us
        </Link>
        <Link
          href="#"
          className="text-sm font-semibold text-primary-foreground hover:underline underline-offset-4"
        >
          Help
        </Link>
      </div>
    </div>
  )
}
