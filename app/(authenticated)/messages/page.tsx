"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ConversationDialog } from "@/components/conversation-dialog"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

// Datos de ejemplo para mensajes
const mockMessages = [
  {
    id: "1",
    contactId: "101",
    senderName: "Kelly",
    senderImage: "/images/female3.jpg?height=48&width=48",
    content: "Hola, quisiera agendar una cita para mi perro Max. ¿Tienen disponibilidad para el próximo martes?",
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutos atrás
    read: false,
  },
  {
    id: "2",
    contactId: "102",
    senderName: "Carlos",
    senderImage: "/images/male1.jpg?height=48&width=48",
    content: "Buenas tardes, necesito saber si tienen disponible la vacuna antirrábica para mi gato.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 horas atrás
    read: false,
  },
  {
    id: "3",
    contactId: "103",
    senderName: "María",
    senderImage: "/images/female5.jpg?height=48&width=48",
    content: "¿Podrían recomendarme algún alimento especial para mi perro con problemas digestivos?",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 día atrás
    read: true,
  },
]

// Datos de ejemplo para conversaciones
const mockConversations = {
  "101": [
    {
      id: "1001",
      content: "Hola, quisiera agendar una cita para mi perro Max. ¿Tienen disponibilidad para el próximo martes?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 días atrás
      isOutgoing: false,
      senderName: "Kelly",
      senderImage: "/placeholder.svg?height=48&width=48",
    },
    {
      id: "1002",
      content: "Hola Kelly, sí tenemos disponibilidad el martes. ¿Te parece bien a las 10:00 am?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 30), // 2 días atrás + 30 minutos
      isOutgoing: true,
      senderName: "Tú",
    },
    {
      id: "1003",
      content: "Perfecto, me viene bien a las 10:00 am. ¿Necesito llevar algo en particular?",
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutos atrás
      isOutgoing: false,
      senderName: "Kelly",
      senderImage: "/placeholder.svg?height=48&width=48",
    },
  ],
  "102": [
    {
      id: "2001",
      content: "Buenas tardes, necesito saber si tienen disponible la vacuna antirrábica para mi gato.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 horas atrás
      isOutgoing: false,
      senderName: "Carlos",
      senderImage: "/placeholder.svg?height=48&width=48",
    },
  ],
  "103": [
    {
      id: "3001",
      content: "¿Podrían recomendarme algún alimento especial para mi perro con problemas digestivos?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 día atrás
      isOutgoing: false,
      senderName: "María",
      senderImage: "/placeholder.svg?height=48&width=48",
    },
    {
      id: "3002",
      content:
        "Hola María, te recomendaría una dieta específica para problemas digestivos. ¿Qué raza es tu perro y qué edad tiene?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 23), // 23 horas atrás
      isOutgoing: true,
      senderName: "Tú",
    },
  ],
}

export default function MessagesPage() {
  const [selectedContact, setSelectedContact] = useState<{
    id: string
    name: string
    image?: string
  } | null>(null)

  const [readMessages, setReadMessages] = useState<string[]>([])

  const handleOpenConversation = (message: any) => {
    setSelectedContact({
      id: message.contactId,
      name: message.senderName,
      image: message.senderImage,
    })

    // Marcar el mensaje como leído
    if (!readMessages.includes(message.id)) {
      setReadMessages([...readMessages, message.id])
    }
  }

  const formatTime = (date: Date) => {
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffDays === 0) {
      return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    } else if (diffDays === 1) {
      return "Ayer"
    } else {
      return date.toLocaleDateString()
    }
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Mensajes</h1>

      <Card>
        <CardContent className="p-0">
          {mockMessages.map((message) => (
            <div
              key={message.id}
              className="border-b border-gray-100 last:border-0 hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={() => handleOpenConversation(message)}
            >
              <div className="flex items-start gap-4 p-4">
                <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={message.senderImage || "/placeholder.svg"}
                    alt={message.senderName}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-medium">{message.senderName}</h3>
                    <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                  </div>
                  <p
                    className={`text-gray-600 ${!readMessages.includes(message.id) && !message.read ? "font-medium" : ""}`}
                  >
                    {message.content.length > 100 ? `${message.content.substring(0, 100)}...` : message.content}
                  </p>
                </div>
                {!readMessages.includes(message.id) && !message.read && (
                  <Badge className="bg-primary text-white">Nuevo</Badge>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {selectedContact && (
        <ConversationDialog
          open={!!selectedContact}
          onOpenChange={(open) => {
            if (!open) setSelectedContact(null)
          }}
          contact={selectedContact}
          initialMessages={mockConversations[selectedContact.id] || []}
        />
      )}
    </div>
  )
}

