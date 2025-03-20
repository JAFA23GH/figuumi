"use client"

import type React from "react"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Trash2 } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function VeterinarianRegistrationPage() {
  const { toast } = useToast()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulamos una petición al servidor
    setTimeout(() => {
      setIsLoading(false)
      toast({
        variant: "success",
        title: "Registro exitoso",
        description: "Su cuenta ha sido creada correctamente. Ahora puede iniciar sesión.",
      })

      // Redirigir al login después de un breve retraso
      setTimeout(() => {
        router.push("/")
      }, 2000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-secondary rounded-lg p-8">
        <div className="w-full flex justify-start mb-4">
          <Link href="/register">
            <Button variant="ghost" className="text-primary-700 hover:bg-primary-50 flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver
            </Button>
          </Link>
        </div>

        <div className="flex flex-col items-center mb-6">
          <Logo />
          <h1 className="text-2xl font-bold text-gray-800 mt-4">Registrarse</h1>
          <p className="text-sm text-gray-600">Veterinario</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* El resto del formulario permanece igual */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre:</Label>
              <Input id="nombre" className="bg-white" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="apellido">Apellido:</Label>
              <Input id="apellido" className="bg-white" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico:</Label>
            <Input id="email" type="email" className="bg-white" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefono">Teléfono de contacto</Label>
            <div className="relative">
              <Input id="telefono" className="bg-white pr-10" required />
              <Button type="button" variant="ghost" size="icon" className="absolute right-1 top-1">
                <span className="sr-only">Add phone</span>
                <span className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center">+</span>
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Foto de perfil</Label>
            <div className="flex items-center gap-2">
              <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img src="/placeholder.svg?height=64&width=64" alt="Profile" className="h-full w-full object-cover" />
              </div>
              <Button type="button" className="bg-primary hover:bg-primary-600">
                Seleccionar foto
              </Button>
              <Button type="button" variant="ghost" size="icon">
                <Trash2 className="h-5 w-5 text-gray-500" />
                <span className="sr-only">Remove photo</span>
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="especialidad">Especialidad</Label>
            <Select required>
              <SelectTrigger className="bg-white">
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
            <Select required>
              <SelectTrigger className="bg-white">
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
            <Select required>
              <SelectTrigger className="bg-white">
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

          <div className="border-t border-gray-200 my-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="usuario">Usuario</Label>
              <Input id="usuario" className="bg-white" required />
            </div>

            <div className="space-y-2 mt-4">
              <Label htmlFor="contrasena">Contraseña</Label>
              <Input id="contrasena" type="password" className="bg-white" required />
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary-600" disabled={isLoading}>
            {isLoading ? "Registrando..." : "Registrar"}
          </Button>
        </form>
      </div>
    </div>
  )
}

