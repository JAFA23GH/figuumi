import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getCurrentUser } from "@/lib/auth"
import { Calendar, CheckSquare, Clock } from "lucide-react"
import { VeterinarianDashboard } from "./veterinarian-dashboard"
import { ClinicDashboard } from "./clinic-dashboard"

export default async function DashboardPage() {
  const user = await getCurrentUser()

  // Estadísticas comunes para ambos tipos de usuarios
  const stats = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Citas para hoy</CardTitle>
          <Calendar className="h-5 w-5 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">24</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Citas pendientes</CardTitle>
          <Clock className="h-5 w-5 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">24</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Citas atendidas</CardTitle>
          <CheckSquare className="h-5 w-5 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">24</div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Inicio</h1>

      {stats}

      {user?.role === "veterinarian" ? <VeterinarianDashboard user={user} /> : <ClinicDashboard user={user} />}
    </div>
  )
}

