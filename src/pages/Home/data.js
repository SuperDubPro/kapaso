import { nanoid } from 'nanoid'
import DSC_7169 from './assets/DSC_7169.jpg'
import DSC_7171 from './assets/DSC_7171.jpg'
import DSC_7152 from './assets/DSC_7152.jpg'

const CAROUSEL = [
  {
    id: nanoid(),
    title: 'home.carousel.first.title',
    text: 'home.carousel.first.text',
    image: DSC_7152,
  },
  {
    id: nanoid(),
    title: 'home.carousel.second.title',
    text: 'home.carousel.second.text',
    image: DSC_7169,
  },
  {
    id: nanoid(),
    title: 'home.carousel.third.title',
    text: 'home.carousel.third.text',
    image: DSC_7171,
  },
]

const PRODUCT_CARDS = [
  {
    id: nanoid(),
    icon: 'BsFillBagFill',
    header: 'home.productCards.package.header',
    text: 'home.productCards.package.text',
    btnText: 'home.moreBtn',
    to: '/package',
  },
  {
    id: nanoid(),
    icon: 'BsFillLayersFill',
    header: 'home.productCards.materials.header',
    text: 'home.productCards.materials.text',
    btnText: 'home.moreBtn',
    to: '/materials',
  },
  {
    id: nanoid(),
    icon: 'BsFillStickyFill',
    header: 'home.productCards.labels.header',
    text: 'home.productCards.labels.text',
    btnText: 'home.moreBtn',
    to: '/labels',
  },
]

const HOME_DATA = {
  PRODUCT_CARDS,
  CAROUSEL,
}

export default HOME_DATA
