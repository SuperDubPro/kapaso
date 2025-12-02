import { use } from "react"
import {
  Box,
  Heading,
  VStack,
} from "@chakra-ui/react"
import Image from "next/image"
import { setRequestLocale } from "next-intl/server"

import { CardsGrid, Slider } from "@/components"
import { type Locale, routing } from "@/i18n"
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
    <VStack maxW="100%" textAlign="center" fontSize="xl" gap="20" >
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

      <Heading size="4xl" fontWeight="bolder" alignSelf="start">
        Продукция<sup>5</sup>
      </Heading>

      <CardsGrid />
    </VStack>
  )
}
