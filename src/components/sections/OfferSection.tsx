import { Box, Container, Heading, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { LuBadgeCheck, LuGift, LuShieldCheck, LuSnowflake } from "react-icons/lu"

import { offer } from "@/data/offer"

export function OfferSection() {
  return (
    <Box bg="bg.section" id="oferta" py={{ base: "12", md: "20" }}>
      <Container maxW="7xl">
        <SimpleGrid
          bg="bg.elevated"
          borderColor="border.brandSoft"
          borderRadius="card"
          borderWidth="1px"
          columns={{ base: 1, lg: 3 }}
          gap={{ base: "8", lg: "10" }}
          p={{ base: "6", md: "10" }}
          shadow="soft"
        >
          <VStack align="start" gap="5">
            <Box color="brand.emphasized" fontSize={{ base: "5xl", md: "6xl" }}>
              <LuSnowflake />
            </Box>
            <Text color="brand.emphasized" fontWeight="800">
              PLANO
            </Text>
            <Heading as="h2" color="fg" size={{ base: "2xl", md: "3xl" }}>
              {offer.name}
            </Heading>
            <Text color="fg.muted">
              Um processo completo para quem precisa instalar, limpar ou corrigir problemas no ar-condicionado
               com atendimento claro do primeiro contato ao teste final.
            </Text>
          </VStack>

          <VStack align="start" gap="4">
            <Heading as="h3" color="fg" size="md">
              O que está incluso
            </Heading>
            {offer.included.map((item) => (
              <HStack align="start" color="fg.muted" gap="3" key={item}>
                <Box color="brand.emphasized" pt="1">
                  <LuBadgeCheck />
                </Box>
                <Text>{item}</Text>
              </HStack>
            ))}
          </VStack>

          <VStack align="start" gap="5">
            <VStack align="start" gap="4">
              <Heading as="h3" color="fg" size="md">
                Bônus
              </Heading>
              {offer.bonuses.map((item) => (
                <HStack align="start" color="fg.muted" gap="3" key={item}>
                  <Box color="cta.solid" pt="1">
                    <LuGift />
                  </Box>
                  <Text>{item}</Text>
                </HStack>
              ))}
            </VStack>
            <Box
              bg="brand.subtle"
              borderColor="border.brandSoft"
              borderRadius="card"
              borderWidth="1px"
              p="5"
            >
              <HStack align="start" gap="3">
                <Box color="cta.solid" fontSize="2xl">
                  <LuShieldCheck />
                </Box>
                <VStack align="start" gap="2">
                  <Text color="fg" fontWeight="800">
                    Redução de risco
                  </Text>
                  <Text color="fg.muted">{offer.riskReducer}</Text>
                </VStack>
              </HStack>
            </Box>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
