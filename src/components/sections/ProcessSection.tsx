import { Box, Container, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { LuCalendarCheck, LuClipboardCheck, LuMessageCircle, LuShieldCheck } from "react-icons/lu"

import { SectionHeader } from "@/components/common/SectionHeader"
import { processSteps } from "@/data/processSteps"

const stepIcons = [LuMessageCircle, LuClipboardCheck, LuCalendarCheck, LuShieldCheck]

export function ProcessSection() {
  return (
    <Box bg="bg.elevated" id="processo" py={{ base: "12", md: "20" }}>
      <Container maxW="7xl">
        <VStack align="center" gap="10" >
          <SectionHeader align="center" title="Como funciona o atendimento" />
          <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="5">
            {processSteps.map((item, index) => {
              const Icon = stepIcons[index] ?? LuClipboardCheck

              return (
                <VStack
                  align="start"
                  bg="bg.card"
                  borderColor="border.muted"
                  borderRadius="card"
                  borderWidth="1px"
                  gap="4"
                  h="full"
                  key={item.step}
                  p="6"
                >
                  <Box color="brand.emphasized" fontSize="3xl">
                    <Icon />
                  </Box>
                  <Text color="brand.emphasized" fontSize="sm" fontWeight="800">
                    PASSO {item.step}
                  </Text>
                  <Text color="fg" fontSize="lg" fontWeight="800">
                    {item.title}
                  </Text>
                  <Text color="fg.muted">{item.description}</Text>
                </VStack>
              )
            })}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
