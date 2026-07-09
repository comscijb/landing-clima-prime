import { Button, Heading, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router"

import { PageShell } from "@/components/layout/PageShell"
import { routes } from "@/lib/routes"

export function NotFoundPage() {
  return (
    <PageShell>
      <VStack align="start" gap="4">
        <Heading as="h1" size="lg">
          Pagina não encontrada
        </Heading>
        <Text color="fg.muted">O caminho solicitado não existe.</Text>
        <Button asChild colorPalette="blue" variant="outline">
          <Link to={routes.home}>Voltar ao início</Link>
        </Button>
      </VStack>
    </PageShell>
  )
}
