import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

import { semanticTokens } from "@/theme/semanticTokens"
import { tokens } from "@/theme/tokens"

const config = defineConfig({
  theme: {
    tokens,
    semanticTokens,
  },
})

export const system = createSystem(defaultConfig, config)
