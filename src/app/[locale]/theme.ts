import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        iloks: {
          50: { value: "#ECFAFF" },
          100: { value: "#D4F1FF" },
          600: { value: "#0085FF" },
        },
      },
    },
  },
  // globalCss: {
  //   ".chakra-link": {
  //     color: "iloks.600",
  //   },
  // },
  strictTokens: true,
})

export const system = createSystem(defaultConfig, customConfig)
