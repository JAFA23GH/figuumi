import { Card, CardContent } from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { CheckSquare } from "lucide-react"

export default function AppointmentsPage() {
  // Mock data for appointments
  const appointments = [
    {
      id: "1",
      clientName: "Kelly",
      clientImage: "/placeholder.svg?height=48&width=48",
      date: new Date(),
      status: "completed",
      notes:
        "tiam vel enim at quam congue volutpat. Aliquam ullamcorper efficitur dapibus. Morbi varius massa eu massa rhoncus scelerisque.",
    },
    {
      id: "2",
      clientName: "Kelly",
      clientImage: "/placeholder.svg?height=48&width=48",
      date: new Date(),
      status: "completed",
      notes:
        "tiam vel enim at quam congue volutpat. Aliquam ullamcorper efficitur dapibus. Morbi varius massa eu massa rhoncus scelerisque.",
    },
    {
      id: "3",
      clientName: "Kelly",
      clientImage: "/placeholder.svg?height=48&width=48",
      date: new Date(),
      status: "completed",
      notes:
        "tiam vel enim at quam congue volutpat. Aliquam ullamcorper efficitur dapibus. Morbi varius massa eu massa rhoncus scelerisque.",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Citas</h1>
        <div className="text-sm text-gray-500">27 resultados</div>
      </div>

      <Card>
        <CardContent className="p-0">
          {appointments.map((appointment, index) => (
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
                  <p className="text-gray-600">{appointment.notes}</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="h-5 w-5 text-primary" />
                  <span className="text-primary font-medium">Atendida</span>
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
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">9</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

