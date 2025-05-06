import React, { useState, useEffect } from "react";
import Header from "../../components/layout/Header/Header.jsx";
import Footer from "../../components/layout/Footer/Footer.jsx";

import { homePageStyles } from "./Home.styles";
import HomeFirstSection from "../../components/ui/HomeElements/HomeFirstSection/FirstSection.jsx";
import HomeSecondSection from "../../components/ui/HomeElements/HomeSecondSection/SecondSection.jsx";
import HomeThirdSection from "../../components/ui/HomeElements/HomeThirdSection/ThirdSection.jsx";

const Home = () => {
  return (
    <div className={homePageStyles.homePage}>
      <HomeFirstSection />
      <HomeSecondSection />
      <HomeThirdSection />
    </div>
  );
};

export default Home;
