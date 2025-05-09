"use client"

import { type ReactNode, type FC, useState } from "react"
import { IconButton, type IconButtonProps } from "@chakra-ui/react"

import { useMount } from "@/hooks"

interface ToggleState<T = string> {
  value: T
  icon: ReactNode
}

interface ToggleProps<T = string> extends IconButtonProps {
  states: ToggleState<T>[]
  defaultStateValue?: T
  onCustomToggle: (value: T) => void
}

export const ToggleButton: FC<ToggleProps> = ({
  states,
  defaultStateValue,
  onCustomToggle,
  ...otherProps
}) => {
  const [activeStateIndex, setActiveStateIndex] = useState<number>(-1)

  useMount(() => {
    const index = states.findIndex((state) => {
      return state.value === defaultStateValue
    })
    setActiveStateIndex(index)
  })

  const handleToggle = () => {
    let nextIndex = activeStateIndex + 1
    if (!states[nextIndex]) {
      nextIndex = 0
    }

    setActiveStateIndex((index) => {
      nextIndex = index + 1
      if (!states[nextIndex]) {
        nextIndex = 0
      }
      return nextIndex
    })

    onCustomToggle(states[nextIndex].value)
  }

  return (
    <IconButton {...otherProps} onClick={handleToggle}>
      {states[activeStateIndex]?.icon}
    </IconButton>
  )
}
