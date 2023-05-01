import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Collapse, Flex, Icon, Link, Stack, Text, useColorModeValue, useDisclosure,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'

export default function MobileNavItem({
  label, children, href, onBurgerClose,
}) {
  const { isOpen, onToggle } = useDisclosure()
  const { t } = useTranslation()

  const handleItemClick = () => {
    if (children) {
      onToggle()
      return
    }
    onBurgerClose()
  }

  return (
    <Stack spacing={4} onClick={handleItemClick}>
      <Link
        as={RouterLink}
        to={href ?? '#'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Flex
          py={2}
          href={href ?? '#'}
          justify="space-between"
          align="center"
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}
          >
            {t(label)}
          </Text>
          {children && (
          <Icon
            as={ChevronDownIcon}
            transition="all .25s ease-in-out"
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
          )}
        </Flex>
      </Link>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align="start"
        >
          {children
            && children.map((child) => (
              <Link
                as={RouterLink}
                key={`MobileNavItem-child-${child.label}`}
                py={2}
                to={child.href}
                onClick={onBurgerClose}
              >
                {t(child.label)}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}
