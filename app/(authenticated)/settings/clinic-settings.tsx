"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Trash2, Plus } from "lucide-react"
import { useState } from "react"

export function ClinicSettings({ user }: { user: any }) {
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
      description: "La foto de la clínica ha sido actualizada correctamente.",
    })
  }

  const handleAddVeterinarian = () => {
    toast({
      title: "Veterinario añadido",
      description: "Se ha añadido un nuevo veterinario a la clínica.",
    })
  }

  const handleRemoveVeterinarian = (index: number) => {
    toast({
      variant: "destructive",
      title: "Veterinario eliminado",
      description: "El veterinario ha sido eliminado de la clínica.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Información de la Clínica</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Foto de la clínica</Label>
          <div className="flex items-center gap-2">
            <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src={user.profileImage || "/placeholder.svg?height=64&width=64"}
                alt="Clinic"
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

        <div className="space-y-2">
          <Label htmlFor="clinicName">Nombre de la Clínica</Label>
          <Input id="clinicName" defaultValue={user.clinicName} />
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
          <Label htmlFor="direccion">Dirección</Label>
          <Input id="direccion" defaultValue={user.address || ""} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="descripcion">Descripción de la clínica</Label>
          <Textarea
            id="descripcion"
            rows={4}
            defaultValue="Clínica veterinaria con servicios completos para el cuidado de mascotas."
          />
        </div>

        <div className="border-t border-gray-200 my-4 pt-4">
          <h3 className="font-medium mb-4">Personal Especializado</h3>

          {user.specializedPersonnel?.map((person: any, index: number) => (
            <div key={index} className="mb-4 p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">Veterinario {index + 1}</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveVeterinarian(index)}
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Eliminar
                </Button>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor={`staff-name-${index}`}>Nombre completo</Label>
                  <Input id={`staff-name-${index}`} defaultValue={person.name} />
                </div>

                <div className="space-y-1">
                  <Label htmlFor={`staff-specialty-${index}`}>Especialidad</Label>
                  <Input id={`staff-specialty-${index}`} defaultValue={person.specialty} />
                </div>

                <div className="space-y-1">
                  <Label htmlFor={`staff-hours-${index}`}>Horario</Label>
                  <Input id={`staff-hours-${index}`} defaultValue={person.workingHours} />
                </div>
              </div>
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center justify-center gap-2 text-primary border-primary hover:bg-primary-50"
            onClick={handleAddVeterinarian}
          >
            <Plus className="h-4 w-4" />
            <span>Añadir nuevo veterinario</span>
          </Button>
        </div>

        <Button className="bg-primary hover:bg-primary-600" onClick={handleSaveChanges} disabled={isLoading}>
          {isLoading ? "Guardando..." : "Guardar cambios"}
        </Button>
      </CardContent>
    </Card>
  )
}

