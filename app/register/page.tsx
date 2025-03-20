import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-secondary rounded-lg p-8 flex flex-col items-center">
        <div className="w-full flex justify-start mb-4">
          <Link href="/">
            <Button variant="ghost" className="text-primary-700 hover:bg-primary-50 flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio de sesión
            </Button>
          </Link>
        </div>

        <Logo className="mb-8" />

        <h1 className="text-3xl font-bold text-gray-800 mb-8">Registrarse</h1>

        <p className="text-lg text-gray-700 mb-8">¿Eres Clínica veterinaria o veterinario?</p>

        <div className="w-full flex flex-col sm:flex-row gap-4">
          <Link href="/register/veterinarian" className="flex-1">
            <Button className="w-full h-14 text-lg bg-primary hover:bg-primary-600">Veterinario</Button>
          </Link>

          <Link href="/register/clinic" className="flex-1">
            <Button className="w-full h-14 text-lg bg-primary hover:bg-primary-600">Clínica Veterinaria</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

