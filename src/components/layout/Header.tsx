import { Box, Container, Flex, HStack, Text, VStack, Image } from "@chakra-ui/react"
import { FaWhatsapp } from "react-icons/fa"
import { CTAButton } from "@/components/common/CTAButton"
import { navigationItems } from "@/data/navigation"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export function Header() {
  return (
    <Box
      as="header"
      backdropFilter="blur(18px)"
      bg="bg.headerGlass"
      borderBottomColor="border.muted"
      borderBottomWidth="1px"
      position="sticky"
      top="0"
      zIndex="sticky"
    >
      <Container maxW="7xl" py="3">
        <Flex align="center" gap={{ base: "3", md: "6" }} justify="space-between">
          <HStack gap="3" minW="0">
            <Flex
              align="center"
              flexShrink="0"
              h="11"
              justify="center"
              w="11"
            >
              <Image src="/images/hero/logo.png" />
            </Flex>
            <VStack align="start" gap="0" minW="0">
              <Text color="fg" fontSize="sm" fontWeight="800" lineHeight="1">
                CLIMA PRIME
              </Text>
              <Text color="brand.emphasized" fontSize="xs" fontWeight="700">
                REFRIGERAÇÃO
              </Text>
            </VStack>
          </HStack>

          <HStack
            as="nav"
            display={{ base: "none", lg: "flex" }}
            fontSize="sm"
            fontWeight="700"
            gap="6"
          >
            {navigationItems.map((item) => (
              <Box asChild color="fg.muted" key={item.href} _hover={{ color: "fg" }}>
                <a href={item.href}>{item.label}</a>
              </Box>
            ))}
          </HStack>

          <CTAButton href={getWhatsAppUrl()} variant="whatsapp" external>
            <HStack gap="2">
              <FaWhatsapp />
              <Text display={{ base: "none", sm: "inline" }}>WhatsApp</Text>
            </HStack>
          </CTAButton>
        </Flex>
      </Container>
    </Box>
  )
}
