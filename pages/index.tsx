import Image from "next/image"
import vr from "../public/image-interactive.jpg"
import earth from "../public/image-deep-earth.jpg"
import arcade from "../public/image-night-arcade.jpg"
import soccer from "../public/image-soccer-team.jpg"
import grid from "../public/image-grid.jpg"
import road from "../public/image-from-above.jpg"
import borealis from "../public/image-pocket-borealis.jpg"
import curiosity from "../public/image-curiosity.jpg"
import fisheye from "../public/image-fisheye.jpg"

function Start() {

    return (
        <div>
            <div className="top-part">
                <nav className="top-nav">
                    <ul className="top-nav-list">
                        <li className="companyName"><a href="#">loopstudios</a></li>
                    </ul>
                    <ul className="top-nav-list">
                        <li className="side-nav"><a href="about">About</a></li>
                        <li className="side-nav"><a href="news">Careers</a></li>
                        <li className="side-nav"><a href="events">Events</a></li>
                        <li className="side-nav"><a href="products">Products</a></li>
                        <li className="side-nav"><a href="support">Support</a></li>
                    </ul>
                </nav>
                <h1 className="hero-text">IMMERSIVE EXPERIENCES THAT DELIVER</h1>
            </div>

            <div className="leader-div">
                <div className="vrGuyImage">
                    <Image src={vr} alt="A person in VR" width="600px" height="400px"></Image>
                </div>
                <div className="leader-information">
                    <h2 className="leader-header">THE LEADER IN INTERACTIVE VR</h2>
                    <p className="leader-paragraph">Founded in 2011, Loopstudios has been producting world-class virtual reality projects for some of the best companies around the globe. Our award-winning creation gave transformed buisnesses through digital experiences that bind to their brand.</p>
                </div>
            </div>

            <div>
                <div className="creation-top">
                    <h2 className="ourCreations">OUR CREATIONS</h2>
                    <p className="seeAll">SEE ALL</p>
                </div>
            </div>

            <div className="projects-top">
                <div className="earthImage">
                    <Image src={earth} alt="Earth image"></Image>
                    <p className="earthImagePara">DEEP EARTH</p>
                </div>
                <div className="arcadeImage">
                    <Image src={arcade} alt="Arcade Image"></Image>
                    <p className="earthImagePara">NIGHT ARCADE</p>
                </div>
                <div className="soccerImage">
                    <Image src={soccer} alt="Soccer image"></Image>
                    <p className="soccerImagePara">SOCCER TEAM VR</p>
                </div>
                <div className="carImage">
                    <Image src={grid} alt="Car image"></Image>
                    <p className="carImagePara">THE GRID</p>
                </div>
                <div className="roadImage">
                    <Image src={road} alt="Road image"></Image>
                    <p className="roadImagePara">FROM UP ABOVE VR</p>
                </div>
                <div className="borealisImage">
                    <Image src={borealis} alt="Borealis image"></Image>
                    <p className="borealisImagePara">POCKET BOREALIS</p>
                </div>
                <div className="curiosityImage">
                    <Image src={curiosity} alt="Curiosity image"></Image>
                    <p className="curiosityImagePara">THE CURIOSITY</p>
                </div>
                <div className="fisheyeImage">
                    <Image src={fisheye} alt="Fisheye image"></Image>
                    <p className="fisheyeImagePara">MAKE IT FISHEYE</p>
                </div>
            </div>
        </div>
    )
}
export default Start;