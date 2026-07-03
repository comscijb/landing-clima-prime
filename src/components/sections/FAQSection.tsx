import { useState } from "react"

import { Box, Button, Container, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { LuChevronDown } from "react-icons/lu"

import { SectionHeader } from "@/components/common/SectionHeader"
import { faqItems } from "@/data/faq"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Box bg="bg.sectionDeep" id="faq" py={{ base: "12", md: "20" }} overflow="hidden" position="relative"
      _before={{
        content: '""',
        inset: "0",
        position: "absolute",
        bgImage: "url('/images/bg/faq.png')",
        bgRepeat: "no-repeat",
        bgSize: "cover",
        opacity: 0.10,
        backgroundPosition: "center top",
      }}>
      <Container maxW="7xl">
        <VStack align="center" gap="8">
          <SectionHeader align="center" title="Perguntas frequentes" />
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap="4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <Box
                  bg="bg.card"
                  borderColor="border.muted"
                  borderRadius="card"
                  borderWidth="1px"
                  key={item.question}
                  overflow="hidden"
                >
                  <Button
                    aria-expanded={isOpen}
                    bg="transparent"
                    color="fg"
                    h="auto"
                    justifyContent="space-between"
                    p="5"
                    textAlign="left"
                    whiteSpace="normal"
                    w="full"
                    _hover={{ bg: "brand.subtle" }}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <HStack align="start" justify="space-between" w="full">
                      <Text fontWeight="800">{item.question}</Text>
                      <Box
                        color="brand.emphasized"
                        flexShrink="0"
                        mt="1"
                        transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                        transition="transform 0.2s ease"
                      >
                        <LuChevronDown />
                      </Box>
                    </HStack>
                  </Button>
                  {isOpen ? (
                    <Text color="fg.muted" px="5" pb="5">
                      {item.answer}
                    </Text>
                  ) : null}
                </Box>
              )
            })}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
