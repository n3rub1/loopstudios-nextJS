import React from "react";
import Image from "next/image";
import { Menu } from "../components/Menu";
import burger from "../../public/icon-hamburger.svg";
import close from "../../public/icon-close.svg";


export function TopNav() {
  const [burgerClicked, setBurgerClicked] = React.useState(false);

  const invertBurger = () => {
    setBurgerClicked(prev => !prev)
  }


  return (
    <header className="top-part">
      {burgerClicked && <Menu
        stateChange={setBurgerClicked}
      ></Menu>}
      <nav className="top-nav">
        <ul className="top-nav-list">
          <li className="companyName">
            <a href="#">loopstudios</a>
          </li>
        </ul>
        <ul className="top-nav-list">
          {!burgerClicked && <div onClick={invertBurger} className="burger">🍔</div>}
          {/* {burgerClicked && <Image className="closeIcon" onClick={invertBurger} src={close} alt="close"></Image>} */}
          <li className="side-nav">
            <a href="about">About</a>
          </li>
          <li className="side-nav">
            <a href="news">Careers</a>
          </li>
          <li className="side-nav">
            <a href="events">Events</a>
          </li>
          <li className="side-nav">
            <a href="products">Products</a>
          </li>
          <li className="side-nav">
            <a href="support">Support</a>
          </li>
        </ul>
      </nav>
      <h1 className="hero-text">IMMERSIVE EXPERIENCES THAT DELIVER</h1>
    </header>
  );
}
