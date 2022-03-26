import Image from "next/image"
import Menu from "./menu"
import cat1 from "../images/category1-img.png"
import cat2 from "../images/category2-img.png"
import cat3 from "../images/category3-img.png"

export default function Category() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
            <Menu />
        </div>
        <div className="site__content">
            <div className="site__category">
                <div className="category__title">
                    <p>Favorite Scare</p>
                    <p>Category</p>
                </div>
                <div className="category__block">
                    <div className="category__product">
                        <Image 
                            src={cat1}
                            width="250px"
                            height="250px"
                        />
                        <p className="product__title">
                            Ghosts
                        </p>
                        <p className="product__subtitle">
                            Choose the ghosts, <br/> the scariest there are.
                        </p>
                    </div>
                    <div className="category__product">
                        <Image 
                            src={cat2}
                            width="250px"
                            height="250px"
                        />
                        <p className="product__title">
                            Pumpkings
                        </p>
                        <p className="product__subtitle">
                            You look ot the scariest <br/> pumpkins there is.
                        </p>
                    </div>
                    <div className="category__product">
                        <Image 
                            src={cat3}
                            width="250px"
                            height="250px"
                        />
                        <p className="product__title">
                            Witch Hat
                        </p>
                        <p className="product__subtitle">
                            Pick the most stylish witch <br/> hots out there
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}