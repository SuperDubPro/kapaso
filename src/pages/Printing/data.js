import { nanoid } from 'nanoid'
import noImage from '../../assets/noImage.png'

const TEXTS = {
  title: 'printing.title',
}

const SECTIONS = [
  {
    id: nanoid(),
    image: noImage,
    title: 'printing.sections.interlayer.title',
    text: 'printing.sections.interlayer.text',
  },
  {
    id: nanoid(),
    image: noImage,
    title: 'printing.sections.surface.title',
    text: 'printing.sections.surface.text',
  },
]

const PRINTING_DATA = {
  TEXTS,
  SECTIONS,
}

export default PRINTING_DATA
