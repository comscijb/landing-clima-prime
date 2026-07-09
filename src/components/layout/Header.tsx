import { Box, Container, Flex, HStack, Text, VStack, Image, Icon, IconButton, Stack, Link, useMediaQuery  } from "@chakra-ui/react"
import { navigationItems } from "@/data/navigation"
import { FiMenu, FiX } from "react-icons/fi"
import { useState } from "react"
import { CTAButton } from "../common/CTAButton"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import { FaWhatsapp } from "react-icons/fa"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)
  const [isDesktop] = useMediaQuery(["(min-width: 1080px)"])

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

          {isDesktop && (
            <CTAButton href={getWhatsAppUrl()} variant="whatsapp" external>
              <HStack gap="2">
                <FaWhatsapp />
                <Text display={{ base: "none", sm: "inline" }}>WhatsApp</Text>
              </HStack>
            </CTAButton>
          )}
          
          <Box display={{ base: "block", md: "none" }} position="relative">
            <IconButton
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              variant="ghost"
              color="fg"
              border="1px solid"
              borderColor="border.muted"
              rounded="full"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              _hover={{ bg: "bg.elevated", color: "brand.fg" }}
            >
              <Icon as={isMobileMenuOpen ? FiX : FiMenu} boxSize="5" />
            </IconButton>

            {isMobileMenuOpen && (
              <Stack
                id="mobile-navigation"
                as="nav"
                aria-label="Navegação mobile"
                position="absolute"
                top="calc(100% + 12px)"
                right="0"
                zIndex="dropdown"
                w="min(76vw, 260px)"
                gap="1"
                p="3"
                rounded="2xl"
                border="1px solid"
                borderColor="border.muted"
                bg="bg.canvas"
                boxShadow="elevated"
              >
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    px="3"
                    py="2.5"
                    rounded="xl"
                    color="fg.muted"
                    fontSize="sm"
                    fontWeight="700"
                    transition="all 0.2s ease-in"
                    onClick={closeMobileMenu}
                    _hover={{
                      bg: "bg.elevated",
                      color: "brand.fg",
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}

                <CTAButton href={getWhatsAppUrl()} variant="whatsapp" external>
                  <HStack gap="2">
                    <FaWhatsapp />
                    <Text display={{ base: "inline", sm: "inline" }}>WhatsApp</Text>
                  </HStack>
                </CTAButton>
              </Stack>
            )}
          </Box>
          
        </Flex>
      </Container>
    </Box>
  )
}
