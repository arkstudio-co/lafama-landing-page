import { MessageCircle } from "lucide-react"
import { business } from "@/data/business"

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${business.contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={36} />
    </a>
  )
}
