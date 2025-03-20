"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Send } from "lucide-react"
import { useState } from "react"

interface Message {
  id: string
  content: string
  timestamp: Date
  isOutgoing: boolean
  senderName: string
  senderImage?: string
}

interface ConversationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  contact: {
    id: string
    name: string
    image?: string
  }
  initialMessages: Message[]
}

export function ConversationDialog({ open, onOpenChange, contact, initialMessages }: ConversationDialogProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const { toast } = useToast()

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    setIsSending(true)

    // Simulamos el envío del mensaje
    setTimeout(() => {
      const message: Message = {
        id: Date.now().toString(),
        content: newMessage,
        timestamp: new Date(),
        isOutgoing: true,
        senderName: "Tú",
        senderImage: "/placeholder.svg?height=40&width=40",
      }

      setMessages([...messages, message])
      setNewMessage("")
      setIsSending(false)

      // Simulamos una respuesta automática después de un tiempo
      setTimeout(() => {
        const response: Message = {
          id: (Date.now() + 1).toString(),
          content: "Gracias por tu mensaje. Te responderé lo antes posible.",
          timestamp: new Date(),
          isOutgoing: false,
          senderName: contact.name,
          senderImage: contact.image,
        }

        setMessages((prev) => [...prev, response])
      }, 2000)
    }, 1000)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] h-[80vh] flex flex-col p-0">
        <DialogHeader className="p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img
                src={contact.image || "/placeholder.svg?height=40&width=40"}
                alt={contact.name}
                className="h-full w-full object-cover"
              />
            </div>
            <DialogTitle>{contact.name}</DialogTitle>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => {
            // Determinar si debemos mostrar la fecha
            const showDate = index === 0 || formatDate(messages[index - 1].timestamp) !== formatDate(message.timestamp)

            return (
              <div key={message.id}>
                {showDate && (
                  <div className="text-center text-xs text-gray-500 my-2">{formatDate(message.timestamp)}</div>
                )}
                <div className={`flex ${message.isOutgoing ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isOutgoing ? "bg-primary text-white" : "bg-gray-100"
                    }`}
                  >
                    {!message.isOutgoing && <div className="font-medium text-sm mb-1">{message.senderName}</div>}
                    <div>{message.content}</div>
                    <div
                      className={`text-xs mt-1 text-right ${message.isOutgoing ? "text-primary-100" : "text-gray-500"}`}
                    >
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Textarea
              placeholder="Escribe un mensaje..."
              className="resize-none"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
            />
            <Button
              className="bg-primary hover:bg-primary-600"
              size="icon"
              onClick={handleSendMessage}
              disabled={isSending || !newMessage.trim()}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Enviar mensaje</span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

