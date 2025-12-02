import { use } from "react"
import {
  Box,
  Button,
  Checkbox,
  HStack,
  Heading,
  Progress,
  RadioGroup,
  VStack,
} from "@chakra-ui/react"
import Image from "next/image"
import { setRequestLocale } from "next-intl/server"

import { type Locale, routing } from "@/i18n"
import { Slider } from "@/components/Slider"
import FilmImage from "@/assets/P8037954.jpg"
import LaminationImage from "@/assets/P8037910_1.jpg"

interface PageProps {
  params: Promise<{ locale: Locale }>
}

// export async function generateMetadata({ params }) {
//   const { locale } = await params
//   const t = await getTranslations({ locale, namespace: "Metadata" })

//   return {
//     title: t("title"),
//   }
// }

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }))
}

export default function Page({ params }: PageProps) {
  const { locale } = use(params)
  setRequestLocale(locale)

  return (
    <VStack gap="8" maxW="100%" textAlign="center" fontSize="xl" >
      <Box maxW="100%">
        <Slider
          items={[
            {
              key: "filmImage",
              image: <Image
                alt="Плёнка"
                src={FilmImage}
              />,
              title:"Межслойная печать",
              description:"Ширина макета до 1 180 мм и до 8 цветов",
            },
            {
              key: "laminationImage",
              image: <Image
                alt="Ламинирование"
                src={LaminationImage}
              />,
              title:"Межслойная печать",
              description:"Ширина макета до 1 180 мм и до 8 цветов",
            },
          ]}
        />
      </Box>

      <Image
        alt="chakra logo"
        src="/web-app-manifest-512x512.png"
        width="80"
        height="80"
        sizes='100vw'
      />
      <Heading size="2xl" letterSpacing="tight">
          Welcome to Chakra UI v3 + Next.js (App)
      </Heading>

      <HStack gap="10">
        <Checkbox.Root defaultChecked>
          <Checkbox.HiddenInput />
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Label>Checkbox</Checkbox.Label>
        </Checkbox.Root>

        <RadioGroup.Root display="inline-flex" defaultValue="1">
          <RadioGroup.Item value="1" mr="2">
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemControl>
              <RadioGroup.ItemIndicator />
            </RadioGroup.ItemControl>
            <RadioGroup.ItemText lineHeight="1">Radio</RadioGroup.ItemText>
          </RadioGroup.Item>

          <RadioGroup.Item value="2">
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemControl>
              <RadioGroup.ItemIndicator />
            </RadioGroup.ItemControl>
            <RadioGroup.ItemText lineHeight="1">Radio</RadioGroup.ItemText>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </HStack>

      <Progress.Root width="300px" value={65} striped>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>

      <HStack>
        <Button>Let&apos;s go!</Button>
        <Button variant="outline">bun install @chakra-ui/react</Button>
      </HStack>
    </VStack>
  )
}
