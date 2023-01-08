import { nanoid } from 'nanoid'
import noImage from '../../assets/noImage.png'

const TEXTS = {
  title: 'labels.title',
}

const DESCRIPTION = [
  {
    id: nanoid(),
    text: 'labels.description.size',
    iconName: 'TbResize',
  },
  {
    id: nanoid(),
    text: 'labels.description.sun',
    iconName: 'IoSunny',
  },
  {
    id: nanoid(),
    text: 'labels.description.frost',
    iconName: 'IoSnow',
  },
  {
    id: nanoid(),
    text: 'labels.description.dry',
    iconName: 'TbTemperature',
  },
]

const CAROUSEL = [
  {
    id: nanoid(),
    image: noImage,
  },
  {
    id: nanoid(),
    image: noImage,
  },
  {
    id: nanoid(),
    image: noImage,
  },
]

const LABELS_DATA = {
  CAROUSEL,
  DESCRIPTION,
  TEXTS,
}

export default LABELS_DATA
