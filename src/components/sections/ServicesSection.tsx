import { Box, Container, SimpleGrid, VStack } from "@chakra-ui/react"
import {
  LuBriefcaseBusiness,
  LuCalendarCheck,
  LuDroplets,
  LuFileCheck,
  LuSprayCan,
  LuThermometerSnowflake,
  LuWrench,
} from "react-icons/lu"

import { SectionHeader } from "@/components/common/SectionHeader"
import { ServiceCard } from "@/components/common/ServiceCard"
import { services } from "@/data/services"

const serviceIcons = {
  installation: <LuThermometerSnowflake />,
  cleaning: <LuSprayCan />,
  maintenance: <LuCalendarCheck />,
  leak: <LuDroplets />,
  gas: <LuWrench />,
  business: <LuBriefcaseBusiness />,
  contract: <LuFileCheck />,
} as const

export function ServicesSection() {
  return (
    <Box bg="bg.sectionDeep" id="servicos" py={{ base: "12", md: "20" }} overflow="hidden" position="relative"
      _before={{
        content: '""',
        inset: "0",
        position: "absolute",
        bgImage: "url('/images/bg/cool-texture-2.png')",
        bgRepeat: "no-repeat",
        bgSize: "cover",
        opacity: 0.25,
        backgroundPosition: "center bottom",
      }}
    >
      <Container maxW="7xl"    >
        <VStack align="center" gap="10"        >
          <SectionHeader
            align="center"
            eyebrow="Nossos serviços"
            title="Serviços para manter seu ambiente climatizado e evitar dor de cabeça"
            description="Do primeiro diagnóstico ao teste final, o atendimento é pensado para resolver o problema com clareza, segurança e orientação técnica."
          />
          <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap="5">
            {services.map((service) => (
              <Box
                h="full"
                key={service.id}
                transition="transform 0.2s ease"
                _hover={{ transform: "translateY(-4px)" }}
              >
                <ServiceCard
                  description={service.description}
                  icon={serviceIcons[service.iconName as keyof typeof serviceIcons] ?? <LuWrench />}
                  title={service.title}
                />
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
