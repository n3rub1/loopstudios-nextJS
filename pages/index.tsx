import Image from "next/image";
import vr from "../public/image-interactive.jpg";
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

function Start() {
  return (
    <div>
      <header className="top-part">
        <nav className="top-nav">
          <ul className="top-nav-list">
            <li className="companyName">
              <a href="#">loopstudios</a>
            </li>
          </ul>
          <ul className="top-nav-list">
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

      <section className="leader-div">
        <div className="vrGuyImage">
          <Image
            src={vr}
            alt="A person in VR"
            width="600px"
            height="400px"
          ></Image>
        </div>
        <div className="leader-information">
          <h2 className="leader-header">THE LEADER IN INTERACTIVE VR</h2>
          <p className="leader-paragraph">
            Founded in 2011, Loopstudios has been producting world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creation gave transformed buisnesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>

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
            <Image className="footer-image" src={facebook}></Image>
            <Image className="footer-image" src={twitter}></Image>
            <Image className="footer-image" src={pinterest}></Image>
            <Image className="footer-image" src={instagram}></Image>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Start;
