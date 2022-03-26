import Image from "next/image"
import Menu from "./menu"
import about_img from "../images/about-img.png"
import Link from "next/link"

export default function Category() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
            <Menu />
        </div>
        <div className="site__content">
            <div className="site__about">
                <div className="about__text">
                    <p className="about__title">
                        About Halloween <br/> Night
                    </p>
                    <p className="about__subtitle">
                        Night of all the saints, or all the dead, is <br/> celebrated on October 31 and it is a very fun <br/> internation of celebration, this celebration comes <br/> from ancient origins, and is already celebrated <br/> by everyone.
                    </p>
                    <div>
                        <Link href="/">
                            <a className="about__buttom">Know more</a>
                        </Link>  
                    </div>
                </div>
                <Image
                    src={about_img}
                    width="300px"
                    height="400px"
                />
            </div>
        </div>
      </div>
    </div>
  )
}