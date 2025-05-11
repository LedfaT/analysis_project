import React, { useState } from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';
import { styles } from './FourthSection.styles';
import StarIcon from '@mui/icons-material/Star';
import ComponentDetailsDialog from '../../../layout/ComponentDetailsDialog/ComponentDetailsDialog';
import componentsData from '../../../../data/componentsData';

const ConfiguratorFourthSection = ({ activeCategory, onAddToBuild }) => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const components = componentsData[activeCategory] || [];

  const handleDetailsClick = (component) => {
    setSelectedComponent({ ...component, category: activeCategory });
    setDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setDetailsOpen(false);
  };

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
                <Typography variant="body2" className={styles.price}>
                  ${component.price.toFixed(2)}
                </Typography>
                <div className="flex items-center">
                  <StarIcon className="text-yellow-500"/>
                  <Typography variant="body2" className="ml-1">
                    {component.rating}
                  </Typography>
                </div>
                <Typography variant="body2" className={styles.description}>
                  {component.description}
                </Typography>
                <div className={styles.buttonGroup}>
                  <Button 
                    sx={styles.buttonPrimary} 
                    variant="outlined" 
                    size="small"
                    onClick={() => handleDetailsClick(component)}
                  >
                    Details
                  </Button>
                  <Button 
                    sx={styles.buttonSecondary} 
                    variant="contained" 
                    size="small"
                    onClick={() => onAddToBuild(component, activeCategory)}
                  >
                    Add to Build
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ComponentDetailsDialog
        open={detailsOpen}
        onClose={handleCloseDetails}
        component={selectedComponent}
      />
    </div>
  );
};

export default ConfiguratorFourthSection;
