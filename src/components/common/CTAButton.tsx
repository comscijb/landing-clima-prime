import type { ReactNode } from "react"

import { Button } from "@chakra-ui/react"

type CTAButtonProps = {
  children: ReactNode
  href: string
  variant?: "whatsapp" | "primary" | "outline"
  external?: boolean
  fullOnMobile?: boolean
}

const variants = {
  whatsapp: {
    bg: "cta.whatsapp",
    color: "fg",
    _hover: { bg: "cta.whatsappHover" },
    borderColor: "transparent",
  },
  primary: {
    bg: "cta.solid",
    color: "cta.contrast",
    _hover: { bg: "cta.hover" },
    borderColor: "transparent",
  },
  outline: {
    bg: "transparent",
    color: "fg",
    _hover: { bg: "brand.subtle", borderColor: "border.brandSoft" },
    borderColor: "border",
  },
} as const

export function CTAButton({
  children,
  href,
  variant = "primary",
  external = false,
  fullOnMobile = false,
}: CTAButtonProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noreferrer" }
    : {}

  return (
    <Button
      asChild
      borderWidth="1px"
      borderRadius="pill"
      fontWeight="700"
      minH="11"
      px="5"
      w={fullOnMobile ? { base: "full", sm: "auto" } : "auto"}
      {...variants[variant]}
    >
      <a className={fullOnMobile ? "mobile-full-cta" : undefined} href={href} {...externalProps}>
        {children}
      </a>
    </Button>
  )
}
