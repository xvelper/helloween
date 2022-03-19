import Image from "next/image"
import home1 from "../images/home1-img.png"
import Menu from "./menu"

export default function Index() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
          <Menu />
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