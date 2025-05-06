import React from "react";
import { TextField, CircularProgress, Button } from "@mui/material";
import { thirdSectionStyles } from "./ThirdSection.styles";
import ComponentCard from "./ComponentCard";

const ComponentsThirdSection = ({
  comp,
  loading,
  page,
  setPage,
  totalPages,
}) => {
  const onNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const onPrevPage = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <div className={thirdSectionStyles.container}>
      <div className={thirdSectionStyles.wrapper}>
        <div className={thirdSectionStyles.searchWrapper}>
          <TextField
            sx={thirdSectionStyles.searchBar}
            fullWidth
            variant="outlined"
            placeholder="Search components..."
            size="small"
          />
          <div className={thirdSectionStyles.paginationWrapper}>
            <Button
              sx={thirdSectionStyles.buttonSecondary}
              variant="contained"
              size="small"
              disabled={page === 1}
              onClick={onPrevPage}
            >
              previos
            </Button>
            <p>
              {page}/{totalPages}
            </p>
            <Button
              sx={thirdSectionStyles.buttonSecondary}
              variant="contained"
              size="small"
              disabled={page === totalPages}
              onClick={onNextPage}
            >
              next
            </Button>
          </div>
        </div>
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
