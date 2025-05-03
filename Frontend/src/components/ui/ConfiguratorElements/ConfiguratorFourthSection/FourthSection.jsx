import React from 'react';
import { Card, CardContent, Button, Typography, TextField } from '@mui/material';
import { styles } from './FourthSection.styles';
import StarIcon from '@mui/icons-material/Star';

const components = [
  {
    name: 'Intel Core i9-13900K',
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
  {
    name: 'Intel Core i5-13600K',
    price: 319.99,
    rating: 4.7,
    description: 'Excellent balance of gaming and productivity...',
  }
];

const ConfiguratorFourthSection = () => {
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.gridContainer}>
        {components.map((component, index) => (
          <Card key={index} sx={styles.card}>
            <CardContent className={styles.cardContent}>
              <Typography variant="h6" className={styles.name}>
                {component.name}
              </Typography>
              <Typography className={styles.title}>
                {component.title}
              </Typography>
              <Typography variant="body2" className={styles.price}>
                ${component.price.toFixed(2)}
              </Typography>
              <StarIcon className="text-yellow-500"/>
              <Typography variant="body2" className={styles.description}>
                {component.description}
              </Typography>
              <div className={styles.buttonGroup}>
                <Button sx={styles.buttonPrimary} variant="outlined" size="small">
                  Details
                </Button>
                <Button sx={styles.buttonSecondary} variant="contained" size="small">
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

export default ConfiguratorFourthSection;
