import { Box, Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react"

import { CTAButton } from "@/components/common/CTAButton"
import { PlaceholderImage } from "@/components/common/PlaceholderImage"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export function FinalCTASection() {
  return (
    <Box bg="bg.section" id="contato" py={{ base: "12", md: "20" }}overflow="hidden" position="relative"
      _before={{
        content: '""',
        inset: "0",
        position: "absolute",
        bgImage: "url('/images/bg/cool-texture.png')",
        bgRepeat: "no-repeat",
        bgSize: "cover",
        opacity: 0.10,
        backgroundPosition: "center bottom",
      }}>
      <Container maxW="7xl">
        <SimpleGrid alignItems="center" columns={{ base: 1, lg: 2 }} gap={{ base: "8", lg: "10" }}>
          <VStack align="start" gap="6">
            <Heading as="h2" color="fg" size={{ base: "2xl", md: "4xl" }}>
              Precisa instalar, limpar ou consertar seu ar-condicionado?
            </Heading>
            <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} maxW="620px">
              Envie uma mensagem, explique o problema e receba uma orientação inicial para
              orçamento.
            </Text>
            <CTAButton href={getWhatsAppUrl()} variant="whatsapp" external fullOnMobile>
              Chamar no WhatsApp agora
            </CTAButton>
          </VStack>
          <PlaceholderImage
            alt="Ambiente climatizado"
            fallbackLabel="Imagem de conforto climatizado"
            src="/images/hero/footer-image.png"
          />
        </SimpleGrid>
      </Container>
    </Box>
  )
}
