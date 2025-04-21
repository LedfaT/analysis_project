import React, { useState, useEffect } from 'react';
import Header from "../../components/layout/Header/Header.jsx";
import { homePageStyles } from './Home.styles';
import Button from '@mui/material/Button';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';


const Home = () => {
    return (
        <div className={homePageStyles.homePage}>
            <Header />
            <section className={homePageStyles.heroSection}>
                <div className={homePageStyles.heroContent}>
                    <span className={homePageStyles.subtitle}>Design Your Dream PC</span>
                    <h1 className={homePageStyles.mainTitle}>
                        Build The Perfect<br />
                        PC For Your Needs
                    </h1>
                    <p className={homePageStyles.description}>
                        Customize, configure, and compare PC builds with our powerful, easy-to-use platform. 
                        Take control of your next PC build experience.
                    </p>
                    <div className={homePageStyles.buttonGroup}>
                        <Button 
                            variant="contained" 
                            size="large"
                            endIcon={<ArrowRightAlt />}
                            sx={homePageStyles.primaryButton}
                        >
                            Start Building
                        </Button>
                        <Button 
                            variant="outlined" 
                            size="large"
                            sx={homePageStyles.secondaryButton}
                        >
                            View Recommended Builds
                        </Button>
                    </div>
                </div>

                <div className={homePageStyles.buildCard}  style={homePageStyles.bgimage}>
                    <div className={homePageStyles.cardContent}>
                        <h3 className={homePageStyles.cardSubtitle}>Gaming Build</h3>
                        <h2 className={homePageStyles.cardTitle}>Ultimate Gaming Rig 2023</h2>
                        <p className={homePageStyles.cardPrice}>Starting at $1,299</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;