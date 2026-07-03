import { Box, Container, HStack, SimpleGrid, VStack } from "@chakra-ui/react"
import { LuClipboardList, LuMessagesSquare, LuTimer } from "react-icons/lu"

import { CTAButton } from "@/components/common/CTAButton"
import { PlaceholderImage } from "@/components/common/PlaceholderImage"
import { SectionHeader } from "@/components/common/SectionHeader"
import { TrustItem } from "@/components/common/TrustItem"
import { getWhatsAppUrl } from "@/lib/whatsapp"

const benefits = [
  { title: "Planos mensais personalizados", icon: <LuClipboardList /> },
  { title: "Atendimento prioritário", icon: <LuTimer /> },
  { title: "Relatórios de acompanhamento", icon: <LuMessagesSquare /> },
]

export function BusinessSection() {
  return (
    <Box bg="bg.section" id="empresas" py={{ base: "12", md: "20" }}>
      <Container maxW="7xl">
        <SimpleGrid
          alignItems={{ base: "stretch", lg: "center" }}
          bg="bg.card"
          borderColor="border.muted"
          borderRadius="card"
          borderWidth="1px"
          columns={{ base: 1, lg: 2 }}
          gap={{ base: "7", lg: "10" }}
          p={{ base: "5", md: "8" }}
        >
          <PlaceholderImage
            alt="Ambiente comercial climatizado"
            fallbackLabel="Imagem de ambiente comercial"
            src="/images/hero/restaurante.png"
          />
          <VStack align="stretch" gap="6" style={{ width: "100%" }} w="full">
            <SectionHeader
              title="Manutenção para comércios, clínicas, escritórios e restaurantes."
              description="Ambientes comerciais dependem de climatização estável para atender clientes, equipe e pacientes. A manutenção preventiva reduz falhas, melhora o conforto e evita paradas em horários críticos."
            />
            <Box w="full">
              <CTAButton
                href={getWhatsAppUrl("Olá, gostaria de solicitar um orçamento para empresa.")}
                variant="primary"
                external
                fullOnMobile
              >
                Solicitar orçamento para empresa
              </CTAButton>
            </Box>
            <HStack align="start" gap="5" flexWrap="wrap">
              {benefits.map((benefit) => (
                <TrustItem icon={benefit.icon} key={benefit.title} title={benefit.title} />
              ))}
            </HStack>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
