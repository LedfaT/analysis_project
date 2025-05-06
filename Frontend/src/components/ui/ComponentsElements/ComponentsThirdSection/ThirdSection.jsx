import React from "react";
import { TextField, CircularProgress } from "@mui/material";
import { thirdSectionStyles } from "./ThirdSection.styles";
import ComponentCard from "./ComponentCard";

const ComponentsThirdSection = ({ comp, loading }) => {
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

        {loading ? (
          <CircularProgress sx={thirdSectionStyles.preloader} />
        ) : (
          <div className={thirdSectionStyles.gridContainer}>
            {comp.map((component, i) => (
              <ComponentCard key={i} component={component} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentsThirdSection;
