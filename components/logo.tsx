import Link from "next/link";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        src="/logo.png"  // Ruta desde la carpeta public
        alt="Figuumi Logo"
        width={200}  // Aumenta el ancho
        height={80}  // Aumenta el alto
        className="h-auto w-full"  // Mantiene relación de aspecto
        priority  // Prioriza carga si es el logo principal
      />
    </div>
  );
}