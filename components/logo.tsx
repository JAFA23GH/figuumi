import Link from "next/link"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-3SO2y6y6Td77i50N4LZqNSpFbWrCyw.png"
        alt="Figuumi Logo"
        className="h-12"
      />
    </Link>
  )
}

