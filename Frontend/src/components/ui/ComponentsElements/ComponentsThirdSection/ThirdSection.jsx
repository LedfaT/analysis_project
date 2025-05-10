import React from 'react';
import { Card, CardContent, Button, Typography, TextField } from '@mui/material';
import { thirdSectionStyles } from './ThirdSection.styles';
import StarIcon from '@mui/icons-material/Star';
import componentsData from '../../../../data/componentsData';

const ComponentsThirdSection = () => {
  const allComponents = Object.values(componentsData).flat();

  return (
    <div className={thirdSectionStyles.container}>
      <div className={thirdSectionStyles.wrapper}>
        <TextField
          sx={thirdSectionStyles.searchBar}
          fullWidth
          variant="outlined"
          placeholder="Search components..."
          size="small"
        />

        <div className={thirdSectionStyles.gridContainer}>
          {allComponents.map((component, index) => (
            <Card key={index} sx={thirdSectionStyles.card}>
              <CardContent className={thirdSectionStyles.cardContent}>
                <Typography variant="h6" className={thirdSectionStyles.name}>
                  {component.name}
                </Typography>
                <Typography variant="body2" className={thirdSectionStyles.price}>
                  ${component.price.toFixed(2)}
                </Typography>
                <div className="flex items-center">
                  <StarIcon className="text-yellow-500"/>
                  <Typography variant="body2" className="ml-1">
                    {component.rating}
                  </Typography>
                </div>
                <Typography variant="body2" className={thirdSectionStyles.description}>
                  {component.description}
                </Typography>
                <div className={thirdSectionStyles.buttonGroup}>
                  <Button sx={thirdSectionStyles.buttonPrimary} variant="outlined" size="small">
                    Details
                  </Button>
                  <Button sx={thirdSectionStyles.buttonSecondary} variant="contained" size="small">
                    Add to Build
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentsThirdSection;