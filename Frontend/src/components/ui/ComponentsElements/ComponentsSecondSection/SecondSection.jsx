import React, { useState } from "react";
import { Card, CardContent, Typography, Button, TextField } from "@mui/material";
import { secondSectionStyles } from "./SecondSection.styles";
import { thirdSectionStyles } from "./ThirdSection.styles";
import componentsData from '../../../../data/componentsData';
import StarIcon from '@mui/icons-material/Star';

const ComponentsSecondSection = () => {
  const [selectedComponent, setSelectedComponent] = useState("CPU");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [priceFilterEnabled, setPriceFilterEnabled] = useState(false);

  const allComponents = Object.entries(componentsData).flatMap(([type, components]) =>
    components.map(component => ({ ...component, type }))
  );

  const components = [
    "CPU",
    "Motherboard",
    "GPU",
    "RAM",
    "SSD",
    "HDD",
    "Case",
    "Power Supply",
    "FCS",
    "WCS"
  ];

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const enablePriceFilter = () => {
    setPriceFilterEnabled(true);
  };

  const resetFilters = () => {
    setSelectedComponent("CPU");
    setPriceRange({ min: "", max: "" });
    setPriceFilterEnabled(false);
  };

  // Фільтрація компонентів
  const filteredComponents = allComponents.filter((component) => {
    const matchesComponent = component.type === selectedComponent;
    const matchesPrice =
      !priceFilterEnabled ||
      (
        (priceRange.min === "" || component.price >= parseFloat(priceRange.min)) &&
        (priceRange.max === "" || component.price <= parseFloat(priceRange.max))
      );
    return matchesComponent && matchesPrice;
  });

  return (
    <div className="flex mr-20 ml-20">
      <div className={secondSectionStyles.container}>
        <h2 className={secondSectionStyles.heading}>Filters</h2>
        <p className={secondSectionStyles.subtext}>Refine your component search</p>

        <div className={secondSectionStyles.section}>
          <h3 className={secondSectionStyles.sectionTitle}>Component Type</h3>
          <div className={secondSectionStyles.buttonGroup}>
            {components.map((component) => (
              <Button
                key={component}
                variant="outlined"
                onClick={() => handleComponentClick(component)}
                sx={{
                  ...secondSectionStyles.buttons,
                  backgroundColor: selectedComponent === component ? "#111827" : "#fff",
                  color: selectedComponent === component ? "#fff" : "#000",
                  '&:hover': selectedComponent === component
                    ? { backgroundColor: "#111827" }
                    : { backgroundColor: "#f3f4f6" }
                }}
              >
                {component}
              </Button>
            ))}
          </div>
        </div>

        <div className={secondSectionStyles.section}>
          <h3 className={secondSectionStyles.sectionTitle}>Price Range</h3>
          <TextField
            sx={secondSectionStyles.input}
            id="min-price"
            label="From"
            variant="outlined"
            size="small"
            name="min"
            value={priceRange.min}
            onChange={handlePriceChange}
            type="number"
          />
          <TextField
            sx={secondSectionStyles.input}
            id="max-price"
            label="To"
            variant="outlined"
            size="small"
            name="max"
            value={priceRange.max}
            onChange={handlePriceChange}
            type="number"
          />
          <Button variant="outlined" fullWidth sx={secondSectionStyles.enableButton} onClick={enablePriceFilter}>
            Enable
          </Button>
        </div>

        <Button variant="outlined" fullWidth onClick={resetFilters} sx={secondSectionStyles.resetButton}>
          Reset Filters
        </Button>
      </div>

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
            {filteredComponents.map((component, index) => (
              <Card key={index} sx={thirdSectionStyles.card}>
                <CardContent className={thirdSectionStyles.cardContent}>
                  <Typography variant="h6" className={thirdSectionStyles.name}>
                    {component.name}
                  </Typography>
                  <Typography variant="body2" className={thirdSectionStyles.price}>
                    ${component.price.toFixed(2)}
                  </Typography>
                  <div className="flex items-center">
                    <StarIcon className="text-yellow-500" />
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
    </div>
  );
};

export default ComponentsSecondSection;
