import { useNavigate } from 'react-router-dom'

import natcheBlue from '../assets/images/contact/Natche-blue.png'
import manEating from '../assets/images/contact/man-eating.png'

const aboutParagraphs = [
  'مطعم برغر بمفهوم عصري يجمع بين السرعة، الجودة، والإتقان',
  'استوحينا فكرتنا من أشهر العلامات العالمية في مجال البرغر، واعتنينا بأدق التفاصيل، اخترنا اللحم البقري المُغذّى على الحبوب، والخبز الطازج، وصُنعنا صلصاتنا الخاصة بخلطات سرّية تميّز كل وجبة.',
  'لأننا نؤمن أن الطعام الجيد يجب أن يُرى كما يُتذوّق، نقوم بكل خطوات التحضير أمام الزبون مباشرة، بشفافية كاملة ونضارة مضمونة.',
  'ولأن الانتظار ليس جزءًا من المتعة،',
  'اعتمدنا خدمة Drive-Thru لتتسلّم طلبك خلال دقائق قليلة معدودة.',
  'الجودة في Natche ليست مادةً ترويجية، بل نظامُ عمل، نلتزم فيه بمعايير السلامة الغذائية العالمية ISO 22000، حرصًا على أعلى درجات النظافة والدقة والاحتراف.',
  'وفي Natche، نؤمن أن الطعم المميّز لا ينبغي أن يكون مرتفع التكلفة،',
  'لذلك صمّمنا أسعارنا بعناية لتناسب ميزانيات الشباب دون أي تفريط بالجودة أو الكميّة.',
]

function AboutPage() {
  const navigate = useNavigate()

  const handleClose = () => {
    navigate('/')
  }

  return (
    <section className="about-page" aria-label="About Natche">
      <button className="about-close" type="button" aria-label="Close about page" onClick={handleClose}>
        <span className="about-close-icon" aria-hidden="true" />
      </button>

      <div className="about-content">
        {aboutParagraphs.map((paragraph) => (
          <p className="about-paragraph" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="about-art">
        <img className="about-man" src={manEating} alt="Man eating burger" />
        <img className="about-natche" src={natcheBlue} alt="Natche" />
      </div>
    </section>
  )
}

export default AboutPage
