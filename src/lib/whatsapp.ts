export const WHATSAPP_NUMBER = "5500000000000"
export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá, gostaria de solicitar um orçamento para ar-condicionado."

export function getWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE): string {
  const sanitizedNumber = WHATSAPP_NUMBER.replace(/\D/g, "")
  const encodedMessage = encodeURIComponent(message)

  return `https://wa.me/${sanitizedNumber}?text=${encodedMessage}`
}
