"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { logout } from "@/lib/auth"
import { Home, Calendar, MessageSquare, Settings, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

interface SidebarProps {
  user: any // Usamos any para simplificar, pero idealmente deberíamos usar tipos específicos
}

export function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname()
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false)

  const links = [
    { href: "/dashboard", label: "Inicio", icon: Home },
    { href: "/appointments", label: "Citas", icon: Calendar },
    { href: "/messages", label: "Mensajes", icon: MessageSquare },
    { href: "/settings", label: "Configuración", icon: Settings },
  ]

  // Determinar el nombre a mostrar según el tipo de usuario
  const displayName = user.role === "clinic" ? user.clinicName : `Dr. ${user.name} ${user.surname || ""}`

  return (
    <div className="h-screen w-64 bg-primary flex flex-col flex-shrink-0">
      <div className="p-4 flex flex-col items-center">
        <div className="h-24 w-24 rounded-full bg-white overflow-hidden mb-2">
          {user.profileImage ? (
            <img
              src={user.profileImage || "/placeholder.svg"}
              alt={displayName}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-primary-200 text-primary-700 text-2xl font-bold">
              {user.role === "clinic" ? user.clinicName.charAt(0) : user.name.charAt(0)}
            </div>
          )}
        </div>
        <h2 className="text-white font-medium text-center">{displayName}</h2>
      </div>

      <nav className="flex-1 mt-6">
        <ul className="space-y-1">
          {links.map((link) => {
            const isActive = pathname === link.href

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center px-4 py-3 text-white hover:bg-primary-600 ${
                    isActive ? "bg-primary-700" : ""
                  }`}
                >
                  <link.icon className="h-5 w-5 mr-3" />
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="p-4">
        <Dialog open={logoutDialogOpen} onOpenChange={setLogoutDialogOpen}>
          <DialogTrigger asChild>
            <Button className="w-full bg-white text-primary hover:bg-gray-100 flex items-center gap-2 border-2 border-white">
              <LogOut className="h-5 w-5" />
              Cerrar Sesión
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle className="text-center text-xl">¿Estás seguro de que quieres cerrar sesión?</DialogTitle>
            </DialogHeader>
            <DialogFooter className="flex flex-row justify-between gap-4 sm:justify-between">
              <Button variant="outline" className="flex-1" onClick={() => setLogoutDialogOpen(false)}>
                No cerrar
              </Button>
              <form action={logout} className="flex-1">
                <Button type="submit" className="w-full bg-primary hover:bg-primary-600">
                  Aceptar
                </Button>
              </form>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

