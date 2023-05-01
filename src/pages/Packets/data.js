import { nanoid } from 'nanoid'
import noImage from '../../assets/noImage.png'

const TEXTS = {
  title: 'packets.title',
  description: 'packets.description',
}

const CARDS = [
  {
    id: nanoid(),
    image: noImage,
    title: 'packets.cards.doypack.title',
    text: 'packets.cards.doypack.text',
  },
  {
    id: nanoid(),
    image: noImage,
    title: 'packets.cards.ziploc.title',
    text: 'packets.cards.ziploc.text',
  },
  {
    id: nanoid(),
    image: noImage,
    title: 'packets.cards.euroSlot.title',
    text: 'packets.cards.euroSlot.text',
  },
  {
    id: nanoid(),
    image: noImage,
    title: 'packets.cards.dieCutHandle.title',
    text: 'packets.cards.dieCutHandle.text',
  },
  {
    id: nanoid(),
    image: noImage,
    title: 'packets.cards.threeSeamVacuum.title',
    text: 'packets.cards.threeSeamVacuum.text',
  },
  {
    id: nanoid(),
    image: noImage,
    title: 'packets.cards.ziplocAndDoypack.title',
    text: 'packets.cards.ziplocAndDoypack.text',
  },
  {
    id: nanoid(),
    image: noImage,
    title: 'packets.cards.ziplocAndDoypackAndHandle.title',
    text: 'packets.cards.ziplocAndDoypackAndHandle.text',
  },
]

const PACKETS_DATA = {
  TEXTS,
  CARDS,
}

export default PACKETS_DATA
