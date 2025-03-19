"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Trash2 } from "lucide-react"
import { useState } from "react"

export function VeterinarianSettings({ user }: { user: any }) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSaveChanges = () => {
    setIsLoading(true)

    // Simulamos una petición al servidor
    setTimeout(() => {
      setIsLoading(false)
      toast({
        variant: "success",
        title: "Cambios guardados",
        description: "Los cambios han sido guardados correctamente.",
      })
    }, 1000)
  }

  const handleChangePhoto = () => {
    toast({
      title: "Foto actualizada",
      description: "La foto de perfil ha sido actualizada correctamente.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Información Personal</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Foto de perfil</Label>
          <div className="flex items-center gap-2">
            <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src={user.profileImage || "/placeholder.svg?height=64&width=64"}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <Button type="button" className="bg-primary hover:bg-primary-600" onClick={handleChangePhoto}>
              Cambiar foto
            </Button>
            <Button type="button" variant="ghost" size="icon">
              <Trash2 className="h-5 w-5 text-gray-500" />
              <span className="sr-only">Remove photo</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre</Label>
            <Input id="nombre" defaultValue={user.name} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="apellido">Apellido</Label>
            <Input id="apellido" defaultValue={user.surname || ""} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input id="email" type="email" defaultValue={user.email} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono de contacto</Label>
          <Input id="telefono" defaultValue={user.phone || ""} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="especialidad">Especialidad</Label>
          <Select defaultValue={user.specialty || "general"}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar especialidad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">Medicina General</SelectItem>
              <SelectItem value="surgery">Cirugía</SelectItem>
              <SelectItem value="dermatology">Dermatología</SelectItem>
              <SelectItem value="cardiology">Cardiología</SelectItem>
              <SelectItem value="neurology">Neurología</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="servicios">Servicios ofrecidos</Label>
          <Select defaultValue={user.servicesOffered?.[0] || "consultation"}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar servicios" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="consultation">Consulta general</SelectItem>
              <SelectItem value="vaccination">Vacunación</SelectItem>
              <SelectItem value="surgery">Cirugía</SelectItem>
              <SelectItem value="dental">Cuidado dental</SelectItem>
              <SelectItem value="emergency">Emergencias</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="horario">Horario de atención</Label>
          <Select defaultValue={user.workingHours || "fullday"}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar horario" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Mañana (8:00 - 12:00)</SelectItem>
              <SelectItem value="afternoon">Tarde (13:00 - 17:00)</SelectItem>
              <SelectItem value="evening">Noche (18:00 - 22:00)</SelectItem>
              <SelectItem value="fullday">Día completo (8:00 - 17:00)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Biografía</Label>
          <Textarea
            id="bio"
            rows={4}
            defaultValue="Veterinario con más de 10 años de experiencia en medicina general y cirugía de pequeños animales."
          />
        </div>

        <Button className="bg-primary hover:bg-primary-600" onClick={handleSaveChanges} disabled={isLoading}>
          {isLoading ? "Guardando..." : "Guardar cambios"}
        </Button>
      </CardContent>
    </Card>
  )
}

