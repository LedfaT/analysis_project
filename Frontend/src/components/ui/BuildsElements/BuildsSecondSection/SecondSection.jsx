import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { secondSectionStyles } from "./SecondSection.styles";

const BuildsSecondSection = () => {
  const [selectedBuild, setSelectedBuild] = useState("Gaming");

  const builds = [
    "Gaming",
    "Content Creation",
    "Office",
    "Streaming",
    "3D modeling",
    "Designer",
  ];

  const handleBuildClick = (build) => {
    setSelectedBuild(build);
  };

  const resetFilters = () => {
    setSelectedBuild("Gaming");
  };

  return (
    <div className={secondSectionStyles.container}>
      <h2 className={secondSectionStyles.heading}>Filters</h2>
      <p className={secondSectionStyles.subtext}>Refine your component search</p>

      <div className={secondSectionStyles.section}>
        <h3 className={secondSectionStyles.sectionTitle}>Component Type</h3>
        <div className={secondSectionStyles.buttonGroup}>
          {builds.map((build) => (
            <Button
            key={build}
            variant="outlined"
            onClick={() => handleBuildClick(build)}
            sx={{
              ...secondSectionStyles.buttons,
              backgroundColor: selectedBuild === build ? "#111827" : "#fff", 
              color: selectedBuild === build ? "#fff" : "#000",
              '&:hover': selectedBuild === build
                ? { backgroundColor: "#111827" } 
                : { backgroundColor: "#f3f4f6" } 
            }}
          >
            {build}
          </Button>
          
          
          ))}
        </div>
      </div>

      <div className={secondSectionStyles.section}>
        <h3 className={secondSectionStyles.sectionTitle}>Price Range</h3>
        <TextField sx={secondSectionStyles.input} id="outlined-basic" label="From" variant="outlined" size="small" />
        <TextField sx={secondSectionStyles.input} id="outlined-basic" label="To" variant="outlined" size="small" />
        <Button variant="outlined" fullWidth sx={secondSectionStyles.enableButton}>
            Enable
        </Button>
      </div>

      <Button variant="outlined" fullWidth onClick={resetFilters} sx={secondSectionStyles.resetButton}>
        Reset Filters
      </Button>
    </div>
  );
};

export default BuildsSecondSection;
