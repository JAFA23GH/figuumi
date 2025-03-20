"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getCurrentUser } from "@/lib/auth"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import { VeterinarianSettings } from "./veterinarian-settings"
import { ClinicSettings } from "./clinic-settings"

export default function SettingsPage() {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  // Obtener el usuario actual
  useState(() => {
    async function fetchUser() {
      const userData = await getCurrentUser()
      setUser(userData)
    }
    fetchUser()
  }, [])

  const handleUpdatePassword = () => {
    setIsLoading(true)

    // Simulamos una petición al servidor
    setTimeout(() => {
      setIsLoading(false)
      toast({
        variant: "success",
        title: "Contraseña actualizada",
        description: "Su contraseña ha sido actualizada correctamente.",
      })
    }, 1000)
  }

  if (!user) {
    return <div className="p-6">Cargando...</div>
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Configuración</h1>

      {user?.role === "veterinarian" ? <VeterinarianSettings user={user} /> : <ClinicSettings user={user} />}

      <Card>
        <CardHeader>
          <CardTitle>Cambiar contraseña</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Contraseña actual</Label>
            <Input id="currentPassword" type="password" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="newPassword">Nueva contraseña</Label>
            <Input id="newPassword" type="password" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar nueva contraseña</Label>
            <Input id="confirmPassword" type="password" />
          </div>

          <Button className="bg-primary hover:bg-primary-600" onClick={handleUpdatePassword} disabled={isLoading}>
            {isLoading ? "Actualizando..." : "Actualizar contraseña"}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

