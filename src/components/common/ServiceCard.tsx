import type { ReactNode } from "react"

import { Box, Heading, Text, VStack } from "@chakra-ui/react"

type ServiceCardProps = {
  title: string
  description: string
  icon: ReactNode
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <VStack
      align="start"
      bg="bg.card"
      borderColor="border.muted"
      borderRadius="card"
      borderWidth="1px"
      gap="4"
      h="full"
      p="6"
      shadow="card"
    >
      <Box color="brand.emphasized" fontSize="3xl">
        {icon}
      </Box>
      <Heading as="h3" color="fg" size="md">
        {title}
      </Heading>
      <Text color="fg.muted">{description}</Text>
    </VStack>
  )
}
