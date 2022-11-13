import Image from "next/image";
import earth from "../../public/image-deep-earth.jpg";
import arcade from "../../public/image-night-arcade.jpg";
import soccer from "../../public/image-soccer-team.jpg";
import grid from "../../public/image-grid.jpg";
import road from "../../public/image-from-above.jpg";
import borealis from "../../public/image-pocket-borealis.jpg";
import curiosity from "../../public/image-curiosity.jpg";
import fisheye from "../../public/image-fisheye.jpg";

export function GridImagesDesktop() {
  return (
      <section className="projects-top">
        <div className="ImageDiv">
          <Image className="coloumnImage" src={earth} alt="Earth image"></Image>
          <p className="ImagePara">DEEP EARTH</p>
        </div>
        <div className="ImageDiv">
          <Image className="coloumnImage" src={arcade} alt="Arcade Image"></Image>
          <p className="ImagePara">NIGHT ARCADE</p>
        </div>
        <div className="ImageDiv">
          <Image className="coloumnImage" src={soccer} alt="Soccer image"></Image>
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
          <Image className="coloumnImage" src={borealis} alt="Borealis image"></Image>
          <p className="ImagePara">POCKET BOREALIS</p>
        </div>
        <div className="ImageDiv">
          <Image className="coloumnImage" src={curiosity} alt="Curiosity image"></Image>
          <p className="ImagePara">THE CURIOSITY</p>
        </div>
        <div className="ImageDiv">
          <Image className="coloumnImage" src={fisheye} alt="Fisheye image"></Image>
          <p className="ImagePara">MAKE IT FISHEYE</p>
        </div>
      </section>
  );
}
