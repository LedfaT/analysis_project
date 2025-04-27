import React, { useState, useEffect } from 'react';
import Header from "../../components/layout/Header/Header.jsx";
import Footer from "../../components/layout/Footer/Footer.jsx"
import { homePageStyles } from './Home.styles';
import HomeFirstSection from '../../components/ui/HomeFirstSection/FirstSection.jsx';
import HomeSecondSection from '../../components/ui/HomeSecondSection/SecondSection.jsx';
import HomeThirdSection from '../../components/ui/HomeThirdSection/ThirdSection.jsx';

const Home = () => {
    return (
        <div className={homePageStyles.homePage}>
            <Header />
            <HomeFirstSection />
            <HomeSecondSection />
            <HomeThirdSection />
            <Footer />
        </div>
    );
};

export default Home;