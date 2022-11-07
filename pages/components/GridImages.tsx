import Image from "next/image";
import earth from "../../public/image-deep-earth.jpg";
import arcade from "../../public/image-night-arcade.jpg";
import soccer from "../../public/image-soccer-team.jpg";
import grid from "../../public/image-grid.jpg";
import road from "../../public/image-from-above.jpg";
import borealis from "../../public/image-pocket-borealis.jpg";
import curiosity from "../../public/image-curiosity.jpg";
import fisheye from "../../public/image-fisheye.jpg";

import earthMobile from "../../public/mobile-deep-earth.jpg";
import arcadeMobile from "../../public/mobile-night-arcade.jpg";
import soccerMobile from "../../public/mobile-soccer-team.jpg";
import gridMobile from "../../public/mobile-grid.jpg";
import roadMobile from "../../public/mobile-from-above.jpg";
import borealisMobile from "../../public/mobile-pocket-borealis.jpg";
import curiosityMobile from "../../public/mobile-curiosity.jpg";
import fisheyeMobile from "../../public/mobile-fisheye.jpg";

export function GridImages() {
  return (
    <div>
      <section className="projects-top">
        <div className="ImageDiv">
          <Image className="coloumnImage" src={earth} alt="Earth image"></Image>
          {/* <Image className="coloumnImage" src={earthMobile} alt="Earth image"></Image> */}
          <p className="ImagePara">DEEP EARTH</p>
        </div>
        <div className="ImageDiv">
          <Image className="coloumnImage" src={arcade} alt="Arcade Image"></Image>
          {/* <Image className="coloumnImage-mobile" src={arcadeMobile} alt="Arcade Image"></Image> */}
          <p className="ImagePara">NIGHT ARCADE</p>
        </div>
        <div className="ImageDiv">
          <Image className="coloumnImage" src={soccer} alt="Soccer image"></Image>
          {/* <Image className="coloumnImage-mobile" src={soccerMobile} alt="Soccer image"></Image> */}
          <p className="ImagePara">SOCCER TEAM VR</p>
        </div>
        <div className="ImageDiv">
          <Image className="coloumnImage" src={grid} alt="Car image"></Image>
          {/* <Image className="coloumnImage-mobile" src={gridMobile} alt="Car image"></Image> */}
          <p className="ImagePara">THE GRID</p>
        </div>
        <div className="ImageDiv">
          <Image className="coloumnImage" src={road} alt="Road image"></Image>
          {/* <Image className="coloumnImage-mobile" src={roadMobile} alt="Road image"></Image> */}
          <p className="ImagePara">FROM UP ABOVE VR</p>
        </div>
        <div className="ImageDiv">
          <Image className="coloumnImage" src={borealis} alt="Borealis image"></Image>
          {/* <Image className="coloumnImage-mobile" src={borealisMobile} alt="Borealis image"></Image> */}
          <p className="ImagePara">POCKET BOREALIS</p>
        </div>
        <div className="ImageDiv">
          <Image className="coloumnImage" src={curiosity} alt="Curiosity image"></Image>
          {/* <Image className="coloumnImage-mobile" src={curiosityMobile} alt="Curiosity image"></Image> */}
          <p className="ImagePara">THE CURIOSITY</p>
        </div>
        <div className="ImageDiv">
          <Image className="coloumnImage" src={fisheye} alt="Fisheye image"></Image>
          {/* <Image className="coloumnImage-mobile" src={fisheyeMobile} alt="Fisheye image"></Image> */}
          <p className="ImagePara">MAKE IT FISHEYE</p>
        </div>
      </section>
      <p className="seeAll-mobile">SEE ALL</p>
    </div>
  );
}
