import Image from "next/image"
import vr from "../public/image-interactive.jpg"

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
                <div  className="vrGuyImage">
                <Image src={vr} alt="A person in VR" width="600px" height="400px"></Image>
                </div>
                <div className="leader-information">
                    <h2 className="leader-header">THE LEADER IN INTERACTIVE VR</h2>
                    <p className="leader-paragraph">Founded in 2011, Loopstudios has been producting world-class virtual reality projects for some of the best companies around the globe. Our award-winning creation gave transformed buisnesses through digital experiences that bind to their brand.</p>
                </div>
            </div>
        </div>
    )


}

export default Start;