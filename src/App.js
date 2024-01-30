import "./styles.css";
import React from "react";
import LineSport from "./Line";
import BarSport from "./Bar";
import HexaSport from "./Hexa";
import RadialSport from "./Radial";
import IconBox from "./Icons";
import icon1 from "./assets/Pathcalories.svg";
import icon2 from "./assets/Pathproteines.svg";
import icon3 from "./assets/appleglucides.svg";
import icon4 from "./assets/cheeseburgerLipides (2).svg";
import Header from "./Nav";
import "./App.css";
import LeftBar from "./LeftBar";
import img1 from "./assets/Group1.svg";
import img2 from "./assets/Group 32.svg";
import img3 from "./assets/Vector3.svg";
import img4 from "./assets/Vector4.svg";
import Bonjour from "./Bonjour";

export default function App() {
  return (
    <>
      <Header />

      <div className="big-container">
        <div className="left-part">
          <div className="four-icons-container">
            <LeftBar icon={img1} />
            <LeftBar icon={img2} />
            <LeftBar icon={img3} />
            <LeftBar icon={img4} />
          </div>
          <p>Copyright SportSee 2024</p>
        </div>
        <div className="right-part">
          <Bonjour />
          <div className="container-group">
            <div className="group">
              <BarSport />
              <div className="three">
                <LineSport />
                <HexaSport />
                <RadialSport />
              </div>
            </div>
            <div className="icon-group">
              <IconBox
                icon={icon1}
                bgColor="rgba(255, 0, 0, 0.1)"
                text1={"1,930kCal"}
                text2={"Calories"}
              />
              <IconBox
                icon={icon2}
                bgColor="rgba(74, 184, 255, 0.1)"
                text1={"1,930kCal"}
                text2={"Calories"}
              />
              <IconBox
                icon={icon3}
                bgColor="rgba(249, 206, 35, 0.1)"
                text1={"1,930kCal"}
                text2={"Calories"}
              />
              <IconBox
                icon={icon4}
                bgColor="rgba(253, 81, 129, 0.1)"
                text1={"1,930kCal"}
                text2={"Calories"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
