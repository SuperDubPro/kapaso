import { nanoid } from 'nanoid'
import noImage from '../../assets/noImage.png'

const TEXTS = {
  title: 'labels.title',
}

const DESCRIPTION = [
  {
    id: nanoid(),
    title: 'labels.description.materials.title',
    text: 'labels.description.materials.text',
    image: noImage,
  },
  {
    id: nanoid(),
    title: 'labels.description.sizes.title',
    text: 'labels.description.sizes.text',
    image: noImage,
  },
  {
    id: nanoid(),
    title: 'labels.description.storage.title',
    text: 'labels.description.storage.text',
    image: noImage,
  },
]

const LABELS_DATA = {
  DESCRIPTION,
  TEXTS,
}

export default LABELS_DATA
