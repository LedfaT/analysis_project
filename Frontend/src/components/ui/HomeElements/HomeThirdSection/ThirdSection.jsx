import React from 'react';
import { ArrowRightAlt } from '@mui/icons-material';
import { thirdSectionStyles } from './ThirdSection.styles';
import Button from '@mui/material/Button';

const HomeThirdSection = () => {
  return (
    <section className={thirdSectionStyles.section}>
      <div className={thirdSectionStyles.container}>
        <h2 className={thirdSectionStyles.heading}>
          Ready to Build Your Dream PC?
        </h2>
        
        <p className={thirdSectionStyles.description}>
          Join thousands of PC enthusiasts who are creating their perfect builds. Start your journey today.
        </p>
        
        <div className={thirdSectionStyles.buttonsContainer}>
        <Button 
                variant="contained" 
                size="medium"
                endIcon={<ArrowRightAlt />}
                sx={thirdSectionStyles.primaryButton}>
                Start Building
        </Button>
        <Button 
                variant="outlined" 
                size="medium"
                sx={thirdSectionStyles.secondaryButton}>
                Create Account
        </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeThirdSection;