import Image from "next/image"
import favicon from "../images/favicon.png"
import Link from "next/link"


export default function Menu() {
    return (
        <>
            <div className="menu__logo">
                <div className="menu__img">
                    <Image
                    src={favicon}
                    width="36px"
                    height="36px"
                    />
                </div>
                <p className="menu__name">Hellowen</p>
            </div>   
            <div className="menu__urls">
                <Link href="/">
                <a className="menu__url">Home</a>
                </Link> 
                <Link href="/category">
                <a className="menu__url">Category</a>
                </Link> 
                <Link href="/about">
                <a className="menu__url">About</a>
                </Link>
            </div>
        </>
    )
}