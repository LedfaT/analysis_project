import React from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { thirdSectionStyles } from "./ThirdSection.styles";

const ComponentCard = ({
  addToBuild,
  showDetails,
  category,
  component,
  adminPanel = false,
  onDelete = () => {},
  onEdit = () => {},
}) => {
  return (
    <Card sx={thirdSectionStyles.card}>
      <CardContent className={thirdSectionStyles.cardContent}>
        <Typography variant="h6" className={thirdSectionStyles.name}>
          {component.title}
        </Typography>
        <Typography className={thirdSectionStyles.title}>
          {component.title}
        </Typography>
        <Typography variant="body2" className={thirdSectionStyles?.price}>
          ${(component.cost ?? 0).toFixed(2)}
        </Typography>
        <StarIcon className="text-yellow-500" />
        <Typography variant="body2" className={thirdSectionStyles?.description}>
          {component.description}
        </Typography>
        <div className={thirdSectionStyles.buttonGroup}>
          {!adminPanel ? (
            <>
              <Button
                sx={thirdSectionStyles.buttonPrimary}
                variant="outlined"
                size="small"
                onClick={showDetails}
              >
                Details
              </Button>
              <Button
                sx={thirdSectionStyles.buttonSecondary}
                variant="contained"
                size="small"
                onClick={() => {
                  return addToBuild(component, category);
                }}
              >
                Add to Build
              </Button>
            </>
          ) : (
            <>
              <Button
                sx={thirdSectionStyles.buttonPrimary}
                variant="outlined"
                size="small"
                onClick={onDelete}
              >
                Delete
              </Button>
              <Button
                sx={thirdSectionStyles.buttonSecondary}
                variant="contained"
                size="small"
                onClick={onEdit}
              >
                Edit
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ComponentCard;
