import Image from "next/image";
import earthMobile from "../../public/mobile-deep-earth.jpg";
import arcadeMobile from "../../public/mobile-night-arcade.jpg";
import soccerMobile from "../../public/mobile-soccer-team.jpg";
import gridMobile from "../../public/mobile-grid.jpg";
import roadMobile from "../../public/mobile-from-above.jpg";
import borealisMobile from "../../public/mobile-pocket-borealis.jpg";
import curiosityMobile from "../../public/mobile-curiosity.jpg";
import fisheyeMobile from "../../public/mobile-fisheye.jpg";

export function GridImagesMobile() {
    return (
        <div>
            <section className="projects-top-mobile">
                <div className="ImageDivMobile">
                    <Image className="coloumnImageMobile" src={earthMobile} alt="Earth image"></Image>
                    <p className="ImageParaMobile">DEEP EARTH</p>
                </div>
                <div className="ImageDivMobile">
                    <Image className="coloumnImageMobile" src={arcadeMobile} alt="Arcade Image"></Image>
                    <p className="ImageParaMobile">NIGHT ARCADE</p>
                </div>
                <div className="ImageDivMobile">
                    <Image className="coloumnImageMobile" src={soccerMobile} alt="Soccer image"></Image>
                    <p className="ImageParaMobile">SOCCER TEAM VR</p>
                </div>
                <div className="ImageDivMobile">
                    <Image className="coloumnImageMobile" src={gridMobile} alt="Car image"></Image>
                    <p className="ImageParaMobile">THE GRID</p>
                </div>
                <div className="ImageDivMobile">
                    <Image className="coloumnImageMobile" src={roadMobile} alt="Road image"></Image>
                    <p className="ImageParaMobile">FROM UP ABOVE VR</p>
                </div>
                <div className="ImageDivMobile">
                    <Image className="coloumnImageMobile" src={borealisMobile} alt="Borealis image"></Image>
                    <p className="ImageParaMobile">POCKET BOREALIS</p>
                </div>
                <div className="ImageDivMobile">
                    <Image className="coloumnImageMobile" src={curiosityMobile} alt="Curiosity image"></Image>
                    <p className="ImageParaMobile">THE CURIOSITY</p>
                </div>
                <div className="ImageDivMobile">
                    <Image className="coloumnImageMobile" src={fisheyeMobile} alt="Fisheye image"></Image>
                    <p className="ImageParaMobile">MAKE IT FISHEYE</p>
                </div>
            </section>
            <p className="seeAll-mobile">SEE ALL</p>
        </div>
    );
}