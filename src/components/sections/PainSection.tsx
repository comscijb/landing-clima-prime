import { Box, Container, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import {
  LuDroplets,
  LuGauge,
  LuHammer,
  LuSnowflake,
  LuVolume2,
  LuWind,
  LuWrench,
} from "react-icons/lu"

import { SectionHeader } from "@/components/common/SectionHeader"
import { painPoints } from "@/data/painPoints"

const icons = [LuSnowflake, LuDroplets, LuWind, LuVolume2, LuGauge, LuHammer, LuWrench]

export function PainSection() {
  return (
    <Box bg="bg.section" id="dor" py={{ base: "12", md: "20" }}>
      <Container maxW="7xl">
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 2 }}
          gap={{ base: "8", lg: "10" }}
        >
          <SectionHeader
            title="Ar-condicionado com problema vira prejuízo rápido."
            description="Quando o equipamento para, gela pouco, pinga água ou começa a consumir mais energia, adiar a manutenção pode aumentar o custo do conserto e comprometer o conforto de clientes, funcionários ou família."
          />
          <SimpleGrid columns={{ base: 1, sm: 2 }} gap="3">
            {painPoints.map((point, index) => {
              const Icon = icons[index] ?? LuWrench

              return (
                <HStack
                  align="start"
                  bg="bg.card"
                  borderColor="border.muted"
                  borderRadius="card"
                  borderWidth="1px"
                  gap="3"
                  key={point}
                  p="4"
                >
                  <Box color="brand.emphasized" fontSize="2xl" pt="1">
                    <Icon />
                  </Box>
                  <VStack align="start" gap="0">
                    <Text color="fg" fontWeight="700">
                      {point}
                    </Text>
                  </VStack>
                </HStack>
              )
            })}
          </SimpleGrid>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
