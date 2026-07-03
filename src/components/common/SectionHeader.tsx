import { Heading, Text, VStack } from "@chakra-ui/react"

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <VStack
      align={align === "center" ? "center" : "start"}
      gap="3"
      maxW="720px"
      textAlign={align}
    >
      {eyebrow ? (
        <Text color="brand.emphasized" fontSize="sm" fontWeight="700">
          {eyebrow}
        </Text>
      ) : null}
      <Heading as="h2" color="fg" size="2xl">
        {title}
      </Heading>
      {description ? (
        <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }}>
          {description}
        </Text>
      ) : null}
    </VStack>
  )
}
