import type { PropsWithChildren } from "react"

import { Box } from "@chakra-ui/react"

import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"

export function PageShell({ children }: PropsWithChildren) {
  return (
    <Box bg="bg.canvas" color="fg" minH="100svh">
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  )
}
