import { nanoid } from 'nanoid'
import DSC_7152 from '../Home/assets/DSC_7152.jpg'
import DSC_7169 from '../Home/assets/DSC_7169.jpg'
import DSC_7171 from '../Home/assets/DSC_7171.jpg'

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
    image: DSC_7152,
  },
  {
    id: nanoid(),
    image: DSC_7169,
  },
  {
    id: nanoid(),
    image: DSC_7171,
  },
]

const LABELS_DATA = {
  CAROUSEL,
  DESCRIPTION,
  TEXTS,
}

export default LABELS_DATA
