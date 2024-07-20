import "./App.css";
import React from "react";
import LineSport from "./composants/Line";
import BarSport from "./composants/Bar";
import HexaSport from "./composants/Hexa";
import RadialSport from "./composants/Radial";
import IconBox from "./composants/Icons";
import icon1 from "./assets/Pathcalories.svg";
import icon2 from "./assets/Pathproteines.svg";
import icon3 from "./assets/appleglucides.svg";
import icon4 from "./assets/cheeseburgerLipides (2).svg";
import Header from "./composants/Nav";
import LeftBar from "./composants/LeftBar";
import img1 from "./assets/Group1.svg";
import img2 from "./assets/Group 32.svg";
import img3 from "./assets/Vector3.svg";
import img4 from "./assets/Vector4.svg";
import Bonjour from "./composants/Bonjour";

export default function UserInfos({
  userData,
  activityData,
  performanceData,
  averageSessionsData,
  error,
}) {
  if (error) {
    return (
      <div className="error-message">
        <h2>Erreur, cet utilisateur n'existe pas</h2>
        <p>Veuillez changer l'url avec l'userId 12 ou 18</p>
      </div>
    );
  }

  console.log("userData:", userData);
  console.log("activityData:", activityData);
  console.log("performanceData:", performanceData);
  console.log("averageSessionsData:", averageSessionsData);

  if (!userData || !activityData || !performanceData || !averageSessionsData) {
    return <div>Chargement...</div>;
  }

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
          {userData && userData.userInfos && (
            <Bonjour firstName={userData.userInfos.firstName} />
          )}

          <div className="container-group">
            <div className="group">
              <BarSport activityData={activityData} />
              <div className="three">
                <LineSport averageSessionsData={averageSessionsData} />
                <HexaSport performanceData={performanceData} />
                {userData && (
                  <RadialSport score={userData.todayScore || userData.score} />
                )}
              </div>
            </div>
            {userData && (
              <div className="icon-group">
                <IconBox
                  icon={icon1}
                  bgColor="rgba(255, 0, 0, 0.1)"
                  text1={userData.keyData.calorieCount + "kCal"}
                  text2={"Calories"}
                />
                <IconBox
                  icon={icon2}
                  bgColor="rgba(74, 184, 255, 0.1)"
                  text1={userData.keyData.proteinCount + "g"}
                  text2={"Proteines"}
                />
                <IconBox
                  icon={icon3}
                  bgColor="rgba(249, 206, 35, 0.1)"
                  text1={userData.keyData.carbohydrateCount + "g"}
                  text2={"Glucides"}
                />
                <IconBox
                  icon={icon4}
                  bgColor="rgba(253, 81, 129, 0.1)"
                  text1={userData.keyData.lipidCount + "g"}
                  text2={"Lipides"}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
