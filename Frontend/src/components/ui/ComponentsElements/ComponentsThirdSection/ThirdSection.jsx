import React from "react";
import { TextField, CircularProgress, Button } from "@mui/material";
import { thirdSectionStyles } from "./ThirdSection.styles";
import ComponentCard from "./ComponentCard";

const ComponentsThirdSection = ({ comp, loading, setPage }) => {
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
        <Button
          sx={thirdSectionStyles.buttonSecondary}
          variant="contained"
          size="small"
        >
          next
        </Button>

        <Button
          sx={thirdSectionStyles.buttonSecondary}
          variant="contained"
          size="small"
        >
          privios
        </Button>
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
