import type { ReactNode } from "react"

import { Box, HStack, Text, VStack } from "@chakra-ui/react"

type TrustItemProps = {
  title: string
  description?: string
  icon: ReactNode
}

export function TrustItem({ title, description, icon }: TrustItemProps) {
  return (
    <HStack align="start" gap="3">
      <Box color="brand.emphasized" fontSize="2xl" pt="1">
        {icon}
      </Box>
      <VStack align="start" gap="1">
        <Text color="fg" fontWeight="700">
          {title}
        </Text>
        {description ? (
          <Text color="fg.subtle" fontSize="sm">
            {description}
          </Text>
        ) : null}
      </VStack>
    </HStack>
  )
}
