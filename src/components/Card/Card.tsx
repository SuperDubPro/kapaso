import { type FC } from "react"
import { type BoxProps } from "@chakra-ui/react"

import { CardType } from "@/constants"
import { type CardProps } from "@/types"

import { OnlyPhoto } from "./components/OnlyPhoto"
import { WithTitle } from "./components/WithTitle"
import { WithLink } from "./components/WithLink"

export const Card: FC<CardProps & BoxProps> = (props) => {
  const { type } = props

  switch (type) {
  case CardType.OnlyPhoto:
    return <OnlyPhoto {...props} />

  case CardType.WithTitle:
    return <WithTitle {...props} />

  case CardType.WithLink:
    return <WithLink {...props} />

  default:
    return <></>
  }
}
