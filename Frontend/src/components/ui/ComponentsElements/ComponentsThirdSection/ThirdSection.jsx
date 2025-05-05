import React from 'react';
import { Card, CardContent, Button, Typography, TextField } from '@mui/material';
import { thirdSectionStyles } from './ThirdSection.styles';
import StarIcon from '@mui/icons-material/Star';

const components = [
  {
    name: 'Intel Core i9-13900K',
    title: 'CPU',
    price: 589.99,
    rating: 4.8,
    description: 'High-performance desktop processor with 24 cores...',
  },
  {
    name: 'AMD Ryzen 9 7950X',
    price: 549.99,
    rating: 4.9,
    description: 'Powerhouse processor with 16 cores and 32 threads...',
  },
  {
    name: 'Intel Core i5-13600K',
    price: 319.99,
    rating: 4.7,
    description: 'Excellent balance of gaming and productivity...',
  },
];

const ComponentsThirdSection = () => {
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
        {components.map((component, index) => (
          <Card key={index} sx={thirdSectionStyles.card}>
            <CardContent className={thirdSectionStyles.cardContent}>
              <Typography variant="h6" className={thirdSectionStyles.name}>
                {component.name}
              </Typography>
              <Typography className={thirdSectionStyles.title}>
                {component.title}
              </Typography>
              <Typography variant="body2" className={thirdSectionStyles.price}>
                ${component.price.toFixed(2)}
              </Typography>
              <StarIcon className="text-yellow-500"/>
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
