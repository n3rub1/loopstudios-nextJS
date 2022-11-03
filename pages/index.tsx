import Image from "next/image";
import earth from "../public/image-deep-earth.jpg";
import arcade from "../public/image-night-arcade.jpg";
import soccer from "../public/image-soccer-team.jpg";
import grid from "../public/image-grid.jpg";
import road from "../public/image-from-above.jpg";
import borealis from "../public/image-pocket-borealis.jpg";
import curiosity from "../public/image-curiosity.jpg";
import fisheye from "../public/image-fisheye.jpg";
import facebook from "../public/icon-facebook.svg";
import twitter from "../public/icon-twitter.svg";
import pinterest from "../public/icon-pinterest.svg";
import instagram from "../public/icon-instagram.svg";
import { TopNav } from "./components/topnav";
import { MiddleHero } from "./components/middleHero";

function Start() {

  return (

    <div>
      <TopNav></TopNav>
      <MiddleHero></MiddleHero>

      <section>
        <div className="creation-top">
          <h2 className="ourCreations">OUR CREATIONS</h2>
          <p className="seeAll">SEE ALL</p>
        </div>
      </section>

      <section className="projects-top">
        <div className="ImageDiv">
          <Image className="coloumnImage" src={earth} alt="Earth image"></Image>
          <p className="ImagePara">DEEP EARTH</p>
        </div>
        <div className="ImageDiv">
          <Image
            className="coloumnImage"
            src={arcade}
            alt="Arcade Image"
          ></Image>
          <p className="ImagePara">NIGHT ARCADE</p>
        </div>
        <div className="ImageDiv">
          <Image
            className="coloumnImage"
            src={soccer}
            alt="Soccer image"
          ></Image>
          <p className="ImagePara">SOCCER TEAM VR</p>
        </div>
        <div className="ImageDiv">
          <Image className="coloumnImage" src={grid} alt="Car image"></Image>
          <p className="ImagePara">THE GRID</p>
        </div>
        <div className="ImageDiv">
          <Image className="coloumnImage" src={road} alt="Road image"></Image>
          <p className="ImagePara">FROM UP ABOVE VR</p>
        </div>
        <div className="ImageDiv">
          <Image
            className="coloumnImage"
            src={borealis}
            alt="Borealis image"
          ></Image>
          <p className="ImagePara">POCKET BOREALIS</p>
        </div>
        <div className="ImageDiv">
          <Image
            className="coloumnImage"
            src={curiosity}
            alt="Curiosity image"
          ></Image>
          <p className="ImagePara">THE CURIOSITY</p>
        </div>
        <div className="ImageDiv">
          <Image
            className="coloumnImage"
            src={fisheye}
            alt="Fisheye image"
          ></Image>
          <p className="ImagePara">MAKE IT FISHEYE</p>
        </div>
      </section>

      <footer className="footer">
        <div className="top-footer">
          <div className="companyName-footer">
            <h3>loopstudios</h3>
          </div>
          <div className="images-footer">
            <Image className="footer-image facebook" alt="facebook" src={facebook}></Image>
            <Image className="footer-image twitter" alt="twitter" src={twitter}></Image>
            <Image className="footer-image pinterest" alt="pinterest" src={pinterest}></Image>
            <Image className="footer-image instagram" alt="instagram" src={instagram}></Image>
          </div>
        </div>

        <div className="bottom-footer">
          <nav className="navbar-footer-top">
            <ul className="navbar-footer">
              <li className="side-nav-footer">
                <a href="about">About</a>
              </li>
              <li className="side-nav-footer">
                <a href="news">Careers</a>
              </li>
              <li className="side-nav-footer">
                <a href="events">Events</a>
              </li>
              <li className="side-nav-footer">
                <a href="products">Products</a>
              </li>
              <li className="side-nav-footer">
                <a href="support">Support</a>
              </li>
            </ul>

          </nav>
          <div className="copyright">
            ©2022 Loopstudios. All rights reserved.
          </div>

        </div>
      </footer>
    </div>
  );
}
export default Start;
