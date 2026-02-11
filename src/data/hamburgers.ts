import chickenArabiaImage from '../assets/images/hamburgers/chicken-arabia.png'
import chickenArabiaMainImage from '../assets/images/hamburgers/chicken-arabia-main.png'
import deluxeChickenNatcheImage from '../assets/images/hamburgers/deluxe-chicken-natche.png'
import deluxeChickenNatcheMainImage from '../assets/images/hamburgers/deluxe-chicken-natche-main.png'
import doubleBeefNatcheImage from '../assets/images/hamburgers/double-beef-natche.png'
import doubleBeefNatcheMainImage from '../assets/images/hamburgers/double-beef-natche-main.png'
import doubleChickenNatcheImage from '../assets/images/hamburgers/double-chicken-natche.png'
import doubleChickenNatcheMainImage from '../assets/images/hamburgers/double-chicken-natche-main.png'
import lightChickenArabiaImage from '../assets/images/hamburgers/light-chicken-arabia.png'
import lightChickenArabiaMainImage from '../assets/images/hamburgers/light-chicken-arabia-main.png'
import miniBeefNatcheImage from '../assets/images/hamburgers/mini-beef-natche.png'
import miniBeefNatcheMainImage from '../assets/images/hamburgers/mini-beef-natche-main.png'
import miniChickenNatcheImage from '../assets/images/hamburgers/mini-chicken-natche.png'
import miniChickenNatcheMainImage from '../assets/images/hamburgers/mini-chicken-natche-main.png'
import nuggetsNatcheImage from '../assets/images/hamburgers/nuggets-natche.png'
import nuggetsNatcheMainImage from '../assets/images/hamburgers/nuggets-natchi-main.png'
import royalChickenNatcheImage from '../assets/images/hamburgers/royal-chicken-natche.png'
import royalChickenNatcheMainImage from '../assets/images/hamburgers/royal-chicken-natche-main.png'
import tastyNatcheImage from '../assets/images/hamburgers/tasty-natche.png'
import tastyNatcheMainImage from '../assets/images/hamburgers/tasty-natche-main.png'

type HamburgerItem = {
  id: string
  menuName: string
  title: string
  introDescription?: string
  description: string
  price: string
  listImage: string
  detailsImage: string
}

const hamburgers: HamburgerItem[] = [
  {
    id: 'deluxe-chicken-natche',
    menuName: 'Chicken Deluxe Natche',
    title: 'Chicken Deluxe Natche',
    description: 'قطعة من صدر الدجاج المقرمش مع خس، جبنة، طماطم، مخلل وصوص ناتشي الخاص.',
    price: '650,000 LL',
    listImage: deluxeChickenNatcheImage,
    detailsImage: deluxeChickenNatcheMainImage,
  },
  {
    id: 'double-chicken-natche',
    menuName: 'Double Chicken Natche',
    title: 'Double Chicken Natche',
    introDescription: 'ضعاف المتعة',
    description: 'قطعتان من الدجاج المقرمش مع خس، جبنة وصوص ناتشي المميز.',
    price: '450,000 LL',
    listImage: doubleChickenNatcheImage,
    detailsImage: doubleChickenNatcheMainImage,
  },
  {
    id: 'mini-beef-natche',
    menuName: 'Mini Beef Natche',
    title: 'Mini Beef Natche',
    description: 'قطعة من أجود لحوم البقر المشوية مع كاتشب، خردل، مخلل وبصل.',
    price: '260,000 LL',
    listImage: miniBeefNatcheImage,
    detailsImage: miniBeefNatcheMainImage,
  },
  {
    id: 'royal-chicken-natche',
    menuName: 'Royal Chicken Natche',
    title: 'Royal Chicken Natche',
    introDescription: 'الملكية بامتياز',
    description: 'قطعة دجاج مقرمشة مع خس، جبنة، طماطم، مايونيز وصوص ناتشي.',
    price: '600,000 LL',
    listImage: royalChickenNatcheImage,
    detailsImage: royalChickenNatcheMainImage,
  },
  {
    id: 'light-chicken-arabia',
    menuName: 'Light Chicken Arabia',
    title: 'Light Chicken Arabia',
    description: 'نسخة أخف من أرابيا الدجاج مع خبز عربي، خضار طازجة وصوص خفيف.',
    price: '550,000 LL',
    listImage: lightChickenArabiaImage,
    detailsImage: lightChickenArabiaMainImage,
  },
  {
    id: 'double-beef-natche',
    menuName: 'Double Beef Natche',
    title: 'Double Beef Natche',
    introDescription: 'ستعشقها',
    description: 'قطعتان من أجود لحم البقر مشويتان، شريحة جبنة، خس، مخلل، بصل وصوص ناتشي.',
    price: '530,000 LL',
    listImage: doubleBeefNatcheImage,
    detailsImage: doubleBeefNatcheMainImage,
  },
  {
    id: 'mini-chicken-natche',
    menuName: 'Mini Chicken Natche',
    title: 'Mini Chicken Natche',
    introDescription: 'التميّز في البساطة',
    description: 'قطعة دجاج مقلية طرية مع خليط الخس والمايونيز داخل خبز طري.',
    price: '240,000 LL',
    listImage: miniChickenNatcheImage,
    detailsImage: miniChickenNatcheMainImage,
  },
  {
    id: 'tasty-natche',
    menuName: 'Tasty Natche',
    title: 'Tasty Natche',
    introDescription: 'كبيرة وشهية',
    description: 'قطعة برغر من أجود لحوم البقر المشوية مع شريحة جبنة، خس، مخلل، بصل وصوص ناتشي.',
    price: '690,000 LL',
    listImage: tastyNatcheImage,
    detailsImage: tastyNatcheMainImage,
  },
  {
    id: 'chicken-arabia',
    menuName: 'Chicken Arabia',
    title: 'Chicken Arabia',
    description: 'جبنة وموزريلا داخل خبز عربي محمص مع الدجاج.',
    price: '550,000 LL',
    listImage: chickenArabiaImage,
    detailsImage: chickenArabiaMainImage,
  },
  {
    id: 'nuggets-natche',
    menuName: 'Nuggets Natche',
    title: 'Nuggets Natche',
    description: 'قطع ناجتس دجاج مقرمشة تقدم مع صوص ناتشي.',
    price: '300,000 LL',
    listImage: nuggetsNatcheImage,
    detailsImage: nuggetsNatcheMainImage,
  },
]

const hamburgersById = new Map(hamburgers.map((item) => [item.id, item]))

const getHamburgerById = (id: string) => hamburgersById.get(id)

export { hamburgers, getHamburgerById }
export type { HamburgerItem }
