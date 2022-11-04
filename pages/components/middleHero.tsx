import vr from "../../public/image-interactive.jpg";
import Image from "next/image";

export function MiddleHero() {
    return (
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
    )
}