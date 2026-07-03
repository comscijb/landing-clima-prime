import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react"

export function Footer() {
  return (
    <Box as="footer" bg="bg.sectionDeep" borderTopColor="border.muted" borderTopWidth="1px">
      <Container maxW="7xl" py="8">
        <Flex
          align={{ base: "start", md: "center" }}
          direction={{ base: "column", md: "row" }}
          gap="4"
          justify="space-between"
        >
          <VStack align="start" gap="1">
            <Text color="fg" fontWeight="800">
              FRIO & CONFORTO
            </Text>
            <Text color="fg.subtle" fontSize="sm">
              Contato: WhatsApp placeholder
            </Text>
          </VStack>
          <Text color="fg.subtle" fontSize="sm">
            Projeto fictício para portfólio. Marca e depoimentos são exemplos.
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}
