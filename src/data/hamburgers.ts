import chickenArabiaImage from '../assets/images/hamburgers/chicken-arabia.png'
import chickenArabiaMainImage from '../assets/images/hamburgers/chicken-arabia-main.png'
import deluxeChickenNatcheImage from '../assets/images/hamburgers/deluxe-chicken-natche.png'
import deluxeChickenNatcheMainImage from '../assets/images/hamburgers/deluxe-chicken-natche-main.png'
import doubleBeefNatcheImage from '../assets/images/hamburgers/double-beef-natche.png'
import beefDeluxeNatcheImage from '../assets/images/hamburgers/beef-deluxe-natche.png'
import beefDeluxeNatcheMainImage from '../assets/images/hamburgers/beef-deluxe-natche-main.png'
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
  className?: string
  introDescription?: string
  description: string
  price: string
  price2?: string
  listImage: string
  detailsImage: string
}

const hamburgers: HamburgerItem[] = [
  {
    id: 'deluxe-chicken-natche',
    menuName: 'Chicken Deluxe Natche',
    title: 'Chicken Deluxe Natche',
    introDescription: 'قطعة من صدر الدجاج المغطى بطبقة من البقسماط المقرمش',
    description: 'يتوجها الخس، الطماطم، شريحة جبنة، وشريحة جبش مدخن مع صلصة المايونيز وخردل الديجون تدغدغ الحواس',
    price: '650,000 LL',
    listImage: deluxeChickenNatcheImage,
    detailsImage: deluxeChickenNatcheMainImage,
  },
  {
    id: 'double-chicken-natche',
    menuName: 'Double Chicken Natche',
    title: 'Double Chicken Natche',
    introDescription: 'ضاعِف المتعة',
    description: 'قطعتان من الدجاج المغطى بخليط الطحين، جبنة، خس، إضافة إلى المايونيز الغني',
    price: '450,000 LL',
    listImage: doubleChickenNatcheImage,
    detailsImage: doubleChickenNatcheMainImage,
  },
  {
    id: 'mini-beef-natche',
    menuName: 'Mini Beef Natche',
    title: 'Mini Beef Natche',
    description: 'قطعة من أجود لحوم البقر المشوية مع كاتشب، خردل، مخلل وبصل',
    price: '260,000 LL',
    listImage: miniBeefNatcheImage,
    detailsImage: miniBeefNatcheMainImage,
  },
  {
    id: 'royal-chicken-natche',
    menuName: 'Royal Chicken Natche',
    title: 'Royal Chicken Natche',
    introDescription: 'الملكية بامتياز',
    description: 'قطعة سميكة من الدجاج المغطى بالبسقماط مع شريحة جبنة، خس، بندورة، مايونيز',
    price: '600,000 LL',
    listImage: royalChickenNatcheImage,
    detailsImage: royalChickenNatcheMainImage,
  },
  {
    id: 'light-chicken-arabia',
    menuName: 'Light Chicken Arabia',
    title: 'Light Chicken Arabia',
    introDescription: '٦٠٪ سعرات حرارية أقل',
    description: 'قطعتان من الدجاج المشوي الطري ملفوفة بخبزة الشوفان المحمصة، بندورة طازجة، بصل ومخلل. مغمورة بصلصة اللبن منخفضة السعرات',
    price: '550,000 LL',
    listImage: lightChickenArabiaImage,
    detailsImage: lightChickenArabiaMainImage,
  },
  {
    id: 'beef-deluxe-natche',
    menuName: 'Beef Deluxe Natche',
    title: 'Beef Deluxe Natche',
    introDescription: 'اذا رغبت ان تجمع كل شيء في وجبتك عليك بهذه الوصفة الرائعة',
    description: 'لحم بقر مشوي مع جبنة خس، طماطم، مايونيز، كاتشاب، خردل، بصل، مخلل. انها وصفة ديلوكس التي تجمع الكل',
    price: '650,000 LL',
    listImage: beefDeluxeNatcheImage,
    detailsImage: beefDeluxeNatcheMainImage,
  },
  {
    id: 'double-beef-natche',
    menuName: 'Double Beef Natche',
    title: 'Double Beef Natche',
    introDescription: 'ستعشقها',
    description: 'قطعتان من أجود لحوم البقر، مشويتان، شريحة جبنة، خس، مخلل، بصل، إضافة إلى صلصة رائعة',
    price: '530,000 LL',
    listImage: doubleBeefNatcheImage,
    detailsImage: doubleBeefNatcheMainImage,
  },
  {
    id: 'mini-chicken-natche',
    menuName: 'Mini Chicken Natche',
    title: 'Mini Chicken Natche',
    introDescription: 'التميّز في البساطة',
    description: 'قطعة دجاج مغطاة بطبقة من خليط الطحين، خس، ومايونيز',
    price: '240,000 LL',
    listImage: miniChickenNatcheImage,
    detailsImage: miniChickenNatcheMainImage,
  },
  {
    id: 'tasty-natche',
    menuName: 'Tasty Natche',
    title: 'Tasty Natche',
    introDescription: 'كبيرة وشهية',
    description: 'قطعة سميكة من اجود لحوم البقر، مشوية مع شريحتي جبنة تتوجها شريحتان طماطم، خس، بصل، اضافة الى صلصتنا السرية الخاصة جداً',
    price: '690,000 LL',
    listImage: tastyNatcheImage,
    detailsImage: tastyNatcheMainImage,
  },
  {
    id: 'chicken-arabia',
    menuName: 'Chicken Arabia',
    title: 'Chicken Arabia',
    introDescription: 'قطعتان من الدجاج المشوي الطري',
    description: 'ملفوفة بخبزة تورتيا محمّصة، مع بندورة طازجة، بصل، ومخلل، مغمورة بصلصة خاصة',
    price: '550,000 LL',
    listImage: chickenArabiaImage,
    detailsImage: chickenArabiaMainImage,
  },
  {
    id: 'nuggets-natche',
    menuName: 'Nuggets Natche',
    className:'price-small',
    title: 'Nuggets Natche',
    description: 'نتشة صغيرة وشهية من قطع الدجاج الأبيض اللذيذ. غمّسها بالصلصلة التي تُحب واستمتع بمذاقٍ لا يُقاوم ',
    price: '5 pc 250,000 LL',
    price2: '9 pc 420,000 LL',
    listImage: nuggetsNatcheImage,
    detailsImage: nuggetsNatcheMainImage,
  },
]

const hamburgersById = new Map(hamburgers.map((item) => [item.id, item]))

const getHamburgerById = (id: string) => hamburgersById.get(id)

export { hamburgers, getHamburgerById }
export type { HamburgerItem }
