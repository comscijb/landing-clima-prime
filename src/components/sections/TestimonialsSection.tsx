import { Box, Container, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { LuQuote, LuStar } from "react-icons/lu"

import { SectionHeader } from "@/components/common/SectionHeader"
import { testimonials } from "@/data/testimonials"

export function TestimonialsSection() {
  return (
    <Box bg="bg.sectionDeep" id="depoimentos" py={{ base: "12", md: "20" }} overflow="hidden" position="relative"
      _before={{
        content: '""',
        inset: "0",
        position: "absolute",
        bgImage: "url('/images/bg/testimonials.png')",
        bgRepeat: "no-repeat",
        bgSize: "cover",
        opacity: 0.10,
        backgroundPosition: "center center",
      }}>
      <Container maxW="7xl">
        <VStack align="stretch" gap="8">
          <SectionHeader
            eyebrow="Exemplo de portfólio"
            title="Exemplo de prova social para portfólio"
            description="Depoimentos fictícios usados apenas para demonstrar como a landing pode apresentar prova social."
          />
          <SimpleGrid columns={{ base: 1, md: 2 }} gap="5">
            {testimonials.map((testimonial) => (
              <VStack
                align="start"
                bg="bg.card"
                borderColor="border.muted"
                borderRadius="card"
                borderWidth="1px"
                gap="5"
                key={`${testimonial.name}-${testimonial.role}`}
                p={{ base: "5", md: "6" }}
              >
                <HStack color="cta.solid">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <LuStar aria-hidden="true" key={index} />
                  ))}
                </HStack>
                <Box color="brand.emphasized" fontSize="3xl">
                  <LuQuote />
                </Box>
                <Text color="fg" fontSize={{ base: "md", md: "lg" }}>
                  "{testimonial.quote}"
                </Text>
                <VStack align="start" gap="1">
                  <Text color="fg" fontWeight="800">
                    {testimonial.name}
                  </Text>
                  <Text color="fg.subtle" fontSize="sm">
                    {testimonial.role}
                  </Text>
                  {testimonial.isPortfolioExample ? (
                    <Text color="brand.emphasized" fontSize="xs" fontWeight="800">
                      Depoimento fictício de exemplo para portfólio
                    </Text>
                  ) : null}
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
