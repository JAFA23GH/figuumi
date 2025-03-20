"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

type UserRole = "veterinarian" | "clinic"

interface LoginCredentials {
  username: string
  password: string
}

// Datos de ejemplo para simular usuarios en la base de datos
const MOCK_USERS = [
  {
    id: "1",
    username: "vet",
    password: "password",
    role: "veterinarian",
    name: "Ricardo",
    surname: "González",
    email: "ricardo@example.com",
    profileImage: "/placeholder.svg?height=96&width=96",
    specialty: "Medicina General",
    servicesOffered: ["Consulta general", "Vacunación"],
    workingHours: "Día completo (8:00 - 17:00)",
  },
  {
    id: "2",
    username: "clinic",
    password: "password",
    role: "clinic",
    clinicName: "Clínica Veterinaria Figuumi",
    email: "info@clinicafiguumi.com",
    profileImage: "/placeholder.svg?height=96&width=96",
    phone: "+58 555 5555",
    address: "Calle Principal 123, Caracas",
    specializedPersonnel: [
      {
        name: "Ana Martínez",
        specialty: "Cirugía",
        servicesOffered: ["Cirugía general", "Cirugía ortopédica"],
        workingHours: "Mañana (8:00 - 12:00)",
      },
      {
        name: "Carlos Rodríguez",
        specialty: "Dermatología",
        servicesOffered: ["Consulta dermatológica", "Tratamientos cutáneos"],
        workingHours: "Tarde (13:00 - 17:00)",
      },
    ],
  },
]

export async function login(formData: FormData) {
  const username = formData.get("username") as string
  const password = formData.get("password") as string

  // Validación básica
  if (!username || !password) {
    return { error: "Usuario y contraseña son requeridos" }
  }

  // Buscar usuario en nuestros datos de ejemplo
  const user = MOCK_USERS.find((u) => u.username === username && u.password === password)

  if (!user) {
    return { error: "Credenciales inválidas" }
  }

  // Guardar información del usuario en cookies
  const cookieStore = cookies()
  cookieStore.set("userId", user.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 semana
    path: "/",
  })

  cookieStore.set("userRole", user.role, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 semana
    path: "/",
  })

  // Redirigir al dashboard
  redirect("/dashboard")
}

export async function logout() {
  const cookieStore = cookies()
  cookieStore.delete("userId")
  cookieStore.delete("userRole")
  redirect("/")
}

export async function getUserRole(): Promise<UserRole | null> {
  const cookieStore = cookies()
  const role = cookieStore.get("userRole")?.value as UserRole | undefined
  return role || null
}

export async function getCurrentUser() {
  const cookieStore = cookies()
  const userId = cookieStore.get("userId")?.value

  if (!userId) {
    return null
  }

  const user = MOCK_USERS.find((u) => u.id === userId)
  return user || null
}

