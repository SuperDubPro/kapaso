import { type ReactNode } from "react"

import { type CardType } from "@/constants"

export type CardOnlyPhoto = {
  type: CardType.OnlyPhoto
  image: ReactNode
}

export type CardWithTitle = {
  type: CardType.WithTitle
  title: string
  image: ReactNode
}

export type CardWithLink = {
  type: CardType.WithLink
  title: string
  description: string
  link: string
  image: ReactNode
}

export type CardProps = CardOnlyPhoto | CardWithTitle | CardWithLink
