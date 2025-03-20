"use client"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/lib/auth"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false)
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("")
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    setError(null)

    try {
      const result = await login(formData)
      if (result?.error) {
        setError(result.error)
      }
    } catch (err) {
      setError("Ocurrió un error al iniciar sesión")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  function handleForgotPassword() {
    setForgotPasswordOpen(false)
    toast({
      variant: "success",
      title: "Correo enviado",
      description: "Se ha enviado un enlace de recuperación a su correo electrónico.",
    })
  }

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-secondary rounded-lg p-8 flex flex-col items-center">
        <Logo className="mb-8" />

        <form action={handleSubmit} className="w-full space-y-6">
          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>}

          <div className="space-y-2">
            <Label htmlFor="username">Usuario</Label>
            <Input
              id="username"
              name="username"
              placeholder="Ingrese usuario"
              className="bg-white"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Ingrese contraseña"
              className="bg-white"
              disabled={isLoading}
            />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary-600" disabled={isLoading}>
            {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
          </Button>
        </form>

        <div className="mt-4 text-center space-y-2">
          <button onClick={() => setForgotPasswordOpen(true)} className="text-primary-700 hover:underline block">
            ¿Olvidó su contraseña?
          </button>
          <Link href="/register" className="text-primary-700 hover:underline block">
            Registrarse
          </Link>
        </div>

        <div className="mt-6 text-sm text-gray-600 border-t border-gray-200 pt-4 w-full text-center">
          <p>Usuarios de prueba:</p>
          <p className="mt-2">
            <strong>Veterinario:</strong> usuario: vet, contraseña: password
          </p>
          <p>
            <strong>Clínica:</strong> usuario: clinic, contraseña: password
          </p>
        </div>
      </div>

      <Dialog open={forgotPasswordOpen} onOpenChange={setForgotPasswordOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Recuperar contraseña</DialogTitle>
            <DialogDescription>Ingrese su correo electrónico para recibir un enlace de recuperación.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="Ingrese su correo electrónico"
                value={forgotPasswordEmail}
                onChange={(e) => setForgotPasswordEmail(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setForgotPasswordOpen(false)}>
              Cancelar
            </Button>
            <Button type="button" className="bg-primary hover:bg-primary-600" onClick={handleForgotPassword}>
              Enviar enlace
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

