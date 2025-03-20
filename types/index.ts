export type UserRole = "clinic" | "veterinarian"

export interface User {
  id: string
  email: string
  role: UserRole
  name: string
  profileImage?: string
}

export interface Clinic extends User {
  role: "clinic"
  clinicName: string
  phone: string
  address?: string
  specializedPersonnel: VeterinarianInfo[]
}

export interface Veterinarian extends User {
  role: "veterinarian"
  surname: string
  phone: string
  specialty: string
  servicesOffered: string[]
  workingHours: string
}

export interface VeterinarianInfo {
  name: string
  specialty: string
  servicesOffered: string[]
  workingHours: string
}

export interface Appointment {
  id: string
  clientName: string
  clientImage?: string
  date: Date
  status: "pending" | "completed" | "cancelled"
  petName: string
  petType: string
  notes?: string
}

export interface Message {
  id: string
  senderId: string
  senderName: string
  senderImage?: string
  content: string
  timestamp: Date
  read: boolean
}

export interface Testimonial {
  id: string
  clientName: string
  clientImage?: string
  content: string
  rating: number
}

export interface DashboardStats {
  appointmentsToday: number
  pendingAppointments: number
  completedAppointments: number
  rating: number
}

