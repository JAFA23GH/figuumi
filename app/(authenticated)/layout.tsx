import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { getCurrentUser } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()

  // Si no hay usuario autenticado, redirigir al login
  if (!user) {
    redirect("/")
  }

  return (
    <div className="flex h-screen">
      <Sidebar user={user} />
      <div className="flex-1 flex flex-col bg-secondary overflow-auto">
        <main className="flex-1 overflow-auto">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

