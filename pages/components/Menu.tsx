import close from "../../public/icon-close.svg";
import Image from "next/image";

export function Menu() {
    return (
        <section className="menu-mobile">
            <div className="top-menu-mobile">
                {/* <h2>loopstudios</h2> */}
                <Image src={close} alt="close"></Image>
            </div>
            <div className="bottom-menu-mobile">
                <ul className="menu-items-mobile">
                    <li className="menu-list-mobile">ABOUT</li>
                    <li className="menu-list-mobile">CAREERS</li>
                    <li className="menu-list-mobile">EVENTS</li>
                    <li className="menu-list-mobile">PRODUCTS</li>
                    <li className="menu-list-mobile">SUPPORT</li>
                </ul>
            </div>
        </section>
    )
}