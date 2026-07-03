import { useState } from "react"

import { Box, Image, Text } from "@chakra-ui/react"

type PlaceholderImageProps = {
  alt: string
  aspectRatio?: string
  fallbackLabel: string
  src: string
}

export function PlaceholderImage({
  alt,
  aspectRatio = "4 / 3",
  fallbackLabel,
  src,
}: PlaceholderImageProps) {
  const [hasError, setHasError] = useState(false)

  return (
    <Box
      alignItems="center"
      aspectRatio={aspectRatio}
      bgGradient="linear(to-br, bg.elevated, brand.subtle)"
      borderColor="border.brandSoft"
      borderRadius="card"
      borderWidth="1px"
      display="flex"
      justifyContent="center"
      overflow="hidden"
      position="relative"
      shadow="soft"
      w="full"
    >
      {!hasError ? (
        <Image
          alt={alt}
          h="full"
          objectFit="cover"
          src={src}
          w="full"
          onError={() => setHasError(true)}
        />
      ) : (
        <Text color="fg.muted" fontWeight="700">
          {fallbackLabel}
        </Text>
      )}
    </Box>
  )
}
