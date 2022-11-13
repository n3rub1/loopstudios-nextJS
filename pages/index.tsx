import { TopNav } from "./components/topnav";
import { MiddleHero } from "./components/middleHero";
import { HeaderButton } from "./components/HeaderButton";
import { GridImagesDesktop } from "./components/GridImagesDesktop";
import { GridImagesMobile } from "./components/GridImagesMobile";
import { Footer } from "./components/Footer";

function Start() {
  return (
    <div>
      <TopNav></TopNav>

      <MiddleHero></MiddleHero>

      <HeaderButton
        headerText="OUR SOLUTIONS"
        buttonText="SEE ALL"
      ></HeaderButton>

      <div className="desktopImages">
        <GridImagesDesktop></GridImagesDesktop>
      </div>
      <div className="mobileImages">
        <GridImagesMobile></GridImagesMobile>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Start;
