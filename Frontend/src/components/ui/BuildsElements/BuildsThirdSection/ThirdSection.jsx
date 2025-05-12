import React, { useState } from 'react';
import { Card, CardContent, Button, Typography, TextField } from '@mui/material';
import { thirdSectionStyles } from './ThirdSection.styles';
import StarIcon from '@mui/icons-material/Star';

const builds = [
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

const BuildsThirdSection = () => {
  const [activeTab, setActiveTab] = useState('official');

  return (
    <div className={thirdSectionStyles.container}>
      <div className={thirdSectionStyles.wrapper}>
        <div className={thirdSectionStyles.wrapperElements}>
          <TextField
            sx={thirdSectionStyles.searchBar}
            fullWidth
            variant="outlined"
            placeholder="Search builds..."
            size="small"
          />
          <div className={thirdSectionStyles.thirdButtonGroup}>
          <div className="flex gap-2 ml-4">
          <Button
            sx={{
              ...thirdSectionStyles.buttonThird,
              ...(activeTab === 'official'
                ? {
                    backgroundColor: '#000',
                    color: '#fff',
                  }
                : {
                    '&:hover': {
                      backgroundColor: 'gray',
                    },
                  }),
            }}
            onClick={() => setActiveTab('official')}
          >
            Official builds
          </Button>
          <Button
            sx={{
              ...thirdSectionStyles.buttonThird,
              ...(activeTab === 'user'
                ? {
                    backgroundColor: '#000',
                    color: '#fff',
                  }
                : {
                    '&:hover': {
                      backgroundColor: 'gray',
                    },
                  }),
            }}
            onClick={() => setActiveTab('user')}
          >
            User builds
          </Button>
</div>

          </div>
        </div>

        <div className={thirdSectionStyles.gridContainer}>
          {builds.map((build, index) => (
            <Card key={index} sx={thirdSectionStyles.card}>
              <CardContent className={thirdSectionStyles.cardContent}>
                <Typography variant="h6" className={thirdSectionStyles.name}>
                  {build.name}
                </Typography>
                <Typography className={thirdSectionStyles.title}>
                  {build.title}
                </Typography>
                <Typography variant="body2" className={thirdSectionStyles.price}>
                  ${build.price.toFixed(2)}
                </Typography>
                <StarIcon className="text-yellow-500" />
                <Typography variant="body2" className={thirdSectionStyles.description}>
                  {build.description}
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

export default BuildsThirdSection;
