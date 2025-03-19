import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ClinicDashboard({ user }: { user: any }) {
  return (
    <>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Resumen de la Clínica</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-lg mb-4">Información General</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nombre:</span>
                    <span className="font-medium">{user.clinicName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium">{user.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Teléfono:</span>
                    <span className="font-medium">{user.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dirección:</span>
                    <span className="font-medium">{user.address}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-4">Personal Especializado</h3>
                <div className="space-y-4">
                  {user.specializedPersonnel.map((person: any, index: number) => (
                    <div key={index} className="p-3 bg-primary-50 rounded-lg">
                      <h4 className="font-medium">{person.name}</h4>
                      <p className="text-sm text-gray-600">Especialidad: {person.specialty}</p>
                      <p className="text-sm text-gray-600">Horario: {person.workingHours}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Actividad Reciente</h2>
        <Tabs defaultValue="appointments">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="appointments">Citas</TabsTrigger>
            <TabsTrigger value="reviews">Valoraciones</TabsTrigger>
            <TabsTrigger value="messages">Mensajes</TabsTrigger>
          </TabsList>
          <TabsContent value="appointments" className="mt-4">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center p-3 bg-primary-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Cliente"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">María López</h3>
                      <p className="text-sm text-gray-500">Consulta para Max (Perro) con Dr. Ana Martínez</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Hoy</p>
                    <p className="text-sm text-gray-500">15:30</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-primary-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Cliente"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Carlos Ruiz</h3>
                      <p className="text-sm text-gray-500">Vacunación para Luna (Gato) con Dr. Carlos Rodríguez</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Mañana</p>
                    <p className="text-sm text-gray-500">10:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reviews" className="mt-4">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="/placeholder.svg?height=48&width=48"
                      alt="Ricardo"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium">Ricardo</h3>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="h-4 w-4 fill-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">
                      ¡Excelente servicio! Atendió a mi perro y quedé encantado. Recomiendo mucho sus servicios.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="/placeholder.svg?height=48&width=48"
                      alt="Marlene"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium">Marlene</h3>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="h-4 w-4 fill-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Llevé a mi gata por una emergencia y el veterinario fue muy profesional y amable. Mi gata se recuperó completamente gracias a su dedicación. ¡Muy recomendado!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="messages" className="mt-4">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4 p-3 bg-primary-50 rounded-lg">
                  <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="/placeholder.svg?height=40&width=40" alt="Kelly" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium">Kelly</h3>
                    <p className="text-gray-600">
                      tiam vel enim at quam congue volutpat. Aliquam ullamcorper efficitur dapibus.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Hace 2 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 bg-primary-50 rounded-lg">
                  <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="/placeholder.svg?height=40&width=40" alt="Juan" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium">Juan</h3>
                    <p className="text-gray-600">
                      tiam vel enim at quam congue volutpat. Aliquam ullamcorper efficitur dapibus. Morbi varius massa
                      eu massa rhoncus scelerisque.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Ayer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

