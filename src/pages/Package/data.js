import { nanoid } from 'nanoid'
import noImage from '../../assets/noImage.png'

const TEXTS = {
  title: 'packageLocale.title',
  description: 'packageLocale.packets.description',
}

const OPTIONS = [
  {
    id: nanoid(),
    image: noImage,
    description: 'packageLocale.packets.options.doypack',
  },
  {
    id: nanoid(),
    image: noImage,
    description: 'packageLocale.packets.options.ziploc',
  },
  {
    id: nanoid(),
    image: noImage,
    description: 'packageLocale.packets.options.euroSlot',
  },
  {
    id: nanoid(),
    image: noImage,
    description: 'packageLocale.packets.options.dieCutHandle',
  },
]

const PACKAGE_DATA = {
  TEXTS,
  OPTIONS,
}

export default PACKAGE_DATA
