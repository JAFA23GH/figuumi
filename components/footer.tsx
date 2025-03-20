import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-primary-700 py-4 px-6 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="h-10">
        <Logo className="w-[75px]" /> 
        </div>
        <p className="text-white text-sm">© 2025 Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

