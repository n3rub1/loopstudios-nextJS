import Image from "next/image";
import facebook from "../../public/icon-facebook.svg";
import twitter from "../../public/icon-twitter.svg";
import pinterest from "../../public/icon-pinterest.svg";
import instagram from "../../public/icon-instagram.svg";

export function Footer(){
    return(
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
    )
}