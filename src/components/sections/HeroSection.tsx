import { Box, Container, Flex, Heading, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import {
  LuBadgeCheck,
  LuBuilding2,
  LuMapPin,
  LuShieldCheck,
  LuTimer,
  LuUserCheck,
} from "react-icons/lu"

import { CTAButton } from "@/components/common/CTAButton"
import { PlaceholderImage } from "@/components/common/PlaceholderImage"
import { TrustItem } from "@/components/common/TrustItem"
import { getWhatsAppUrl } from "@/lib/whatsapp"

const trustItems = [
  { title: "Atendimento residencial e comercial", icon: <LuBuilding2 /> },
  { title: "Orçamento rápido", icon: <LuTimer /> },
  { title: "Garantia no serviço", icon: <LuShieldCheck /> },
  { title: "Técnicos especializados", icon: <LuUserCheck /> },
  { title: "Região atendida", icon: <LuMapPin /> },
]

export function HeroSection() {
  return (
    <Box
      bg="bg.sectionDeep"
      id="inicio"
      overflow="hidden"
      position="relative"
      py={{ base: "16", lg: "24" }}
      _before={{
        content: '""',
        inset: "0",
        position: "absolute",
        bgImage: "url('/images/bg/cool-texture.png')",
        bgRepeat: "no-repeat",
        bgSize: "cover",
        opacity: 0.25,
        backgroundPosition: "center bottom",
      }}
    >
      <Box
        bgGradient="radial(circle at 20% 20%, brand.subtle, transparent 42%)"
        inset="0"
        position="absolute"
      />
      <Container maxW="7xl" position="relative">
        <SimpleGrid alignItems="center" columns={{ base: 1, lg: 2 }} gap="12">
          <VStack align="start" gap="7">
            <VStack align="start" gap="5">
              <HStack color="brand.emphasized" fontWeight="800">
                <LuBadgeCheck />
                <Text>Atendimento técnico para ar-condicionado</Text>
              </HStack>
              <Heading as="h1" color="fg" fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.05">
                Instalação e manutenção de ar-condicionado sem enrolação, com
                orçamento rápido pelo WhatsApp.
              </Heading>
              <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} maxW="680px">
                Atendimento para residências, comércios e escritórios. Higienização,
                instalação, limpeza preventiva e correção de problemas com equipe técnica
                especializada.
              </Text>
            </VStack>

            <Flex direction={{ base: "column", sm: "row" }} gap="3" w={{ base: "full", sm: "auto" }}>
              <CTAButton href={getWhatsAppUrl()} variant="whatsapp" external>
                Pedir orçamento no WhatsApp
              </CTAButton>
              <CTAButton href="#servicos" variant="outline">
                Ver serviços
              </CTAButton>
            </Flex>
          </VStack>

          <PlaceholderImage
            alt="Técnico de ar-condicionado"
            fallbackLabel="Imagem do técnico"
            src="/images/hero/hero-hero.png"

          />
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 5 }} gap="4" mt="12">
          {trustItems.map((item) => (
            <Box
              bg="bg.card"
              borderColor="border.muted"
              borderRadius="card"
              borderWidth="1px"
              key={item.title}
              p="4"
            >
              <TrustItem icon={item.icon} title={item.title} />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
