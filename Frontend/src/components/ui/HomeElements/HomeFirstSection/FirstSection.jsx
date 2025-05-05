import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import {firstSectionStyles} from './FirstSection.styles';

const HomeFirstSection = () =>{
    return(
    <section className={firstSectionStyles.heroSection}>
                <div className={firstSectionStyles.heroContent}>
                    <span className={firstSectionStyles.subtitle}>Design Your Dream PC</span>
                    <h1 className={firstSectionStyles.mainTitle}>
                        Build The Perfect<br />
                        PC For Your Needs
                    </h1>
                    <p className={firstSectionStyles.description}>
                        Customize, configure, and compare PC builds with our powerful, easy-to-use platform. 
                        Take control of your next PC build experience.
                    </p>
                    <div className={firstSectionStyles.buttonGroup}>
                        <Link to={"/configurator"}>
                        <Button 
                            variant="contained" 
                            size="large"
                            endIcon={<ArrowRightAlt />}
                            sx={firstSectionStyles.primaryButton}
                        >
                            Start Building
                        </Button>
                        </Link>
                        <Link to={"/builds"}>
                        <Button 
                            variant="outlined" 
                            size="large"
                            sx={firstSectionStyles.secondaryButton}
                        >
                            View Recommended Builds
                        </Button>
                        </Link>
                    </div>
                </div>

                <div className={firstSectionStyles.buildCard}  style={firstSectionStyles.bgimage}>
                    <div className={firstSectionStyles.cardContent}>
                        <h3 className={firstSectionStyles.cardSubtitle}>Gaming Build</h3>
                        <h2 className={firstSectionStyles.cardTitle}>Ultimate Gaming Rig 2023</h2>
                        <p className={firstSectionStyles.cardPrice}>Starting at $1,299</p>
                    </div>
                </div>
            </section>
    );
};

export default HomeFirstSection;