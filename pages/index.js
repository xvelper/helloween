import Image from "next/image"
import home1 from "../images/home1-img.png"
import favicon from "../images/favicon.png"

export default function Index() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
            <div className="menu__logo">
              <Image
                src={favicon}
                width="16px"
                height="16px"
              />
            </div>
            <p className="menu__name">Hellowen</p>
            <div className="menu__url">
              <a>Home</a>
              <a>About</a>
              <a>Candy</a>
              <a>News</a>
              <a className="menu__support">Support</a>
            </div>
        </div>
        <div className="site__content">
            <div className="site__slider">
                <div className="slider__list">
                  <div className="slider__block">
                    <div className="block__image">
                      <Image
                        src={home1}
                        width="460px"
                        height="500px"
                      />
                    </div>
                    <div className="block__info">
                      <h1 class="info__title">
                      UOOOO
                      <br/>
                      TRICK OR
                      <br/>
                      TREAT!!
                      </h1>
                      <p class="info__description">
                        Hello world! I'am Hellowen Steve. 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slider__menu">
                  <div className="menu__mark">

                  </div>
                  <div className="menu__mark">

                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}