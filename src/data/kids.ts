import natcheMiniBeefImage from '../assets/images/kids/natche-mini-beef.png'
import natcheMiniChickenImage from '../assets/images/kids/natche-mini-chicken.png'
import nuggets4PcsImage from '../assets/images/kids/nuggets-4pcs.png'

type KidsMealItem = {
  id: string
  listTitle: string
  title: string
  introDescription?: string
  description: string
  price: string
  listImage: string
  detailsImage: string
  className?: string
}

const kidsMeals: KidsMealItem[] = [
  {
    id: 'natche-mini-beef',
    listTitle: 'Mini Beef Natche + TOY',
    title: 'Natche Mini Beef',
    introDescription: 'التميّز في البساطة',
    description: 'قطعة دجاج مغطاة بطبقة من خليط الطحين خس، ومايونيز.',
    price: '450,000 LL',
    listImage: natcheMiniBeefImage,
    detailsImage: natcheMiniBeefImage,
    className: 'kids-details',
  },
  {
    id: 'natche-mini-chicken',
    listTitle: 'Mini Chicken Natche + TOY',
    title: 'Natche Mini Chicken',
    introDescription: 'التميّز في البساطة',
    description: 'قطعة دجاج مغطاة بطبقة من خليط الطحين خس، ومايونيز.',
    price: '450,000 LL',
    listImage: natcheMiniChickenImage,
    detailsImage: natcheMiniChickenImage,
    className: 'kids-details',
  },
  {
    id: 'nuggets-4pcs',
    listTitle: 'Nuggets Natchi + TOY',
    title: 'NUGGETS (4PCS)',
    description: '',
    price: '450,000 LL',
    listImage: nuggets4PcsImage,
    detailsImage: nuggets4PcsImage,
    className: 'kids-details',
  },
]

const kidsMealsById = new Map(kidsMeals.map((item) => [item.id, item]))

const getKidsMealById = (id: string) => kidsMealsById.get(id)

export { kidsMeals, getKidsMealById }
export type { KidsMealItem }
