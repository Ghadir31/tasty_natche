import { useEffect } from 'react'
import frameOne from '../assets/images/animation/frame1.png'
import burgerBalloon from '../assets/images/animation/burger-baloon.png'
import friesBalloon from '../assets/images/animation/fries-baloon.png'
import whiteHeart from '../assets/images/animation/white-heart.png'
import burgerIcon from '../assets/images/animation/burger.png'
import friesIcon from '../assets/images/animation/fries.png'
import threeHearts from '../assets/images/animation/three-white-hearts.png'

type IntroAnimationProps = {
  onComplete: () => void
}

function IntroAnimation({ onComplete }: IntroAnimationProps) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      onComplete()
    }, 5000)

    return () => {
      window.clearTimeout(timer)
    }
  }, [onComplete])

  return (
    <div className="intro-animation" role="presentation">
      <div className="intro-layer intro-layer--one">
        <img className="intro-logo" src={frameOne} alt="Natche logo and slogan" />
      </div>

      <div className="intro-layer intro-layer--two" aria-hidden="true">
        <img
          className="intro-balloon intro-balloon--burger"
          src={burgerBalloon}
          alt=""
        />
        <img
          className="intro-balloon intro-balloon--fries"
          src={friesBalloon}
          alt=""
        />
        <img className="intro-heart intro-heart--one" src={whiteHeart} alt="" />
        <img className="intro-heart intro-heart--two" src={whiteHeart} alt="" />
        <img className="intro-heart intro-heart--three" src={whiteHeart} alt="" />
      </div>

      <div className="intro-layer intro-layer--three" aria-hidden="true">
        <img className="intro-icon intro-icon--fries" src={friesIcon} alt="" />
        <img className="intro-icon intro-icon--burger" src={burgerIcon} alt="" />
        <img className="intro-hearts" src={threeHearts} alt="" />
      </div>
    </div>
  )
}

export default IntroAnimation
