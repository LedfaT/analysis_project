import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { secondSectionStyles } from "./SecondSection.styles";

const ComponentsSecondSection = ({
  selectedComponent,
  setSelectedComponent,
  components,
}) => {
  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  const resetFilters = () => {
    setSelectedComponent("CPU");
  };

  return (
    <div className={secondSectionStyles.container}>
      <h2 className={secondSectionStyles.heading}>Filters</h2>
      <p className={secondSectionStyles.subtext}>
        Refine your component search
      </p>

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
                backgroundColor:
                  selectedComponent === component ? "#111827" : "#fff",
                color: selectedComponent === component ? "#fff" : "#000",
                "&:hover":
                  selectedComponent === component
                    ? { backgroundColor: "#111827" }
                    : { backgroundColor: "#f3f4f6" },
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
          id="outlined-basic"
          label="From"
          variant="outlined"
          size="small"
        />
        <TextField
          sx={secondSectionStyles.input}
          id="outlined-basic"
          label="To"
          variant="outlined"
          size="small"
        />
        <Button
          variant="outlined"
          fullWidth
          sx={secondSectionStyles.enableButton}
        >
          Enable
        </Button>
      </div>

      <Button
        variant="outlined"
        fullWidth
        onClick={resetFilters}
        sx={secondSectionStyles.resetButton}
      >
        Reset Filters
      </Button>
    </div>
  );
};

export default ComponentsSecondSection;
