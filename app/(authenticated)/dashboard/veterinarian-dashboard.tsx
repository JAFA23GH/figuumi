import { Card, CardContent } from "@/components/ui/card"

export function VeterinarianDashboard({ user }: { user: any }) {
  return (
    <>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Comentarios</h2>
        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                <img src="/images/male2.jpg?height=48&width=48" alt="Ricardo" className="h-full w-full object-cover" />
              </div>
              <div>
                <h3 className="font-medium">Alberto</h3>
                <p className="text-gray-600">
                  Fue nuestra primera visita, pero quedamos impresionados con lo bien que trataron a nuestro conejo. Muy atentos y con un enfoque personalizado. ¡Lo recomiendo al 100%!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                <img src="/images/female7.jpg?height=48&width=48" alt="Marlene" className="h-full w-full object-cover" />
              </div>
              <div>
                <h3 className="font-medium">Marlene</h3>
                <p className="text-gray-600">
                  No solo es excelente en lo que hace, sino que también tiene muchísima empatía con los dueños. Nos ayudó a entender mejor las necesidades de salud de nuestro perro. ¡Totalmente encantados!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                <img src="/images/male6.jpg?height=48&width=48" alt="Jorge" className="h-full w-full object-cover" />
              </div>
              <div>
                <h3 className="font-medium">Jorge</h3>
                <p className="text-gray-600">
                  Cuando pensé que todo estaba perdido, el veterinario nos dio esperanza. Su paciencia y conocimientos hicieron una gran diferencia. Sin duda volveremos siempre con él.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Valoraciones</h2>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="h-6 w-6 fill-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
          <span className="text-xl font-bold ml-2">5</span>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Próximas citas</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-primary-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <img
                      src="/images/female1.jpg?height=40&width=40"
                      alt="Cliente"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">María López</h3>
                    <p className="text-sm text-gray-500">Consulta para Max (Perro)</p>
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
                      src="/images/male1.jpg?height=40&width=40"
                      alt="Cliente"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Carlos Ruiz</h3>
                    <p className="text-sm text-gray-500">Vacunación para Luna (Gato)</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">Mañana</p>
                  <p className="text-sm text-gray-500">10:00</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

