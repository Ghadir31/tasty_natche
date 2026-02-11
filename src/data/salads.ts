import ceasarSaladImage from '../assets/images/salads/ceasar-salad.png'
import colesawSaladImage from '../assets/images/salads/colesaw-salad.png'

type SaladItem = {
  id: string
  title: string
  description: string
  price: string
  price2?: string
  listImage: string
  detailsImage: string
  className?: string
}

const salads: SaladItem[] = [
  {
    id: 'ceasar-salad',
    title: 'سلطة سيزر بالدجاج',
    description:
      'تذوّق قطع خس آيسبرغ المقرمش مع شرائح الدجاج الهنيّة وحبّات خبز كروتونز المحمصة. وفوق كل هذا رشة سخية من جبن بارميزان المغمورة بصلصة سيزر اللذيذة. النضارة في كل لقمة.',
    price: '500,000 LBP',
    listImage: ceasarSaladImage,
    detailsImage: ceasarSaladImage,
    className: 'salad-details',
  },
  {
    id: 'colesaw-salad',
    title: 'Coleslaw',
    description:
      'خليط منعش من الملفوف والجزر مع صلصة كولسلو كريمية بطعم متوازن وخفيف.',
    price: 'Small: 180,000 LL',
    price2: 'Big: 270,000 LL',
    listImage: colesawSaladImage,
    detailsImage: colesawSaladImage,
    className: 'salad-details price-small',
  },
]

const saladsById = new Map(salads.map((item) => [item.id, item]))

const getSaladById = (id: string) => saladsById.get(id)

export { salads, getSaladById }
export type { SaladItem }
