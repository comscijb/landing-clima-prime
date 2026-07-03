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
              CLIMA PRIME REFRIGERAÇÃO
            </Text>
            <Text color="fg.subtle" fontSize="sm">
              Contato: (xx) xxxxx-xxxx
            </Text>
          </VStack>
          <VStack align={{ base: "start", md: "end" }} gap="1" maxW="640px">
            <Text color="fg.muted" fontSize="sm" fontWeight="700" textAlign={{ base: "left", md: "right" }}>
              Clima Prime Refrigeração: instalação, higienização e manutenção de ar-condicionado para residências e empresas.
            </Text>
            <Text color="fg.subtle" fontSize="sm" textAlign={{ base: "left", md: "right" }}>
              Projeto fictício criado para portfólio. Marca, imagens, contatos e depoimentos são exemplos demonstrativos.
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Box>
  )
}
