import { TopNav } from "./components/topnav";
import { MiddleHero } from "./components/middleHero";
import { HeaderButton } from "./components/HeaderButton";
import { GridImages } from "./components/GridImages";
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

      <GridImages></GridImages>
      <Footer></Footer>
    </div>
  );
}
export default Start;
