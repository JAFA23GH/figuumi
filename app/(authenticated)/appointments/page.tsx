"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"
import { CheckSquare, ArrowLeft } from "lucide-react"
import { getCurrentUser } from "@/lib/auth"
import { useEffect } from "react"

// Datos de ejemplo para veterinarios
const mockVeterinarians = [
  {
    id: "1",
    name: "Ana Martínez",
    specialty: "Cirugía",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: "2",
    name: "Carlos Rodríguez",
    specialty: "Dermatología",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: "3",
    name: "Laura Sánchez",
    specialty: "Medicina General",
    image: "/placeholder.svg?height=48&width=48",
  },
]

// Datos de ejemplo para citas
const mockAppointmentsByVet = {
  "1": [
    {
      id: "101",
      clientName: "Kelly",
      clientImage: "/placeholder.svg?height=48&width=48",
      date: new Date(),
      status: "completed",
      petName: "Max",
      petType: "Perro",
      notes: "Cirugía de esterilización programada.",
    },
    {
      id: "102",
      clientName: "Juan",
      clientImage: "/placeholder.svg?height=48&width=48",
      date: new Date(),
      status: "pending",
      petName: "Luna",
      petType: "Gato",
      notes: "Revisión post-operatoria.",
    },
  ],
  "2": [
    {
      id: "201",
      clientName: "María",
      clientImage: "/placeholder.svg?height=48&width=48",
      date: new Date(),
      status: "completed",
      petName: "Rocky",
      petType: "Perro",
      notes: "Tratamiento para dermatitis.",
    },
    {
      id: "202",
      clientName: "Pedro",
      clientImage: "/placeholder.svg?height=48&width=48",
      date: new Date(),
      status: "pending",
      petName: "Mimi",
      petType: "Gato",
      notes: "Alergia en la piel, seguimiento.",
    },
    {
      id: "203",
      clientName: "Lucía",
      clientImage: "/placeholder.svg?height=48&width=48",
      date: new Date(),
      status: "pending",
      petName: "Toby",
      petType: "Perro",
      notes: "Problemas de piel recurrentes.",
    },
  ],
  "3": [
    {
      id: "301",
      clientName: "Roberto",
      clientImage: "/placeholder.svg?height=48&width=48",
      date: new Date(),
      status: "completed",
      petName: "Pelusa",
      petType: "Gato",
      notes: "Vacunación anual.",
    },
  ],
}

export default function AppointmentsPage() {
  const [user, setUser] = useState<any>(null)
  const [selectedVet, setSelectedVet] = useState<string | null>(null)
  const [appointments, setAppointments] = useState<any[]>([])

  useEffect(() => {
    async function fetchUser() {
      const userData = await getCurrentUser()
      setUser(userData)
    }
    fetchUser()
  }, [])

  useEffect(() => {
    if (selectedVet) {
      setAppointments(mockAppointmentsByVet[selectedVet] || [])
    }
  }, [selectedVet])

  const handleSelectVet = (vetId: string) => {
    setSelectedVet(vetId)
  }

  const handleBackToVets = () => {
    setSelectedVet(null)
  }

  // Si el usuario es un veterinario, mostrar directamente sus citas
  if (user?.role === "veterinarian") {
    const vetAppointments = [
      {
        id: "1",
        clientName: "Kelly",
        clientImage: "/placeholder.svg?height=48&width=48",
        date: new Date(),
        status: "completed",
        petName: "Max",
        petType: "Perro",
        notes: "Consulta general y vacunación.",
      },
      {
        id: "2",
        clientName: "Carlos",
        clientImage: "/placeholder.svg?height=48&width=48",
        date: new Date(),
        status: "pending",
        petName: "Luna",
        petType: "Gato",
        notes: "Revisión por problemas digestivos.",
      },
      {
        id: "3",
        clientName: "María",
        clientImage: "/placeholder.svg?height=48&width=48",
        date: new Date(),
        status: "pending",
        petName: "Rocky",
        petType: "Perro",
        notes: "Vacunación anual.",
      },
    ]

    return (
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Mis Citas</h1>
          <div className="text-sm text-gray-500">{vetAppointments.length} resultados</div>
        </div>

        <Card>
          <CardContent className="p-0">
            {vetAppointments.map((appointment) => (
              <div key={appointment.id} className="border-b border-gray-100 last:border-0">
                <div className="flex items-start gap-4 p-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={appointment.clientImage || "/placeholder.svg"}
                      alt={appointment.clientName}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{appointment.clientName}</h3>
                    <p className="text-sm text-gray-500">
                      {appointment.petName} ({appointment.petType})
                    </p>
                    <p className="text-gray-600">{appointment.notes}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckSquare className="h-5 w-5 text-primary" />
                    <span className="text-primary font-medium">
                      {appointment.status === "completed" ? "Atendida" : "Pendiente"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    )
  }

  // Si el usuario es una clínica
  return (
    <div className="p-6 space-y-6">
      {selectedVet ? (
        // Vista de citas del veterinario seleccionado
        <>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="flex items-center gap-1" onClick={handleBackToVets}>
                <ArrowLeft className="h-4 w-4" />
                <span>Volver</span>
              </Button>
              <h1 className="text-3xl font-bold text-gray-800">
                Citas de {mockVeterinarians.find((v) => v.id === selectedVet)?.name}
              </h1>
            </div>
            <div className="text-sm text-gray-500">{appointments.length} resultados</div>
          </div>

          <Card>
            <CardContent className="p-0">
              {appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <div key={appointment.id} className="border-b border-gray-100 last:border-0">
                    <div className="flex items-start gap-4 p-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={appointment.clientImage || "/placeholder.svg"}
                          alt={appointment.clientName}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{appointment.clientName}</h3>
                        <p className="text-sm text-gray-500">
                          {appointment.petName} ({appointment.petType})
                        </p>
                        <p className="text-gray-600">{appointment.notes}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckSquare className="h-5 w-5 text-primary" />
                        <span className="text-primary font-medium">
                          {appointment.status === "completed" ? "Atendida" : "Pendiente"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center text-gray-500">No hay citas para este veterinario</div>
              )}
            </CardContent>
          </Card>

          {appointments.length > 0 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      ) : (
        // Vista de listado de veterinarios
        <>
          <h1 className="text-3xl font-bold text-gray-800">Veterinarios</h1>
          <p className="text-gray-600">Seleccione un veterinario para ver sus citas</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockVeterinarians.map((vet) => (
              <Card
                key={vet.id}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleSelectVet(vet.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={vet.image || "/placeholder.svg"}
                        alt={vet.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{vet.name}</h3>
                      <p className="text-gray-600">{vet.specialty}</p>
                      <p className="text-sm text-primary mt-2">{mockAppointmentsByVet[vet.id]?.length || 0} citas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

